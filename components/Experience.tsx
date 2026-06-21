"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    company: "Ed Partners Africa",
    role: "Full Stack Developer",
    period: "Mar 2025 – Present",
    location: "Nairobi, Kenya",
    logo: "/logos/epal.png",
    points: [
      "Leading development of Shule Smart web and mobile apps using React Native and Java Spring Boot.",
      "Spearheading third-party integrations with KCB, Family Bank, and Africa's Talking SMS APIs into the Core Banking System.",
      "Leading development of the Zera mobile app, empowering field agents to onboard loan customers with image capture and geo-tagging.",
    ],
  },
  {
    company: "Zeraki",
    role: "Software Engineer",
    period: "Jun 2024 – Mar 2025",
    location: "Nairobi, Kenya",
    logo: "/logos/zeraki.png",
    points: [
      "Led frontend development of Zeraki Flow, an internal tool used daily by sales and finance teams.",
      "Built an invoicing system that automates school billing and integrates with tax authorities, minimizing revenue leakage by 30%.",
      "Designed and enforced role-based access control (RBAC) across the platform.",
    ],
  },
  {
    company: "Little Cabs Africa",
    role: "Full Stack Software Developer",
    period: "Apr 2023 – Jun 2024",
    location: "Nairobi, Kenya",
    logo: "/logos/little.png",
    points: [
      "Led the Little POS team to deliver a Point of Sale solution with M-Pesa and Little Pay Wallet integrations.",
      "Built a React Native mobile app and an Electron.js desktop app for the POS system.",
      "Designed a local SQLite database for offline storage, significantly improving performance.",
    ],
  },
  {
    company: "Enigma Big Data Labs",
    role: "Software Engineer",
    period: "Apr 2023 – Present",
    location: "Nairobi, Kenya",
    logo: "/logos/little.png",
    points: [
      "Built robust applications in Next.js/TypeScript leveraging Django and Laravel APIs.",
      "Built the Admin functionality of the SmartCounty web application.",
      "Extended the functionality of the App in App web application.",
    ],
  },
  {
    company: "Gema Loyalty Solutions",
    role: "Frontend Developer",
    period: "Mar 2023",
    location: "Nairobi, Kenya",
    logo: "/logos/little.png",
    points: [
      "Rewrote Client and Admin dashboard applications in Next.js and TypeScript, reducing load time by 60%.",
      "Enhanced UX using modern technologies, increasing overall usability.",
    ],
  },
  {
    company: "Workforce Africa",
    role: "Software Developer",
    period: "Dec 2022 – Mar 2023",
    location: "Nairobi, Kenya",
    logo: "/logos/workforce.png",
    points: [
      "Built the company website careers page that posts jobs dynamically from a custom CMS.",
      "Wrote backend code for the Zigo Courier app using NestJS for real-time order tracking.",
    ],
  },
  {
    company: "The Collab Lab",
    role: "Frontend Developer (Intern)",
    period: "Jun 2022 – Nov 2022",
    location: "Remote",
    logo: "/logos/collab-lab.jpeg",
    points: [
      "Worked in a team of 4 to build a smart shopping list app using React, Tailwind CSS, and Firebase.",
      "Used agile methodologies with weekly sprints, code reviews, and standups.",
    ],
  },
];

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-black">
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        className="object-contain w-[36px] h-[36px]"
      />
    </div>
  );
}

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section id="experience" className="bg-black py-24 px-6">
      <div ref={headingRef} className="max-w-5xl mx-auto mb-16">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">
          My Journey
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
          Experience
        </h2>
      </div>

      <VerticalTimeline lineColor="rgba(255,255,255,0.08)">
        {experiences.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            date={`${exp.period} · ${exp.location}`}
            dateClassName="text-white/30 text-xs tracking-wide"
            iconStyle={{
              background: "#000",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "none",
              padding: "4px",
            }}
            icon={<CompanyLogo src={exp.logo} alt={exp.company} />}
            contentStyle={{
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "none",
              borderRadius: "2px",
              padding: "1.75rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-1">
              {exp.company}
            </p>
            <h3 className="text-white text-lg font-medium tracking-tight mb-4">
              {exp.role}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {exp.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  <span className="text-white/40 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
