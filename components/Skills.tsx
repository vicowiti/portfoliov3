"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React" },
      { name: "React Native" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "HTML / CSS" },
      { name: "Electron.js" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "Spring Boot" },
      { name: "Django" },
      { name: "Laravel" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
  },
  {
    label: "Tools & Services",
    skills: [
      { name: "Git" },
      { name: "Jest" },
      { name: "M-Pesa API" },
      { name: "Africa's Talking" },
      { name: "React Router" },
    ],
  },
];

export default function Skills() {
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

    const cards = categoriesRef.current?.querySelectorAll(".skill-category");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <section id="skills" className="bg-black py-24 px-10 md:px-20">
      <div ref={headingRef} className="max-w-5xl mx-auto mb-16">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">
          What I work with
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
          Skills
        </h2>
      </div>

      <div
        ref={categoriesRef}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
      >
        {categories.map((category) => (
          <div
            key={category.label}
            className="skill-category bg-black p-8 md:p-10"
          >
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-6">
              {category.label}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-white/50 text-sm border border-white/10 px-3 py-1.5 tracking-wide hover:text-white hover:border-white/30 transition-all duration-200 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
