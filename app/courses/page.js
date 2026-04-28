import EnquiryForm from "../../components/EnquiryForm";

export const metadata = {
  title: "Courses | Computer Training & Skill Development – Europortals Academy",
  description:
    "Explore job-oriented computer courses at Europortals Academy — Web Development, Digital Marketing, Tally, Graphic Design, Hardware Networking & more. Enroll today!",
};

/* ─── Static Course Data ───────────────────── */
const categories = ["All", "Computer Basics", "Design", "Finance", "Tech", "Admission"];

const courses = [
  {
    icon: "📊",
    name: "Data Entry & MS Office",
    category: "Computer Basics",
    duration: "2 Months",
    sessions: "48 Hours",
    level: "Beginner",
    fee: "₹2,500",
    description:
      "Master essential computer skills — MS Word, Excel, PowerPoint, and professional data entry techniques. Perfect for first-time job seekers.",
    skills: ["MS Word", "MS Excel", "MS PowerPoint", "Data Entry", "Email Etiquette"],
    careers: ["Data Entry Operator", "Office Assistant", "Administrative Executive"],
    highlight: false,
  },
  {
    icon: "🌐",
    name: "Web Design & Development",
    category: "Tech",
    duration: "4 Months",
    sessions: "120 Hours",
    level: "Intermediate",
    fee: "₹8,000",
    description:
      "Build modern, responsive websites using HTML5, CSS3, JavaScript, and popular frameworks. Includes a live portfolio project.",
    skills: ["HTML5 & CSS3", "JavaScript", "React Basics", "Figma UI Design", "Hosting & Deployment"],
    careers: ["Web Developer", "Frontend Developer", "Freelance Web Designer"],
    highlight: true,
  },
  {
    icon: "📱",
    name: "Digital Marketing",
    category: "Tech",
    duration: "3 Months",
    sessions: "90 Hours",
    level: "Intermediate",
    fee: "₹6,000",
    description:
      "Learn SEO, Google Ads, social media marketing, content strategy, and analytics — skills every business needs today.",
    skills: ["SEO & SEM", "Google Ads", "Social Media Marketing", "Email Marketing", "Google Analytics"],
    careers: ["Digital Marketer", "SEO Executive", "Social Media Manager"],
    highlight: false,
  },
  {
    icon: "📒",
    name: "Tally & Accounting",
    category: "Finance",
    duration: "3 Months",
    sessions: "80 Hours",
    level: "Beginner",
    fee: "₹5,000",
    description:
      "Comprehensive accounting fundamentals combined with hands-on Tally ERP training for a career in finance and commerce.",
    skills: ["Tally ERP 9 / Prime", "GST Filing", "Accounting Principles", "Payroll Management", "Financial Reporting"],
    careers: ["Accounts Executive", "Tally Operator", "Bookkeeper", "Finance Assistant"],
    highlight: false,
  },
  {
    icon: "🎨",
    name: "Graphic Design",
    category: "Design",
    duration: "3 Months",
    sessions: "90 Hours",
    level: "Intermediate",
    fee: "₹6,500",
    description:
      "Develop a professional design portfolio using Adobe Photoshop, Illustrator, and Canva. Covers branding, print, and digital design.",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "Brand Identity", "Print & Digital Design"],
    careers: ["Graphic Designer", "Brand Designer", "Creative Executive", "Freelancer"],
    highlight: false,
  },
  {
    icon: "🖥️",
    name: "Hardware & Networking",
    category: "Tech",
    duration: "4 Months",
    sessions: "100 Hours",
    level: "Advanced",
    fee: "₹7,000",
    description:
      "Gain hands-on expertise in computer hardware assembly, troubleshooting, LAN/WAN setup, and network security fundamentals.",
    skills: ["PC Assembly & Repair", "OS Installation", "LAN/WAN Networking", "Cybersecurity Basics", "Server Administration"],
    careers: ["Hardware Technician", "Network Engineer", "IT Support Executive"],
    highlight: false,
  },
  {
    icon: "🏛️",
    name: "University Admission Guidance",
    category: "Admission",
    duration: "Ongoing",
    sessions: "Personalized",
    level: "All Levels",
    fee: "Consultation",
    description:
      "Expert step-by-step guidance for national and international university admissions — from course selection to visa support.",
    skills: ["University Selection", "Application Support", "SOP & LOR Guidance", "Scholarship Info", "Visa Assistance"],
    careers: ["Study in India", "Study Abroad", "Scholarship Programs"],
    highlight: false,
  },
  {
    icon: "🤝",
    name: "CSR Skill Programs",
    category: "Computer Basics",
    duration: "1–3 Months",
    sessions: "Varies",
    level: "Beginner",
    fee: "Subsidised / Free",
    description:
      "Special programs for economically weaker sections, women empowerment, and rural youth — subsidised or free of cost under CSR initiatives.",
    skills: ["Basic Computer Skills", "Spoken English", "Entrepreneurship Basics", "Digital Literacy", "Job Readiness"],
    careers: ["Self-Employment", "Entry Level Jobs", "Entrepreneurship"],
    highlight: false,
  },
];

const levelColors = {
  Beginner:     "bg-[#F0FDF4] text-[#15803D] border-green-100",
  Intermediate: "bg-[#EEF3FF] text-[#1A4FDB] border-blue-100",
  Advanced:     "bg-purple-100 text-purple-700 border-purple-200",
  "All Levels": "bg-gray-100  text-[#4A5568] border-gray-200",
};

export default function CoursesPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────── */}
      <section className="hero-bg pt-32 pb-24 diagonal-divider relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-[#F0A500] text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
            Our Courses
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
            Courses Built for <span className="text-[#F0A500]">Real Jobs</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Every program is designed with one goal — getting you employed. Choose your path and we'll take you there.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["✅ Certificate Provided", "✅ Placement Assistance", "✅ Flexible Batches", "✅ Expert Faculty"].map((b) => (
              <span key={b} className="bg-white/10 text-slate-200 text-xs rounded-full px-3 py-1">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE GRID ───────────────────────────────── */}
      <section className="py-24 bg-[#F0F5FF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Course cards — 2 cols */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courses.map((c) => (
                <article
                  key={c.name}
                  className="bg-white border border-[#DDE3EE] rounded-2xl border-l-4 border-l-[#1A4FDB] shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col relative"
                >
                  {c.highlight && (
                    <div className="absolute top-4 right-4 bg-[#1A4FDB] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <div className="p-7 flex-1 flex flex-col pt-10 sm:pt-7">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#EEF3FF] rounded-xl p-3 flex items-center justify-center text-2xl flex-shrink-0">
                        {c.icon}
                      </div>
                      <div className={c.highlight ? "pr-8 sm:pr-0" : ""}>
                        <h2 className="font-bold text-xl text-[#0B1F3A] leading-tight mb-2">{c.name}</h2>
                        <div className="flex gap-2 flex-wrap">
                          <span className={`text-xs px-2.5 py-0.5 rounded-full border ${levelColors[c.level]}`}>
                            {c.level}
                          </span>
                          <span className="bg-[#FFFBEB] text-[#B45309] border border-amber-200 text-xs rounded-full px-2.5 py-0.5 font-semibold">
                            {c.fee}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex gap-4 text-xs text-[#4A5568] mb-4">
                      <span>⏱ {c.duration}</span>
                      <span>📚 {c.sessions}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[#4A5568] text-sm leading-7 mb-5 flex-1">{c.description}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A4FDB] mb-2">You'll Learn</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.skills.map((s) => (
                          <span key={s} className="bg-[#EEF3FF] text-[#1A4FDB] border border-blue-100 text-xs rounded-full px-2.5 py-0.5">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Careers */}
                    <div className="mb-6">
                      <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#15803D] mb-2">Career Paths</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.careers.map((career) => (
                          <span key={career} className="bg-[#F0FDF4] text-[#15803D] border border-green-100 text-xs rounded-full px-2.5 py-0.5">{career}</span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/918606348848?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(c.name)}%20course%20at%20Europortals%20Academy.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue w-full mt-auto"
                    >
                      Enquire Now →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Sticky Enquiry Sidebar */}
            <aside className="lg:sticky lg:top-24">
              <div className="bg-white border border-[#DDE3EE] shadow-md rounded-2xl p-7 mb-6">
                <h3 className="font-bold text-xl text-[#0B1F3A] mb-1">Quick Enquiry</h3>
                <p className="text-[#4A5568] text-sm mb-5">Fill out the form and we&apos;ll get back to you within 2 hours.</p>
                <EnquiryForm compact />
              </div>

              {/* Contact info card */}
              <div className="bg-[#0B1F3A] rounded-2xl p-7 text-white">
                <h4 className="font-bold text-xl mb-4 text-[#F0A500]">Reach Us Directly</h4>
                <div className="space-y-3">
                  <a href="tel:8606348848" className="flex items-center gap-3 hover:text-[#F0A500] transition-colors text-sm text-slate-300">
                    <span className="text-[#F0A500]">📞</span> +91 8606348848
                  </a>
                  <a href="mailto:europortalsacady@gmail.com" className="flex items-center gap-3 hover:text-[#F0A500] transition-colors text-sm break-all text-slate-300">
                    <span className="text-[#F0A500]">✉️</span> europortalsacady@gmail.com
                  </a>
                  <a
                    href="https://wa.me/918606348848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg mt-4"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-3">Simple Process</span>
            <h2 className="section-title mt-4 mb-6">How to Enroll</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Enquire",      desc: "Fill the form or call us to discuss courses.",        icon: "📝" },
              { step: "02", title: "Demo Class",   desc: "Attend a free demo session and meet the faculty.",    icon: "👩‍🏫" },
              { step: "03", title: "Enroll",       desc: "Complete admission formalities and fee payment.",     icon: "✅" },
              { step: "04", title: "Get Placed",   desc: "Complete training, receive certificate & placement.", icon: "🎓" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-[#1A4FDB] text-white rounded-xl flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-md">
                  {s.step}
                </div>
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">{s.title}</h3>
                <p className="text-[#4A5568] text-sm leading-7">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className="py-24 bg-[#F0A500] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3A] mb-4 leading-tight">
            Seats Fill Up Fast — Don&apos;t Wait!
          </h2>
          <p className="text-[#0B1F3A]/80 mb-8 text-lg leading-relaxed">
            Call us now or send a WhatsApp message to check batch availability and secure your seat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8606348848" className="btn-blue text-base px-10 py-3.5">
              📞 Call: 8606348848
            </a>
            <a
              href="https://wa.me/918606348848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-base"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
