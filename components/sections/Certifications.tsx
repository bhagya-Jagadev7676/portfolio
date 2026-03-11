"use client";

import { Container, Section, SectionHeader, Card } from "@/components/ui";
import { CertificationDto } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { useState } from "react";

export function Certifications({
  certifications,
}: {
  certifications?: CertificationDto[];
}) {
  const [selectedCert, setSelectedCert] = useState<CertificationDto | null>(null);

  return (
    <Section id="certifications" background="primary">
      <Container>
        <SectionHeader
          subtitle="Certifications"
          title="Professional Credentials"
          description="Certifications and courses that validate my skills and expertise."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications?.map((cert, index) => (
            <motion.div
              key={cert._id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" hover className="h-full">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Certificate Image */}
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-24 h-24 rounded-lg overflow-hidden bg-bg-tertiary flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Icon and Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple">
                        <FaAward className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-text-muted">{cert.date}</p>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="mb-3">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-purple transition-colors font-medium text-sm inline-flex items-center gap-1"
                        >
                          {cert.issuer}
                          <FaExternalLinkAlt className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-text-secondary font-medium text-sm">
                          {cert.issuer}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-sm text-text-tertiary">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal for full certificate view */}
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold z-10"
                  aria-label="Close"
                >
                  ×
                </button>

                <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </Container>
    </Section>
  );
}
