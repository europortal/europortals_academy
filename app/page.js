import Link from "next/link";
import EnquiryForm from "../components/EnquiryForm";
import PlacementsScroll from "../components/PlacementsScroll";

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
    image: "/images/testimonials/aisha.png",
  },
  {
    name: "Mohammed Farhan",
    role: "Web Developer, Bengaluru",
    quote:
      "The Web Development course here is outstanding. The trainers are industry professionals who teach you real-world skills, not just theory. Highly recommended!",
    image: "/images/testimonials/farhan.png",
  },
  {
    name: "Priya Nair",
    role: "Digital Marketer, Kochi",
    quote:
      "I enrolled for the Digital Marketing course while in my final year and got placed before graduation. The academy's guidance and mock interviews were invaluable.",
    image: "/images/testimonials/priya.png",
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

      {/* ── UNMATCHED PLACEMENTS ─────────────────────────────── */}
      <PlacementsScroll />

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
          <div className="text-center mb-16">
            <span className="badge mb-3">Why Europortals</span>
            <h2 className="section-title mt-4 mb-6">
              Built for Your <span className="text-[#1A4FDB]">Career Success</span>
            </h2>
            <p className="text-[#4A5568] text-base leading-7 max-w-2xl mx-auto">
              We don't just teach — we mentor, guide, and support every student until they find the right opportunity. Our results speak for themselves.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img src="/images/about/lab.png" alt="Students in Lab" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="font-display font-bold text-2xl mb-2">Modern Infrastructure</h3>
                  <p className="text-slate-200 text-sm">State-of-the-art labs and interactive classrooms for an immersive learning experience.</p>
                </div>
              </div>
            </div>

            {/* Right grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-white border border-[#DDE3EE] rounded-xl p-5 hover:border-l-4 hover:border-[#1A4FDB] hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col gap-3">
                    <div className="text-2xl w-12 h-12 bg-[#EEF3FF] rounded-lg flex items-center justify-center">{w.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0B1F3A] mb-1">{w.title}</h3>
                      <p className="text-[#4A5568] text-sm leading-6">{w.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/about" className="btn-blue text-base">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ──────────────────────────── */}
      <section className="py-28 relative bg-gradient-to-br from-[#0D1B2A] via-[#112240] to-[#0a192f] overflow-hidden" id="courses">
        {/* Floating particle or dot-grid background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F0A500 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-[#1A4FDB]/20 blur-[120px]"></div>
          <div className="absolute top-[60%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#F0A500]/15 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
            <span className="inline-block text-[#F0A500] text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-[#F0A500]/10 border border-[#F0A500]/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(240,165,0,0.3)]">
              Popular Programs
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0A500] to-yellow-300">Courses</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Job-oriented courses with industry-recognised certificates. Upgrade your skills and jumpstart your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredCourses.map((c, index) => {
              const gradients = [
                "from-pink-500 to-rose-500",
                "from-cyan-400 to-blue-500",
                "from-violet-500 to-purple-500",
                "from-emerald-400 to-teal-500",
                "from-amber-400 to-orange-500",
                "from-indigo-400 to-blue-600"
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div 
                  key={c.name} 
                  className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[#F0A500]/50 hover:shadow-[0_0_30px_rgba(240,165,0,0.15)] hover:scale-[1.03] transition-all duration-300 flex flex-col h-full relative overflow-hidden cursor-pointer"
                >
                  {/* Background Accent on Hover */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 opacity-20`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradient} text-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      {c.icon}
                    </div>
                    
                    <h3 className="font-display font-bold text-[1.4rem] leading-tight text-white mb-4 group-hover:text-[#F0A500] transition-colors duration-200">
                      {c.name}
                    </h3>
                    
                    <div className="flex gap-3 flex-wrap mb-8">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 text-slate-300 border border-white/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5 text-[#F0A500]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {c.duration}
                      </span>
                      <span className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full border ${
                        c.level === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 
                        c.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 
                        'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      }`}>
                        {c.level}
                      </span>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm font-bold text-[#F0A500] group-hover:text-yellow-300 transition-colors">
                        Course Details
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F0A500] group-hover:bg-[#F0A500] group-hover:text-[#0D1B2A] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(240,165,0,0.5)]">
                        <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-16 animate-[fadeIn_1s_ease-out_0.5s_both]">
            <Link href="/courses" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0A500] to-amber-500 hover:from-amber-400 hover:to-yellow-500 text-[#0B1F3A] font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(240,165,0,0.4)] hover:shadow-[0_0_30px_rgba(240,165,0,0.6)] group text-lg">
              View All Courses 
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#F0A500] flex-shrink-0" />
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
