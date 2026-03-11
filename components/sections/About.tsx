"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Container, Section, SectionHeader } from "@/components/ui";
import { ABOUT_WHAT_I_DO } from "@/lib/constants";
import { AboutDto, ToolDto } from "@/lib/types";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCodeBranch,
  FaMicrophone,
  FaServer,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

function ToolLogo({
  logo,
  alt,
}: {
  logo?: { light: string; dark: string } | null;
  alt: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer setting mounted to avoid synchronous setState in effect body
    // and potential cascading renders. Using requestAnimationFrame schedules
    // the update after paint.
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!logo) return null;

  if (!mounted) {
    return <div className="w-full h-full relative" />;
  }

  const theme = resolvedTheme ?? "light";
  const src = theme === "dark" ? logo.light : logo.dark;

  return (
    <div className="w-full h-full relative">
      <Image key={src} src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

const whatIDoIconMap: Record<string, React.ElementType> = {
  FaGlobe: FaGlobe,
  FaServer: FaServer,
  FaCodeBranch: FaCodeBranch,
  FaMicrophone: FaMicrophone,
  FaRobot: FaRobot,
};

export function About({
  about,
  tools,
}: {
  about?: AboutDto | null;
  tools?: ToolDto[];
}) {
  return (
    <Section id="about" background="secondary">
      <Container>
        <SectionHeader
          subtitle="About"
          title="Who I Am"
          description="Get to know me better and discover what drives my passion for technology."
        />

        <div className="mt-12 md:mt-16 space-y-24">
          {/* Bio Section with enhanced image */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative shrink-0 w-72 h-72 md:w-96 md:h-96 group order-start lg:order-first"
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-bg-tertiary shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/profile.jpeg"
                  alt={about?.name || "Profile"}
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-purple/20 rounded-full blur-2xl group-hover:bg-accent-purple/30 transition-colors duration-500" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-blue/20 rounded-full blur-2xl group-hover:bg-accent-blue/30 transition-colors duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left space-y-6 max-w-2xl"
            >
              <div className="space-y-5">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-blue to-accent-purple">
                  Building intelligent experiences that matter.
                </h3>
                {about?.description &&
                  about.description.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-lg md:text-xl text-text-secondary leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* What I Usually Do Grid with enhanced cards */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <h3 className="font-mono text-lg uppercase tracking-widest text-accent-blue">
                What I Usually Do
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ABOUT_WHAT_I_DO.map((item, i) => {
                const IconComponent = whatIDoIconMap[item.icon] || FaCode;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-8 bg-gradient-to-br from-bg-primary to-bg-elevated rounded-2xl border border-border-light dark:border-white/5 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-blue/10 overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-accent-blue shadow-lg shadow-accent-blue/20">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-base text-text-tertiary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Orbiting Skills Visualization */}

          {/* Tech I Regularly Use Grid with enhanced styling */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h3 className="font-mono text-xl md:text-2xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                Tech Stack & Tools
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue mx-auto rounded-full shadow-lg shadow-accent-blue/30" />
              <p className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto">
                Technologies and tools I work with regularly to build modern applications
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {tools &&
                tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: i * 0.05, 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.08,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-bg-primary via-bg-elevated to-bg-primary rounded-2xl border-2 border-border-light dark:border-white/5 hover:border-accent-blue/50 dark:hover:border-accent-purple/50 transition-all duration-300 aspect-square hover:shadow-2xl hover:shadow-accent-blue/20 dark:hover:shadow-accent-purple/20 overflow-hidden cursor-pointer"
                  >
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 via-accent-purple/0 to-accent-blue/0 group-hover:from-accent-blue/10 group-hover:via-accent-purple/10 group-hover:to-accent-blue/10 transition-all duration-500" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent blur-sm" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent-purple to-transparent blur-sm" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                      {/* Logo container with enhanced effects */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {/* Glow behind logo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-full h-full">
                          <ToolLogo logo={tool.logo} alt={tool.name} />
                        </div>
                      </div>
                      
                      {/* Tool name with gradient on hover */}
                      <span className="text-sm sm:text-base font-bold text-text-secondary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300 text-center leading-tight">
                        {tool.name}
                      </span>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-accent-blue/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
            </div>

            {/* Optional: Add a subtle note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-text-muted text-sm italic"
            >
              Always learning and exploring new technologies
            </motion.p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
