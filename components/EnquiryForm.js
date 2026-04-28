"use client";
import { useState } from "react";

export default function EnquiryForm({ compact = false }) {
  const [form, setForm]       = useState({ name: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Data Entry & MS Office",
    "Web Design & Development",
    "Digital Marketing",
    "Tally & Accounting",
    "Graphic Design",
    "Hardware & Networking",
    "University Admission Guidance",
    "CSR Programs",
    "Other",
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only form — no backend needed
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-[#0B1F3A] mb-2">Enquiry Submitted!</h3>
        <p className="text-[#4A5568] text-sm">We'll contact you within 24 hours. For instant help, WhatsApp us at <strong>8606348848</strong>.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-[#1A4FDB] text-sm underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputClass = "w-full border border-[#DDE3EE] rounded-lg px-4 py-2.5 text-[#0B1F3A] placeholder:text-slate-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4FDB] focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? "" : "max-w-lg mx-auto"}`}>
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Course Interested In</label>
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a course…</option>
          {courses.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Message</label>
          <textarea
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Any specific questions or requirements…"
            className={`${inputClass} resize-none`}
          />
        </div>
      )}

      <button type="submit" className="btn-blue w-full justify-center text-base py-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        Send Enquiry
      </button>
    </form>
  );
}
