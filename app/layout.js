import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  metadataBase: new URL("https://europortalsacademy.com"),
  title: {
    default: "Europortals Academy | Computer Courses, Skill Training & Placement",
    template: "%s | Europortals Academy",
  },
  description:
    "Europortals Academy offers job-oriented computer courses, skill development training, CSR programs, and university admission guidance with guaranteed placement support in Kerala.",
  keywords: [
    "Computer Courses",
    "Skill Development Training",
    "Job Placement Institute",
    "Computer Training Kerala",
    "Admission Guidance",
    "CSR Programs",
    "Europortals Academy",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://europortalsacademy.com",
    siteName: "Europortals Academy",
    title: "Europortals Academy | Admission · Training · Placement",
    description:
      "Job-oriented computer courses and skill development training with placement support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Europortals Academy",
    description: "Computer Courses | Skill Training | Placement Support",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
