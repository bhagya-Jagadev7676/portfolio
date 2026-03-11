"use client";

import Image from "next/image";
import { Container, IconButton, Tooltip } from "@/components/ui";
import { AboutDto } from "@/lib/types";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaArrowDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  xtwitter: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

export function Hero({ about }: { about?: AboutDto | null }) {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary pt-24">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent via-bg-primary/50 to-bg-primary pointer-events-none"
        aria-hidden
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Profile photo with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative mb-8 size-32 sm:size-36 md:size-40 lg:size-44 rounded-full overflow-hidden ring-4 ring-accent-blue/30 dark:ring-accent-purple/30 shadow-2xl shadow-accent-blue/20 dark:shadow-accent-purple/20 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <Image
            src={about?.images?.profilePng || "/profile.jpeg"}
            alt={about?.name || "Profile"}
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
        </motion.div>

        {/* Terminal-style prompt line */}
        <Tooltip
          content={
            "You've opened my terminal. I'm a developer. Let me show you what I can do."
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 font-mono text-base sm:text-lg text-text-muted mb-6 cursor-default"
            tabIndex={0}
          >
            <span className="text-accent-blue select-none">$</span>
            <span className="text-text-tertiary">bhagyashreejagadev</span>
            <span
              className="inline-flex h-4 w-0.5 bg-accent-blue ml-0.5 animate-pulse"
              aria-hidden
            />
          </motion.div>
        </Tooltip>

        {/* Name: single bold line with enhanced gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-[length:200%_auto] animate-gradient mb-8 tracking-tight"
        >
          {about?.name}
        </motion.h1>

        {/* Tagline with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-4 mb-10"
        >
          <p className="font-mono font-semibold text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent-blue tracking-wide">
            {about?.title}
          </p>
          <p className="text-text-tertiary text-lg md:text-xl max-w-2xl px-4">
            {about?.tagline}
          </p>
        </motion.div>

        {/* Availability chip with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/30 dark:border-accent-purple/30 text-text-primary text-sm font-semibold uppercase tracking-wider shadow-lg shadow-accent-blue/10 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
            {about?.status}
          </span>
        </motion.div>

        {/* Social links with enhanced animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          className="flex items-center gap-3 text-text-muted mt-10 flex-wrap justify-center"
        >
          {about?.links &&
            Object.entries(about.links).map(([key, url], index) => {
              if (key === "website" || key === "email") return null;
              if (!url) return null;

              const platformKey = key.toLowerCase();
              const IconComponent = iconMap[platformKey];

              if (!IconComponent) return null;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <IconButton
                    href={url}
                    external
                    variant="ghost"
                    className="hover:text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue/30 border border-transparent transition-all duration-300 size-12 rounded-xl"
                    aria-label={key}
                  >
                    <IconComponent className="size-5" />
                  </IconButton>
                </motion.div>
              );
            })}
        </motion.div>
      </Container>

      {/* Scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-accent-blue transition-colors"
        aria-label="Scroll to content"
      >
        <FaArrowDown className="size-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
