import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { StructuredData } from "@/components/seo/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixel-ui.vercel.app'),
  title: {
    default: "Pixel UI - 8-Bit Retro Component Library",
    template: "%s | Pixel UI"
  },
  description: "A complete pixel-art/8-bit retro UI component library for React and Next.js. Built with TypeScript, Tailwind CSS, and Radix UI. Features retro gaming aesthetics with modern accessibility.",
  keywords: [
    "pixel art",
    "8-bit",
    "retro UI",
    "component library",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI components",
    "design system",
    "pixel perfect",
    "retro gaming",
    "arcade style",
    "nostalgic design"
  ],
  authors: [
    {
      name: "Shardendu Mishra",
      url: "https://mishrashardendu22.is-a.dev/"
    }
  ],
  creator: "Shardendu Mishra",
  publisher: "Team Parashuram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixel-ui.vercel.app/",
    title: "Pixel UI - 8-Bit Retro Component Library",
    description: "A complete pixel-art/8-bit retro UI component library for React and Next.js",
    siteName: "Pixel UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pixel UI - 8-Bit Retro Component Library"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel UI - 8-Bit Retro Component Library",
    description: "A complete pixel-art/8-bit retro UI component library for React and Next.js",
    creator: "@Shardendu_M",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-press-start: 'Press Start 2P', monospace;
          }
        `}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
