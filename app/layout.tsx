import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { DM_Sans, Inter, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your name",
  keywords:
    "Software Development, Web Development, Mobile App Development, Full-Stack Development, Front-End Development, Back-End Development, UI/UX Design, Responsive Web Design, JavaScript, HTML5, CSS3, Vue.js, React.js, Angular, PHP, Laravel, Mobile App Design, Android App Development, iOS App Development, Cross-Platform Development, Database Design, API Development, Cloud Computing, DevOps, Agile Development, Test-Driven Development (TDD), Version Control (Git), Continuous Integration (CI/CD), Software Architecture, Code Optimization, Code Security, Project Management, Agile Methodologies developer, software developer, portifolo",
  description:
    "Discover my software development portfolio, showcasing expertise in web and mobile app development. As a seasoned software developer, I specialize in crafting responsive and high-performing applications using modern technologies like Vue.js, Ionic, Nuxt js, React.js, Angular.js, and more. Explore a range of projects that reflect my commitment to clean code, exceptional user experiences, and innovative problem-solving. Explore my work and let's collaborate on your next software project. I'm ready to turn your vision into a reality. Contact me to discuss how I can bring value to your software development endeavors.",
  icons: [
    {
      rel: "icon",
      url: "/logo_l.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="pattern fixed inset-0 opacity-[0.005]" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
