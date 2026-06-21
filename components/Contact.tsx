"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ContactDetail {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "viowiti12@gmail.com",
    href: "mailto:viowiti12@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+254 706 770 684",
    href: "tel:+254706770684",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/vicowiti",
    href: "https://github.com/vicowiti",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/victorowiti",
    href: "https://linkedin.com/in/victorowiti",
  },
];

export default function Contact() {
  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

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
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Replace this with your preferred form submission service
    // e.g. Resend, EmailJS, Formspree, etc.
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-black py-24 px-10 md:px-20">
      <div ref={headingRef} className="max-w-5xl mx-auto mb-16">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">
          Get in touch
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
          Contact
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left - contact details */}
        <div ref={leftRef} className="flex flex-col justify-between gap-12">
          <div>
            <p className="text-white/40 text-base leading-relaxed max-w-sm">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors duration-200">
                  <Icon
                    size={15}
                    className="text-white/30 group-hover:text-white/70 transition-colors duration-200"
                  />
                </div>
                <div>
                  <p className="text-white/20 text-xs tracking-widest uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="text-white/60 text-sm group-hover:text-white transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right - contact form */}
        <div ref={rightRef} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-white/30 text-xs tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Victor Owiti"
              className="bg-transparent border border-white/10 text-white/70 text-sm px-4 py-3 placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-white/30 text-xs tracking-widest uppercase">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="bg-transparent border border-white/10 text-white/70 text-sm px-4 py-3 placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-white/30 text-xs tracking-widest uppercase">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell me about your project..."
              className="bg-transparent border border-white/10 text-white/70 text-sm px-4 py-3 placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "sending" || status === "sent"}
            className="mt-2 border border-white/20 text-white/70 hover:text-white hover:border-white/60 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed text-left"
          >
            {status === "idle" && "Send message →"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message sent"}
            {status === "error" && "Something went wrong - try again"}
          </button>
        </div>
      </div>
    </section>
  );
}
