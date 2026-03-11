"use client";

import Link from "next/link";
import { Container, IconButton } from "@/components/ui";
import { NAV_LINKS } from "@/lib/constants";
import { AboutDto } from "@/lib/types";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import packageJson from "@/package.json";

const iconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  xtwitter: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
};

export function Footer({ about }: { about?: AboutDto | null }) {
  const currentYear = new Date().getFullYear();
  const name = about?.name || "Bhagyashree Jagadev";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-light relative">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4">
            {/* Brand & About */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block text-2xl font-bold mb-3 hover:text-accent-blue transition-colors">
                {name.split(" ")[0]}
                <span className="text-accent-blue">.</span>
              </Link>
              <p className="text-text-secondary text-sm mb-4 max-w-md">
                BCA Graduate passionate about technology and software development. Skilled in Python, Java, C, Web Development, and Database Management.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-text-tertiary text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 text-accent-blue" />
                  <span>Athani, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2 text-text-tertiary text-sm">
                  <FaPhone className="w-4 h-4 text-accent-blue" />
                  <span>+91 7676357187</span>
                </div>
                {about?.links?.email && (
                  <div className="flex items-center gap-2 text-text-tertiary text-sm">
                    <FaEnvelope className="w-4 h-4 text-accent-blue" />
                    <a href={`mailto:${about.links.email}`} className="hover:text-accent-blue transition-colors">
                      {about.links.email}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => {
                  const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                  return (
                    <li key={link.href}>
                      <Link href={href} className="text-text-secondary hover:text-accent-blue transition-colors text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent-blue rounded-full"></span>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Technologies & Connect */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-text-primary">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Java', 'C', 'JavaScript', 'MySQL', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-bg-tertiary text-text-secondary text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="text-sm font-semibold mb-4 text-text-primary">Follow Me</h4>
              <div className="flex items-center gap-3">
                {about?.links &&
                  Object.entries(about.links).map(([key, url]) => {
                    if (key === "website" || key === "email" || !url) return null;
                    const IconComponent = iconMap[key.toLowerCase()];
                    if (!IconComponent) return null;

                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-tertiary text-text-muted hover:bg-accent-blue hover:text-on-accent transition-all transform hover:scale-105"
                        aria-label={key}
                      >
                        <IconComponent className="size-4" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-light">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <span>© {currentYear} {name}. Made with</span>
              <FaHeart className="w-4 h-4 text-red-500" />
              <span>in India</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="https://github.com/bhagya-Jagadev7676/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
              >
                <FaGithub className="h-4 w-4" />
                <span>View Source</span>
              </Link>
              <span className="text-text-tertiary">•</span>
              <div className="flex items-center gap-1 text-text-secondary">
                <FaCode className="w-4 h-4" />
                <span className="text-accent-blue font-medium">v{packageJson.version}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 w-10 h-10 bg-accent-blue text-on-accent rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
