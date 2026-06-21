import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IconType } from "react-icons";

interface NavLink {
  label: string;
  href: string;
}

interface Social {
  icon: IconType;
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials: Social[] = [
  { icon: FiGithub, href: "https://github.com/victorowiti", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/victorowiti",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:victor@email.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-10 pt-12 pb-8">
      <div className="flex justify-between items-start flex-wrap gap-10 mb-10">
        <div>
          <p className="text-white text-xs tracking-widest uppercase font-medium mb-4">
            Navigation
          </p>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white text-xs tracking-widest uppercase font-medium mb-4">
            Connect
          </p>
          <div className="flex flex-col gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 text-white/20 text-xs">
        &copy; {new Date().getFullYear()} Victor Owiti. All rights reserved.
      </div>
    </footer>
  );
}
