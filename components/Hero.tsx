"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const roles = ["Full Stack Engineer", "Mobile Developer"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      nameRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
      .fromTo(
        bioRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3",
      );

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    setDisplayedRole(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-black flex flex-col justify-center px-10 md:px-20"
    >
      <div className="max-w-3xl">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6">
          Software Developer
        </p>

        <h1
          ref={nameRef}
          className="text-white text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-6"
        >
          Victor Owiti
        </h1>

        <div className="flex items-center gap-2 mb-8 h-8">
          <span className="text-white/60 text-lg md:text-xl font-light tracking-wide">
            {displayedRole}
          </span>
          <span
            ref={cursorRef}
            className="inline-block w-0.5 h-5 bg-white/60"
          />
        </div>

        <p
          ref={bioRef}
          className="text-white/40 text-base md:text-lg leading-relaxed max-w-xl mb-12"
        >
          User-centered design and development is my forte — transforming user
          needs into working solutions. I love challenging myself daily,
          learning new technologies, and watching a project grow from an idea
          into a problem-solving product.
        </p>

        <a
          ref={ctaRef}
          href="#projects"
          className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/60 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
        >
          View my work
          <span className="text-base leading-none">&#8594;</span>
        </a>
      </div>
    </section>
  );
}
