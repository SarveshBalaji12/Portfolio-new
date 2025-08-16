import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S Sarvesh Balaji - Portfolio",
  description: "Computer Science Engineering student specializing in Data Science. AI Trainee at Samsung Innovation Campus with expertise in Machine Learning, Web Development, and Blockchain.",
  keywords: ["S Sarvesh Balaji", "Computer Science", "Data Science", "AI", "Machine Learning", "Web Development", "Portfolio", "React", "Python", "Blockchain"],
  authors: [{ name: "S Sarvesh Balaji" }],
  openGraph: {
    title: "S Sarvesh Balaji - Portfolio",
    description: "Computer Science Engineering student specializing in Data Science and AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S Sarvesh Balaji - Portfolio",
    description: "Computer Science Engineering student specializing in Data Science and AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
