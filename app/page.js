import Link from "next/link";
import EnquiryForm from "../components/EnquiryForm";

export const metadata = {
  title: "Europortals Academy | Computer Courses & Job Placement in Kerala",
  description:
    "Join Europortals Academy for job-oriented computer courses, skill development training, and placement support. Enroll today and start your career!",
};

/* ─── Static Data ─────────────────────────── */
const services = [
  {
    icon: "💻",
    title: "Computer Courses",
    desc: "Industry-relevant courses from basic to advanced levels designed to make you job-ready.",
  },
  {
    icon: "🚀",
    title: "Skill Development Training",
    desc: "Practical, hands-on programs to sharpen technical and soft skills demanded by employers.",
  },
  {
    icon: "🤝",
    title: "CSR Programs",
    desc: "Corporate Social Responsibility initiatives bringing quality education to underserved communities.",
  },
  {
    icon: "🎓",
    title: "University Admission Guidance",
    desc: "Expert counselling and step-by-step support for national and international university admissions.",
  },
];

const whyUs = [
  { icon: "🏆", title: "Placement Support",    desc: "Dedicated placement cell with tie-ups to leading companies." },
  { icon: "👨‍🏫", title: "Expert Trainers",      desc: "Industry professionals with real-world experience." },
  { icon: "🔬", title: "Practical Learning",   desc: "60% practical, 40% theory for genuine skill-building." },
  { icon: "💰", title: "Affordable Fees",       desc: "Quality education at fees every student can manage." },
];

const stats = [
  { value: "2000+", label: "Students Trained" },
  { value: "95%",   label: "Placement Rate" },
  { value: "30+",   label: "Courses Offered" },
  { value: "50+",   label: "Hiring Partners" },
];

const featuredCourses = [
  { name: "Data Entry & MS Office", duration: "2 Months",  level: "Beginner",      icon: "📊" },
  { name: "Web Design & Development", duration: "4 Months", level: "Intermediate", icon: "🌐" },
  { name: "Digital Marketing",      duration: "3 Months",  level: "Intermediate",  icon: "📱" },
  { name: "Tally & Accounting",     duration: "3 Months",  level: "Beginner",      icon: "📒" },
  { name: "Graphic Design",         duration: "3 Months",  level: "Intermediate",  icon: "🎨" },
  { name: "Hardware & Networking",  duration: "4 Months",  level: "Advanced",      icon: "🖥️" },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Data Entry Executive, Kozhikode",
    quote:
      "Europortals Academy completely changed my career. The practical approach and placement support helped me land my first job within a month of completing the course!",
    initials: "AR",
  },
  {
    name: "Mohammed Farhan",
    role: "Web Developer, Bengaluru",
    quote:
      "The Web Development course here is outstanding. The trainers are industry professionals who teach you real-world skills, not just theory. Highly recommended!",
    initials: "MF",
  },
  {
    name: "Priya Nair",
    role: "Digital Marketer, Kochi",
    quote:
      "I enrolled for the Digital Marketing course while in my final year and got placed before graduation. The academy's guidance and mock interviews were invaluable.",
    initials: "PN",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-bg diagonal-divider min-h-screen flex items-center pt-24 pb-32 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-[#F0A500] text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
              Kerala&apos;s Trusted Training Institute
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Start Your Career with{" "}
              <span className="text-[#F0A500]">Job-Oriented</span> Training
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Admission · Training · Placement Support — everything you need to land your dream job.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="btn-primary text-base">
                Apply Now →
              </Link>
              <a href="tel:8606348848" className="btn-outline text-base">
                📞 Call Now
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["✅ Free Demo Class", "✅ Certificate Provided", "✅ 100% Placement Support"].map((b) => (
                <span key={b} className="bg-white/10 text-slate-200 text-xs rounded-full px-3 py-1">{b}</span>
              ))}
            </div>
          </div>

          {/* Enquiry card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 w-full">
            <h2 className="font-display font-bold text-xl text-[#0B1F3A] mb-1">Quick Enquiry</h2>
            <p className="text-[#4A5568] text-sm mb-6">We&apos;ll call you back within 2 hours</p>
            <div className="bg-white rounded-xl">
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────── */}
      <section className="bg-[#FFFFFF] border-y border-slate-100 shadow-sm py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="count-item">
              <p className="font-display text-[#1A4FDB] font-extrabold text-3xl">{s.value}</p>
              <p className="text-slate-500 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="py-24 bg-[#F0F5FF]" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">What We Offer</span>
            <h2 className="section-title mt-4 mb-6">Our Core Services</h2>
            <p className="section-sub">
              Comprehensive programs designed to take you from learning to earning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((s) => (
              <div key={s.title} className="card text-center group">
                <div className="bg-[#EEF3FF] rounded-xl p-3 inline-flex items-center justify-center mx-auto mb-4 text-2xl">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[#0B1F3A] mb-2">{s.title}</h3>
                <p className="text-[#4A5568] text-sm leading-7">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section className="py-24 bg-white" id="why-us">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <span className="badge mb-3">Why Europortals</span>
              <h2 className="section-title mt-4 mb-6">
                Built for Your <span className="text-[#1A4FDB]">Career Success</span>
              </h2>
              <p className="text-[#4A5568] text-base leading-7 mb-8">
                We don't just teach — we mentor, guide, and support every student until they find the right opportunity. Our results speak for themselves.
              </p>
              <Link href="/about" className="btn-blue text-base">
                Learn More About Us →
              </Link>
            </div>

            {/* Right grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-white border border-[#DDE3EE] rounded-xl p-5 hover:border-l-4 hover:border-[#1A4FDB] transition-all duration-200">
                  <div className="flex gap-4">
                    <div className="text-2xl flex-shrink-0 bg-[#EEF3FF] rounded-lg p-2 flex items-center justify-center">{w.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0B1F3A] mb-1">{w.title}</h3>
                      <p className="text-[#4A5568] text-sm leading-7 mt-1">{w.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ──────────────────────────── */}
      <section className="py-24 bg-[#F0F5FF]" id="courses">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">Popular Programs</span>
            <h2 className="section-title mt-4 mb-6">Featured Courses</h2>
            <p className="section-sub">
              Job-oriented courses with industry-recognised certificates.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredCourses.map((c) => (
              <div key={c.name} className="card flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0 bg-[#EEF3FF] rounded-xl p-3 flex items-center justify-center">{c.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0B1F3A] text-lg mb-2">{c.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-[#EEF3FF] text-[#1A4FDB] border border-blue-100 px-2.5 py-0.5 rounded-full">
                      ⏱ {c.duration}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border ${c.level === 'Beginner' ? 'bg-[#F0FDF4] text-[#15803D] border-green-100' : c.level === 'Intermediate' ? 'bg-[#EEF3FF] text-[#1A4FDB] border-blue-100' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>
                      {c.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="btn-blue text-base">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-24 bg-[#0B1F3A]" id="testimonials">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F0A500] text-[11px] font-bold tracking-[0.15em] uppercase bg-white/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Student Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 leading-tight">
              Life-Changing Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-white/20 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-[#F0A500] flex items-center justify-center font-bold text-[#0B1F3A] text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="text-[#F0A500] text-4xl font-serif mb-2 leading-none">"</div>
                <p className="text-[#4A5568] text-sm leading-7">{t.quote}</p>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F0A500]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className="py-24 bg-[#F0A500]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3A] mb-3 leading-tight">
            Limited Seats Available – Enroll Now!
          </h2>
          <p className="text-[#0B1F3A]/80 text-lg mb-8 leading-relaxed">
            Don&apos;t miss this opportunity to start your career journey with expert guidance and guaranteed placement support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="btn-blue text-base px-10 py-3.5">
              View Courses & Enroll
            </Link>
            <a
              href="https://wa.me/918606348848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
