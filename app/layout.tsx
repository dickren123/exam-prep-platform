import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExamPrep Pro | Free Professional Exam Preparation",
  description: "Free professional exam preparation resources for securities, insurance, healthcare, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
