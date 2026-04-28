import Link from "next/link";

const quickLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Courses", href: "/courses" },
];

const courses = [
  "Data Entry & MS Office",
  "Web Design & Development",
  "Digital Marketing",
  "Tally & Accounting",
  "Graphic Design",
  "Hardware & Networking",
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <img src="/logo.png" alt="Europortals Academy Logo" className="object-contain w-full h-full scale-110" />
            </div>
            <div>
              <p className="font-display font-bold text-lg leading-tight">Europortals</p>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#F0A500]">Academy</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Empowering students with job-oriented training, practical skills, and placement support since our inception.
          </p>
          <p className="text-[#F0A500] text-sm font-semibold italic">
            Admission · Training · Placement
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-base mb-4 text-[#F0A500]">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-[#F0A500]">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-display font-bold text-base mb-4 text-[#F0A500]">Our Courses</h3>
          <ul className="space-y-2">
            {courses.map((c) => (
              <li key={c} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="text-[#F0A500]">›</span> {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-base mb-4 text-[#F0A500]">Contact Us</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#F0A500] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <a href="tel:8606348848" className="hover:text-white transition-colors">+91 8606348848</a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#F0A500] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:europortalsacady@gmail.com" className="hover:text-white transition-colors break-all">
                europortalsacady@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#F0A500] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Kerala, India</span>
            </li>
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/918606348848"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Europortals Academy. All rights reserved.</p>
          <p>Admission · Training · Placement</p>
        </div>
      </div>
    </footer>
  );
}
