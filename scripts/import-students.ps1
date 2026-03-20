$rows = Import-Csv -Path "Students Information.csv"

function Safe([string]$v) {
  if ($null -eq $v) { return "" }
  return $v
}

function Normalize-Url([string]$v) {
  if ([string]::IsNullOrWhiteSpace($v)) { return "" }
  $t = $v.Trim()
  if ($t -match '^(?i)(na|n/a|no|none|-)$') { return "" }
  if ($t -match 'https?://[^\s\"]+') { return $matches[0] }
  if ($t -match '^(?i)www\.') { return "https://$t" }
  return ""
}

function Drive-Direct([string]$v) {
  $u = Normalize-Url $v
  if ([string]::IsNullOrWhiteSpace($u)) { return "" }
  if ($u -match '[?&]id=([^&#]+)') { return "https://drive.google.com/uc?export=view&id=$($matches[1])" }
  if ($u -match '/d/([^/]+)') { return "https://drive.google.com/uc?export=view&id=$($matches[1])" }
  return $u
}

function Dept-Code([string]$v) {
  $t = (Safe $v).Trim().ToLower()
  if ($t -match 'cse|computer') { return 'cse' }
  if ($t -match 'ece|electronics') { return 'ece' }
  if ($t -match '^ee$|electrical') { return 'ee' }
  return ''
}

function Esc([string]$s) {
  return ((Safe $s).Replace('\\','\\\\').Replace('"','\\"'))
}

$students = @()
foreach ($r in $rows) {
  $name = (Safe $r.'Full Name ').Trim()
  $dep = Dept-Code $r.'Department Name'
  if ([string]::IsNullOrWhiteSpace($name) -or [string]::IsNullOrWhiteSpace($dep)) { continue }

  $roll = ((Safe $r.'Roll No.').Trim() -replace '\s+','')
  $cpRaw = (Safe $r.'Any competitive programming profile link (LeetCode, HackerRank, or any other)').Trim()
  $cpUrls = @([regex]::Matches($cpRaw, 'https?://[^\s\"]+') | ForEach-Object { $_.Value.Trim() })

  $leetcode = ''
  $portfolio = ''
  if ($cpUrls.Count -gt 0) {
    $leetcode = $cpUrls[0]
    if ($cpUrls.Count -gt 1) { $portfolio = $cpUrls[1] }
  } else {
    $leetcode = Normalize-Url $cpRaw
  }

  $students += [pscustomobject]@{
    id        = if ([string]::IsNullOrWhiteSpace($roll)) { "$dep-$($students.Count + 1)" } else { "$dep-$($roll.ToLower())" }
    fullName  = $name
    department= $dep
    year      = 'B.Tech 3rd Year'
    headline  = 'Student profile submitted via Placement Form.'
    imageUrl  = Drive-Direct $r.'Profile Picture (Upload your recent photo) '
    linkedin  = Normalize-Url $r.'LinkedIn Profile Link '
    github    = Normalize-Url $r.'GitHub Profile Link '
    leetcode  = $leetcode
    portfolio = $portfolio
  }
}

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add('export type StudentDepartmentCode = "cse" | "ece" | "ee";')
$lines.Add('')
$lines.Add('export type StudentDepartment = {')
$lines.Add('  code: StudentDepartmentCode;')
$lines.Add('  short: string;')
$lines.Add('  name: string;')
$lines.Add('};')
$lines.Add('')
$lines.Add('export type StudentProfile = {')
$lines.Add('  id: string;')
$lines.Add('  fullName: string;')
$lines.Add('  department: StudentDepartmentCode;')
$lines.Add('  year: string;')
$lines.Add('  headline?: string;')
$lines.Add('  imageFile?: string;')
$lines.Add('  imageUrl?: string;')
$lines.Add('  linkedin?: string;')
$lines.Add('  github?: string;')
$lines.Add('  leetcode?: string;')
$lines.Add('  portfolio?: string;')
$lines.Add('};')
$lines.Add('')
$lines.Add('export const studentDepartments: StudentDepartment[] = [')
$lines.Add('  { code: "cse", short: "CSE", name: "Computer Science Engineering" },')
$lines.Add('  { code: "ece", short: "ECE", name: "Electronics & Communication Engineering" },')
$lines.Add('  { code: "ee", short: "EE", name: "Electrical Engineering" },')
$lines.Add('];')
$lines.Add('')
$lines.Add('export const studentProfiles: StudentProfile[] = [')

foreach ($s in $students) {
  $lines.Add('  {')
  $lines.Add('    id: "' + (Esc $s.id) + '",')
  $lines.Add('    fullName: "' + (Esc $s.fullName) + '",')
  $lines.Add('    department: "' + $s.department + '",')
  $lines.Add('    year: "' + (Esc $s.year) + '",')
  $lines.Add('    headline: "' + (Esc $s.headline) + '",')
  if (-not [string]::IsNullOrWhiteSpace($s.imageUrl)) { $lines.Add('    imageUrl: "' + (Esc $s.imageUrl) + '",') }
  if (-not [string]::IsNullOrWhiteSpace($s.linkedin)) { $lines.Add('    linkedin: "' + (Esc $s.linkedin) + '",') }
  if (-not [string]::IsNullOrWhiteSpace($s.github)) { $lines.Add('    github: "' + (Esc $s.github) + '",') }
  if (-not [string]::IsNullOrWhiteSpace($s.leetcode)) { $lines.Add('    leetcode: "' + (Esc $s.leetcode) + '",') }
  if (-not [string]::IsNullOrWhiteSpace($s.portfolio)) { $lines.Add('    portfolio: "' + (Esc $s.portfolio) + '",') }
  $lines.Add('  },')
}

$lines.Add('];')
Set-Content -Path "lib/student-profiles.ts" -Value $lines -Encoding UTF8
Write-Output "Wrote $($students.Count) students to lib/student-profiles.ts"
