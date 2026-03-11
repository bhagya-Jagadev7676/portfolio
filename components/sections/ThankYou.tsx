"use client";

import { Container, Section } from "@/components/ui";
import { AboutDto } from "@/lib/types";
import { motion } from "framer-motion";

export function ThankYou({ about }: { about?: AboutDto | null }) {
  return (
    <Section id="thank-you" background="primary" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* 3D Text Effect - "Thank You" */}
          <div className="relative h-40 md:h-56 flex items-center justify-center perspective">
            <motion.div
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <h2
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue"
                style={{
                  textShadow: `
                    3px 3px 0px rgba(6, 182, 212, 0.3),
                    6px 6px 0px rgba(147, 51, 234, 0.3),
                    9px 9px 0px rgba(6, 182, 212, 0.2),
                    12px 12px 20px rgba(0, 0, 0, 0.5)
                  `,
                  letterSpacing: "0.05em",
                }}
              >
                Thank You
              </h2>
              
              {/* Animated background glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.4)",
                    "0 0 20px rgba(6, 182, 212, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-lg blur-2xl -z-10"
              />
            </motion.div>
          </div>

          {/* Subtitle with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              Thanks for checking in
            </h3>
            
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-32 h-1.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue mx-auto rounded-full shadow-lg shadow-accent-blue/50"
            />

            <p className="text-xl md:text-2xl text-text-secondary font-semibold">
              🧠 Think deeply. Build wisely. Keep your intelligence sharp!
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-text-tertiary max-w-2xl mx-auto leading-relaxed"
            >
              Feel free to reach out if you'd like to collaborate or just chat about tech!
            </motion.p>
          </motion.div>

          {/* Animated decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl"
          >
            ✨
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
