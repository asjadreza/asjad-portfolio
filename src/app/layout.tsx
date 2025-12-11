import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import StarsClient from "@/components/StarsClient";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Asjad Reza | Software Developer Portfolio",
  description:
    "Portfolio of Asjad Reza, software developer skilled in Next.js, React, Vue/Nuxt, Node/Express, PostgreSQL, and modern UI/UX. Explore projects, experience, and contact details.",
  keywords: [
    "Asjad Reza",
    "Asjad's Resume",
    "Asjad Reza portfolio",
    "Asjad Reza developer",
    "software engineer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "Vue",
    "Nuxt",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Tailwind",
  ],
  authors: [{ name: "Asjad Reza", url: "https://asjad-portfolio-dun.vercel.app/" }],
  metadataBase: new URL("https://asjad-portfolio-dun.vercel.app/"),
  alternates: { canonical: "https://asjad-portfolio-dun.vercel.app/" },
  openGraph: {
    title: "Asjad Reza | Software Developer Portfolio",
    description:
      "Software developer experienced in React, Next.js, Vue/Nuxt, Node/Express, and modern UI/UX. View projects, experience, and ways to get in touch.",
    url: "https://asjad-portfolio-dun.vercel.app/",
    siteName: "Asjad Reza",
    type: "website",
    images: [
      {
        url: "https://asjad-portfolio-dun.vercel.app/portfolio-v2.png",
        width: 1200,
        height: 630,
        alt: "Asjad Reza | Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asjad Reza | Software Developer Portfolio",
    description:
      "Software developer experienced in React, Next.js, Vue/Nuxt, Node/Express, and modern UI/UX. View projects, experience, and contact details.",
    images: ["https://asjad-portfolio-dun.vercel.app/portfolio-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // Use round/circle-safe logo for favicons and touch icons
    icon: [
      { url: "/logo-icon.png", type: "image/png", sizes: "any" },
      { url: "/logo-icon.png", rel: "shortcut icon", type: "image/png" },
    ],
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Structured data improves SEO by describing the person and website.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Asjad Reza",
              url: "https://asjad-portfolio-dun.vercel.app/",
              jobTitle: "Software Developer",
              sameAs: [
                "https://asjad-portfolio-dun.vercel.app/",
                "mailto:asjadreza64@gmail.com",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "Vue",
                "Nuxt",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Prisma",
                "Tailwind",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable}`}
      >
        <StarsClient />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"        
          closeOnClick
          pauseOnHover
          draggable
        />
        <Analytics />
      </body>
    </html>
  );
}
