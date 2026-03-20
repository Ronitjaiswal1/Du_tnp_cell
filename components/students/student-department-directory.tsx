"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  studentDepartments,
  studentProfiles,
  type StudentDepartmentCode,
  type StudentProfile,
} from "@/lib/student-profiles";

const linkButtonBase =
  "inline-flex items-center rounded-full border border-maroon/20 bg-white px-3 py-1.5 text-xs font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white";

function getInitials(fullName: string) {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function getStudentLinks(student: StudentProfile) {
  return [
    { label: "LinkedIn", href: student.linkedin },
    { label: "GitHub", href: student.github },
    { label: "LeetCode", href: student.leetcode },
    { label: "Portfolio", href: student.portfolio },
  ].filter((item) => item.href && item.href.trim().length > 0);
}

function getEmbeddableImageUrl(imageUrl?: string) {
  if (!imageUrl || imageUrl.trim().length === 0) {
    return "";
  }

  const url = imageUrl.trim();
  const idMatch = url.match(/[?&]id=([^&#]+)/) ?? url.match(/\/d\/([^/]+)/);

  if (!idMatch?.[1]) {
    return url;
  }

  return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
}

function StudentAvatar({ student }: { student: StudentProfile }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const embeddableImageUrl = getEmbeddableImageUrl(student.imageUrl);

  const sourceCandidates = useMemo(() => {
    const safeBaseName = student.fullName
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^A-Za-z0-9_]/g, "");

    const localCandidates = [
      `/students-images/${safeBaseName}.png`,
      `/students-images/${safeBaseName}.jpg`,
      `/students-images/${safeBaseName}.jpeg`,
    ];

    const sources = [...localCandidates];

    if (student.imageFile) {
      sources.push(`/students/${student.imageFile}`);
    }

    if (embeddableImageUrl) {
      sources.push(embeddableImageUrl);
    }

    return sources;
  }, [student.fullName, student.imageFile, embeddableImageUrl]);

  useEffect(() => {
    setCandidateIndex(0);
  }, [student.id]);

  const activeSource = sourceCandidates[candidateIndex];

  if (activeSource) {
    return (
      <img
        src={activeSource}
        alt={student.fullName}
        className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-md"
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setCandidateIndex((current) => current + 1)}
      />
    );
  }

  return (
    <div className="h-28 w-28 rounded-full border-4 border-white shadow-md bg-maroon/10 text-maroon flex items-center justify-center text-2xl font-black">
      {getInitials(student.fullName)}
    </div>
  );
}

export function StudentDepartmentDirectory() {
  const [activeDepartment, setActiveDepartment] = useState<StudentDepartmentCode>("cse");

  const visibleStudents = useMemo(
    () => studentProfiles.filter((student) => student.department === activeDepartment),
    [activeDepartment]
  );

  return (
    <section className="mb-16" id="student-departments">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 w-10 bg-gold rounded-full" />
        <h2 className="font-serif text-4xl font-bold text-maroon">Department Student Profiles</h2>
      </div>

      <div className="rounded-2xl border border-maroon/10 bg-white shadow-sm overflow-hidden">
        <div className="px-6 pt-6 pb-4 border-b border-maroon/10 bg-antique-white/60">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="inline-flex min-w-full gap-3">
              {studentDepartments.map((department) => {
                const isActive = activeDepartment === department.code;
                const count = studentProfiles.filter((student) => student.department === department.code).length;

                return (
                  <button
                    key={department.code}
                    type="button"
                    onClick={() => setActiveDepartment(department.code)}
                    className={`rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors ${
                      isActive ? "bg-maroon text-antique-white" : "bg-maroon/5 text-maroon hover:bg-maroon/10"
                    }`}
                  >
                    {department.short} <span className="opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Showing <span className="font-bold text-maroon">{visibleStudents.length}</span> students from{" "}
            <span className="font-bold text-maroon">
              {studentDepartments.find((department) => department.code === activeDepartment)?.name}
            </span>
            .
          </p>
        </div>

        <div className="p-6 md:p-8">
          {visibleStudents.length === 0 ? (
            <div className="rounded-xl border border-dashed border-maroon/25 bg-maroon/5 p-8 text-center">
              <p className="font-semibold text-maroon">No student entries yet for this department.</p>
              <p className="mt-2 text-sm text-slate-600">
                Add records in <span className="font-semibold">lib/student-profiles.ts</span> or import from your sheet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleStudents.map((student) => {
                const links = getStudentLinks(student);

                return (
                  <article
                    key={student.id}
                    className="rounded-xl border border-maroon/10 bg-white p-5 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col items-center text-center">
                      <StudentAvatar student={student} />

                      <h3 className="mt-4 font-serif text-xl font-bold text-maroon">{student.fullName}</h3>
                      <p className="text-xs font-black uppercase tracking-widest text-gold mt-1">{student.year}</p>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed min-h-10">
                        {student.headline ?? "Profile details will be updated soon."}
                      </p>

                      {links.length > 0 ? (
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          {links.map((link) => (
                            <a
                              key={`${student.id}-${link.label}`}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className={linkButtonBase}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}