import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CursorProvider } from "@/contexts/cursor-context";
import OrbCursor from "@/components/ui/orb-cursor";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cyber Minimalist Portfolio",
  description: "A developer portfolio with a cyber-minimalist aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("font-body antialiased")}>
        <CursorProvider>
          <OrbCursor />
          {children}
          <Toaster />
        </CursorProvider>
      </body>
    </html>
  );
}
