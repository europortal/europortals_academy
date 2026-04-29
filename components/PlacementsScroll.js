"use client";

/* ─── Placements Data ─────────────────────────── */
const placements = [
  {
    name: "Ameen Koya",
    role: "Senior Digital Marketer",
    company: "Swiggy",
    image: "/students/student_with_books.png", // 👈 add image path
    initials: "AK",
    color: "#FF6B35",
  },
  {
    name: "Asharaf P K",
    role: "PPC Specialist",
    company: "Amazon",
    image: "/students/student_with_books.png",
    initials: "AP",
    color: "#FF9900",
  },
  {
    name: "Ashna Bai S",
    role: "Growth Associate",
    company: "Entri",
    image: "/students/student_with_books.png",
    initials: "AB",
    color: "#6C63FF",
  },
  {
    name: "Fida Sharin",
    role: "Junior Sales Associate",
    company: "Emirates NBD",
    image: "/students/student_with_books.png",
    initials: "FS",
    color: "#1A4FDB",
  },
  {
    name: "Rahul Menon",
    role: "UI/UX Designer",
    company: "Infosys",
    image: "/students/student_with_books.png",
    initials: "RM",
    color: "#00C9A7",
  },
  {
    name: "Sneha Pillai",
    role: "Data Analyst",
    company: "TCS",
    image: "/students/student_with_books.png",
    initials: "SP",
    color: "#E91E8C",
  },
];

/* Split rows */
const row1 = placements;

function PlacementCard({ name, role, company, image, initials, color }) {
  return (
    <div className="placement-card">
      <div className="placement-badge">PLACED</div>

      {/* Avatar */}
      <div className="placement-avatar" style={{ background: color }}>
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <div className="placement-info">
        <p className="placement-name">{name}</p>
        <p className="placement-role">{role} At</p>
        <p className="placement-company">{company}</p>
      </div>
    </div>
  );
}

export default function PlacementsScroll() {
  return (
    <section className="placements-section" id="placements">
      <div className="placements-inner">

        <div className="placements-header">
          <span className="placements-badge">Our Alumni</span>
          <h2 className="placements-title">
            Unmatched <span className="placements-title-accent">Placements</span>
          </h2>
          <p className="placements-sub">
            Our students are placed in top companies across India and beyond.
          </p>
        </div>

        {/* Infinite Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-ltr">
            {[...row1, ...row1, ...row1].map((p, i) => (
              <PlacementCard key={i} {...p} />
            ))}
          </div>
        </div>

        <div className="placements-cta">
          <a href="/courses" className="placements-see-more">
            See More »
          </a>
        </div>
      </div>
    </section>
  );
}