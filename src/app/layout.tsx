import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import GSAPProvider from "@/components/GSAPProvider";

/* 
 * CSS load order matters!
 * 1. app-styles.css = template base (loaded first)
 * 2. globals.css = our overrides (loaded second, wins cascade)
 */
import "./globals.css";

export const metadata: Metadata = {
  title: "The Movement Pepperdine – Student Discounts & Local Deals in Malibu",
  description: "The Movement connects nearly 10,000 Pepperdine students with exclusive local deals and helps Malibu businesses grow. Free to join.",
  keywords: "Pepperdine student discounts, Malibu deals, University of California Malibu, student offers, local businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Template base CSS — loaded FIRST so globals.css can override it */}
        <link rel="stylesheet" href="/app-styles.css" />
      </head>
      <body>
        <ThemeProvider>
          <GSAPProvider>
            {children}
          </GSAPProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
