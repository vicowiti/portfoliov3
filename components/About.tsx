"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "4+", label: "Years of experience" },
  { value: "7+", label: "Companies worked with" },
  { value: "10+", label: "Projects shipped" },
  { value: "30%", label: "Revenue leakage reduced at Zeraki" },
];

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(
      leftRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      rightRef.current,
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      },
    );

    const statEls = rightRef.current?.querySelectorAll(".stat-item");
    if (statEls) {
      gsap.fromTo(
        statEls,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <section
      id="about"
      className="bg-black py-24 px-10 md:px-20 border-t border-white/5"
    >
      <div ref={headingRef} className="max-w-5xl mx-auto mb-16">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">
          Who I am
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
          About
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left - bio text */}
        <div ref={leftRef} className="flex flex-col gap-6">
          <p className="text-white/60 text-base leading-relaxed">
            I'm a software developer based in Nairobi, Kenya, with over four
            years of experience building web and mobile products across fintech,
            edtech, and logistics.
          </p>
          <p className="text-white/40 text-base leading-relaxed">
            User-centered design and development is my forte - transforming user
            needs into working solutions. I love challenging myself daily,
            picking up new technologies, and watching a project grow from an
            idea into something that genuinely solves a problem.
          </p>
          <p className="text-white/40 text-base leading-relaxed">
            I've worked across the full stack - from React and React Native on
            the frontend, to Node.js, Spring Boot, and Django on the backend -
            with a strong focus on performance, clean architecture, and
            developer experience.
          </p>

          <div className="pt-4">
            <a
              href="/Victor-Owiti-FlowCV-Resume-20260221.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/60 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              Download CV
              <span className="text-base leading-none">&#8595;</span>
            </a>
          </div>
        </div>

        {/* Right - stats */}
        <div ref={rightRef} className="grid grid-cols-2 gap-px bg-white/5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item bg-black p-8 flex flex-col gap-2"
            >
              <span className="text-white text-4xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/30 text-xs tracking-widest uppercase leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
