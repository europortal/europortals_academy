import Link from "next/link";

export const metadata = {
  title: "About Europortals Academy | Our Mission & Vision",
  description:
    "Learn about Europortals Academy — our mission to provide quality computer courses, skill development training, and placement support to students in Kerala.",
};

const milestones = [
  { year: "2018", title: "Founded",           desc: "Europortals Academy was established with a vision to bridge the skill gap in Kerala." },
  { year: "2019", title: "500 Students",      desc: "Reached our first major milestone of training 500 students successfully." },
  { year: "2021", title: "CSR Launch",        desc: "Launched our CSR program to provide free training to economically weaker sections." },
  { year: "2023", title: "2000+ Trained",     desc: "Crossed 2000 trained students with a 95% placement success rate." },
  { year: "2024", title: "University Tie-ups",desc: "Partnered with leading universities to offer guided admission support." },
];

const values = [
  { icon: "🎯", title: "Student-First",   desc: "Every decision we make is centered on student success and career growth." },
  { icon: "🔍", title: "Transparency",    desc: "Honest guidance with no hidden fees or false placement promises." },
  { icon: "💡", title: "Innovation",      desc: "Continuously updating curricula to match industry demands." },
  { icon: "🌍", title: "Inclusivity",     desc: "Quality education accessible to all, regardless of background." },
];

const team = [
  { name: "Director",          role: "Management & Administration", initials: "D",  color: "bg-[#1A4FDB]" },
  { name: "Head Trainer",      role: "Technical Courses",          initials: "HT", color: "bg-[#F0A500]" },
  { name: "Placement Officer", role: "Career & Placement",         initials: "PO", color: "bg-[#15803D]" },
  { name: "Admissions Lead",   role: "University Guidance",        initials: "AL", color: "bg-[#0B1F3A]" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────── */}
      <section className="hero-bg pt-32 pb-24 relative diagonal-divider">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-[#F0A500] text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Empowering Students,<br />
            <span className="text-[#F0A500]">Transforming Careers</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2018, Europortals Academy has been the trusted name in computer education, skill training, and placement support across Kerala.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge mb-3">Who We Are</span>
            <h2 className="section-title mt-4 mb-6">
              A Decade of Shaping <span className="text-[#1A4FDB]">Careers</span>
            </h2>
            <p className="text-[#4A5568] leading-7 mb-4 text-base">
              Europortals Academy is a leading educational institute in Kerala dedicated to providing practical, job-oriented computer courses and skill development programs. We believe education should directly translate to employment.
            </p>
            <p className="text-[#4A5568] leading-7 mb-4 text-base">
              Our faculty comprises experienced industry professionals who bring real-world insights into every classroom session. From basic computer literacy to advanced technical skills, we offer a comprehensive curriculum designed for today&apos;s job market.
            </p>
            <p className="text-[#4A5568] leading-7 text-base">
              Beyond training, we provide end-to-end support — from admission guidance to placement — ensuring every student achieves their career goals.
            </p>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "2000+", l: "Students Trained",   c: "bg-[#1A4FDB]" },
              { n: "95%",   l: "Placement Rate",      c: "bg-[#0B1F3A]" },
              { n: "30+",   l: "Courses Offered",     c: "bg-[#0B1F3A]" },
              { n: "50+",   l: "Hiring Partners",     c: "bg-[#0B1F3A]" },
            ].map((s) => (
              <div key={s.l} className={`${s.c} text-white rounded-2xl p-6 text-center shadow-sm`}>
                <p className="font-display text-3xl font-extrabold">{s.n}</p>
                <p className="text-sm mt-1 text-slate-300 font-medium">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────── */}
      <section className="py-24 bg-[#F0F5FF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">Our Purpose</span>
            <h2 className="section-title mt-4 mb-6">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Mission */}
            <div className="card border-l-4 border-[#1A4FDB] p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#EEF3FF] rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-xl text-[#0B1F3A]">Our Mission</h3>
              </div>
              <p className="text-[#4A5568] leading-7 text-sm">
                To provide accessible, high-quality, job-oriented education that equips every student with the technical skills, industry knowledge, and professional confidence needed to secure meaningful employment and advance in their chosen career.
              </p>
              <ul className="mt-4 space-y-2">
                {["Deliver practical, industry-aligned training", "Maintain affordable fee structures", "Ensure placement for every graduate", "Support underserved communities through CSR"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#4A5568]">
                    <span className="text-[#1A4FDB] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="card border-l-4 border-[#F0A500] p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFFBEB] rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-bold text-xl text-[#0B1F3A]">Our Vision</h3>
              </div>
              <p className="text-[#4A5568] leading-7 text-sm">
                To become the most trusted and impactful educational institution in South India — a place where every student, regardless of background, has access to world-class training and career opportunities that transform their lives.
              </p>
              <ul className="mt-4 space-y-2">
                {["Expand to 10+ centres across Kerala", "Partner with 200+ hiring companies", "Train 10,000 students by 2027", "Launch online learning platform"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#4A5568]">
                    <span className="text-[#F0A500] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">What We Stand For</span>
            <h2 className="section-title mt-4 mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v) => (
              <div key={v.title} className="card text-center group p-7">
                <div className="bg-[#EEF3FF] rounded-xl p-3 inline-flex items-center justify-center mx-auto mb-4 text-2xl">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">{v.title}</h3>
                <p className="text-[#4A5568] text-sm leading-7">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ──────────────────────────── */}
      <section className="py-24 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">Our Journey</span>
            <h2 className="section-title mt-4 mb-6">Milestones That Define Us</h2>
          </div>
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#DDE3EE] hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0B1F3A] rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-md">
                    {m.year}
                  </div>
                  <div className="bg-white border border-[#DDE3EE] rounded-xl p-6 flex-1 shadow-sm">
                    <h3 className="font-bold text-lg text-[#0B1F3A] mb-1">{m.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-7">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">The People Behind Success</span>
            <h2 className="section-title mt-4 mb-6">Our Expert Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((t) => (
              <div key={t.name} className="card text-center p-7">
                <div className={`w-16 h-16 ${t.color} rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-white text-lg`}>
                  {t.initials}
                </div>
                <h3 className="font-bold text-lg text-[#0B1F3A]">{t.name}</h3>
                <p className="text-[#4A5568] text-sm mt-1 leading-7">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B1F3A] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">Ready to Start Your Journey?</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">Explore our courses and take the first step towards your dream career today.</p>
          <Link href="/courses" className="btn-primary text-base">
            Browse Courses →
          </Link>
        </div>
      </section>
    </>
  );
}
