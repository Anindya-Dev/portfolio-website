import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anindya Bhattacharya | AI/ML Engineer",
  description:
    "Building intelligent systems through machine learning and computer vision, with a focus on practical, real-world applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${kanit.className} antialiased overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]`}>
        {children}
      </body>
    </html>
  );
}
