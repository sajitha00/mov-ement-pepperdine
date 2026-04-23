import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import GSAPProvider from "@/components/GSAPProvider";

/* 
 * CSS load order matters!
 * 1. app-styles.css = template base (loaded first)
 * 2. globals.css = our overrides (loaded second, wins cascade)
 */
import "./globals.css";

const SITE_URL = "https://www.pepperdinemovement.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Movement Pepperdine – Student Discounts & Local Deals in Malibu",
    template: "%s | The Movement Pepperdine",
  },
  description: "The Movement connects nearly 10,000 Pepperdine students with exclusive local deals and helps Malibu businesses grow. Free to join.",
  keywords: [
    "Pepperdine student discounts",
    "Malibu deals",
    "University of California Malibu",
    "student offers",
    "local businesses",
    "Malibu student discounts",
    "Pepperdine university deals",
    "Malibu cafes deals",
    "Malibu fitness discounts",
    "Pepperdine Students",
    "The Movement Pepperdine",
  ],
  authors: [{ name: "The Movement", url: SITE_URL }],
  creator: "The Movement",
  publisher: "The Movement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "The Movement Pepperdine",
    title: "The Movement Pepperdine – Student Discounts & Local Deals in Malibu",
    description: "The Movement connects nearly 10,000 Pepperdine students with exclusive local deals and helps Malibu businesses grow. Free to join.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Movement Pepperdine – Student Discounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Movement Pepperdine – Student Discounts & Local Deals",
    description: "The Movement connects Pepperdine students with exclusive local deals and helps Malibu businesses grow. Free to join.",
    images: ["/og-image.png"],
    creator: "@TheMovement",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "Community Directory",
};

// JSON-LD Structured Data — AEO (Answer Engine Optimization)
function JsonLd() {
  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "The Movement Pepperdine",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.ico`,
      width: 512,
      height: 512,
    },
    description: "The Movement connects nearly 10,000 Pepperdine students with exclusive local deals and helps Malibu businesses grow. Free to join.",
    foundingDate: "2024",
    sameAs: [
      "https://facebook.com/movementpepperdine",
      "https://instagram.com/movementpepperdine",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
        areaServed: "Malibu, California",
      },
    ],
    email: "hello@themovementpepperdine.com",
    slogan: "Saving Money. Changing Lives.",
    knowsAbout: [
      "Student Discounts",
      "Local Businesses in Malibu",
      "Pepperdine University Community",
      "Malibu Deals",
    ],
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "The Movement Pepperdine",
    url: SITE_URL,
    description: "Exclusive discounts at 100+ local Malibu businesses — free for all Pepperdine students. Free to list for merchants.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Is The Movement free for students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — always. Student registration is 100% free. No hidden fees, no subscription, no credit card required.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify my student status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply register with your Pepperdine .edu email address. We send a verification link and your account is active within minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Can international students join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Any currently enrolled Pepperdine student with a .edu email qualifies, regardless of residency status.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to list my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Listing is completely free. We also offer premium visibility tiers for businesses that want to appear higher in student searches and get featured promotions.",
        },
      },
      {
        "@type": "Question",
        name: "What type of businesses can join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any local business near the Pepperdine Malibu campus — restaurants, gyms, retail, salons, entertainment venues, and service providers.",
        },
      },
    ],
  };

  // 4. HowTo Schema — For Students
  const studentHowToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto-students`,
    name: "How to Join The Movement as a Pepperdine Student",
    description: "Get free access to exclusive deals around Malibu with your student email.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Register Free",
        text: "Sign up with your Pepperdine .edu email. Verification takes under 2 minutes.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Browse Deals",
        text: "Explore 100+ exclusive deals at restaurants, gyms, retail stores, and services near campus.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Show & Save",
        text: "Visit the merchant, show your digital Movement student pass on your phone, and save instantly.",
      },
    ],
  };

  // 5. HowTo Schema — For Merchants
  const merchantHowToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto-merchants`,
    name: "How to List Your Business on The Movement",
    description: "Reach nearly 10,000 Pepperdine students by listing your Malibu business.",
    totalTime: "PT20M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Schedule a Call",
        text: "Book a free 20-min call with our team. We walk you through onboarding.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Create Your Profile",
        text: "We set up your merchant profile — photos, description, location, and your exclusive student discount.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Go Live & Get Discovered",
        text: "Your business appears on The Movement to thousands of students browsing nearby deals.",
      },
    ],
  };

  const schemas = [
    organizationSchema,
    websiteSchema,
    faqSchema,
    studentHowToSchema,
    merchantHowToSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
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
