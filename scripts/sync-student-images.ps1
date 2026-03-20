$source = "images/student image"
$destination = "public/students-images"

if (-not (Test-Path $source)) {
  Write-Output "Source folder not found: $source"
  exit 1
}

if (-not (Test-Path $destination)) {
  New-Item -ItemType Directory -Path $destination | Out-Null
}

Get-ChildItem -Path $source -File | Where-Object { $_.Extension -match '^\.(png|jpg|jpeg)$' } | ForEach-Object {
  Copy-Item -Path $_.FullName -Destination (Join-Path $destination $_.Name) -Force
}

Write-Output "Student images synced to $destination"
