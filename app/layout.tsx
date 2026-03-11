import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhagyashree Jagadev | BCA Graduate",
  description: "BCA Graduate with strong foundation in Python, Java, C, Web Development, and Database Management. Seeking entry-level opportunities in software development.",
  keywords: ["Bhagyashree Jagadev", "BCA Graduate", "Python", "Java", "Web Developer", "Portfolio", "Software Developer"],
  authors: [{ name: "Bhagyashree Jagadev" }],
  creator: "Bhagyashree Jagadev",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Bhagyashree Jagadev | BCA Graduate",
    description: "BCA Graduate with strong foundation in Python, Java, C, Web Development, and Database Management",
    siteName: "Bhagyashree Jagadev Portfolio",
    images: [
      {
        url: '/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Bhagyashree Jagadev',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagyashree Jagadev | BCA Graduate",
    description: "BCA Graduate with strong foundation in Python, Java, C, Web Development, and Database Management",
    images: ['/profile.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
