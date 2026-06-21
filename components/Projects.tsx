"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FiExternalLink, FiSmartphone, FiMonitor } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  type: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  linkLabel: string;
  icon: React.ElementType;
  screenshots: { src: string; alt: string }[];
  screenshotLayout: "mobile" | "desktop";
}

const projects: Project[] = [
  {
    name: "Zera Africa",
    type: "Android Application",
    role: "Full Stack Developer",
    description:
      "A field agent tool for recording relationship, sales, and collections visits. Visits are geo-tracked and used to compute distance covered per agent. Built end-to-end - from the React Native app to the Node.js backend.",
    highlights: [
      "Geo-tracked visit recording for relationship, sales, and collections agents.",
      "Daraja M-Pesa integration for school loan repayments, with automated postings to the core banking system.",
      "Built-in helpdesk allowing field agents to raise and receive support in-app.",
      "Impact scoring tool that measures how loans are helping schools grow and improve affordability.",
      "Full backend built with Node.js and PostgreSQL, including all integrations.",
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "Daraja API", "M-Pesa"],
    link: "https://play.google.com/store/apps/details?id=com.edpartnersafrica.zera",
    linkLabel: "View on Play Store",
    icon: FiSmartphone,
    screenshotLayout: "mobile",
    screenshots: [
      {
        src: "/projects/zera/screenshot-1.png",
        alt: "Zera Africa home screen",
      },
      {
        src: "/projects/zera/screenshot-2.png",
        alt: "Zera Africa visit recording",
      },
      {
        src: "/projects/zera/screenshot-3.png",
        alt: "Zera Africa geo-tracking",
      },
      { src: "/projects/zera/screenshot-4.png", alt: "Zera Africa helpdesk" },
      {
        src: "/projects/zera/screenshot-5.png",
        alt: "Zera Africa impact scoring",
      },
    ],
  },
  {
    name: "Zeraki Flow",
    type: "Web Application - Internal CRM",
    role: "Sole Frontend Developer",
    description:
      "An internal CRM used daily by sales and finance teams at Zeraki. Handles school onboarding, invoicing, collections, performance tracking, and tax compliance across Kenya and Uganda.",
    highlights: [
      "School creation and management with trial activations and subscription tracking.",
      "Invoicing system that automates school billing with cheque and mobile money collection recording.",
      "KRA and URA tax invoice integrations ensuring compliance in Kenya and Uganda.",
      "Performance measurement dashboard tracking collections and acquisitions per relationship manager.",
      "Helpdesk for field agents and a reminders engine for schools with upcoming or overdue invoices.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
    ],
    link: "https://flow.zeraki.app/",
    linkLabel: "Visit site",
    icon: FiMonitor,
    screenshotLayout: "desktop",
    screenshots: [
      {
        src: "/projects/zeraki-flow/screenshot-1.png",
        alt: "Zeraki Flow dashboard",
      },
      {
        src: "/projects/zeraki-flow/screenshot-2.png",
        alt: "Zeraki Flow invoicing",
      },
      {
        src: "/projects/zeraki-flow/screenshot-3.png",
        alt: "Zeraki Flow school management",
      },
      {
        src: "/projects/zeraki-flow/screenshot-4.png",
        alt: "Zeraki Flow performance tracking",
      },
      {
        src: "/projects/zeraki-flow/screenshot-5.png",
        alt: "Zeraki Flow helpdesk",
      },
    ],
  },
];

function ScreenshotGallery({
  screenshots,
  layout,
}: {
  screenshots: Project["screenshots"];
  layout: "mobile" | "desktop";
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`relative overflow-hidden border border-white/10 bg-white/5 ${
          layout === "mobile"
            ? "w-[220px] mx-auto aspect-[9/19]"
            : "w-full aspect-[16/9]"
        }`}
      >
        <Image
          src={screenshots[active].src}
          alt={screenshots[active].alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-2 justify-center flex-wrap">
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden border transition-all duration-200 ${
              layout === "mobile" ? "w-10 aspect-[9/19]" : "w-16 aspect-[16/9]"
            } ${
              active === i
                ? "border-white/60"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <Image src={s.src} alt={s.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

    const cards = projectsRef.current?.querySelectorAll(".project-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <section
      id="projects"
      className="bg-black py-24 px-10 md:px-20 border-t border-white/5"
    >
      <div ref={headingRef} className="max-w-5xl mx-auto mb-16">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">
          What I have built
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
          Projects
        </h2>
      </div>

      <div ref={projectsRef} className="max-w-5xl mx-auto flex flex-col gap-24">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`project-card grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
              i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Screenshot gallery */}
            <ScreenshotGallery
              screenshots={project.screenshots}
              layout={project.screenshotLayout}
            />

            {/* Project details */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <project.icon size={13} className="text-white/30" />
                  <p className="text-white/30 text-xs tracking-[0.2em] uppercase">
                    {project.type}
                  </p>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">
                  {project.name}
                </h3>
                <p className="text-white/20 text-xs tracking-widest uppercase">
                  {project.role}
                </p>
              </div>

              <p className="text-white/40 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                    <span className="text-white/40 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-white/40 text-xs border border-white/10 px-3 py-1 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/60 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 w-fit"
              >
                {project.linkLabel}
                <FiExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
