"use client";

import { FormEvent, useState } from "react";

type InquiryForm = {
  name: string;
  position: string;
  company: string;
  email: string;
  contact: string;
};

const initialForm: InquiryForm = {
  name: "",
  position: "",
  company: "",
  email: "",
  contact: "",
};

export function RecruiterContactCard() {
  const [formData, setFormData] = useState<InquiryForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (field: keyof InquiryForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/recruiter-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your details right now.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks! Our placement cell team will reach out soon.");
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-maroon/15 shadow-xl p-7 md:p-8">
      <h3 className="text-2xl font-serif text-maroon mb-2">Company Contact Form</h3>
      <p className="text-sm text-slate-600 mb-6">Fill in your details and our placement admin will connect with you.</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="recruiter-name">
            Name
          </label>
          <input
            id="recruiter-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="recruiter-position">
            Position
          </label>
          <input
            id="recruiter-position"
            type="text"
            required
            value={formData.position}
            onChange={(e) => handleChange("position", e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            placeholder="e.g. Talent Acquisition Manager"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="recruiter-company">
            Company
          </label>
          <input
            id="recruiter-company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="recruiter-email">
            Email ID
          </label>
          <input
            id="recruiter-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="recruiter-contact">
            Contact Number
          </label>
          <input
            id="recruiter-contact"
            type="tel"
            required
            value={formData.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            placeholder="Phone / mobile"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-maroon px-5 py-3 text-antique-white font-semibold hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Submitting..." : "Submit Details"}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
