import type { Metadata } from "next";
import { Poppins, Cairo } from "next/font/google";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  authors: [{ name: siteConfig.author.name }],

  creator: siteConfig.author.name,

  verification: {
    google: "wlef69ha1Fk-SrS1Eiubff26Bt8mVHkHszCRYCpU5ZI",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      en: absoluteUrl("/"),
      ar: absoluteUrl("/"),
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: absoluteUrl("/"),
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Front-End Developer`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },

  icons: {
    icon: siteConfig.ogImage,
    apple: siteConfig.ogImage,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} — Portfolio`,
      description: siteConfig.description,
      inLanguage: ["en", "ar"],
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      alternateName: siteConfig.author.alternateName,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.author.image),
      jobTitle: siteConfig.author.jobTitle,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kafr El Sheikh",
        addressCountry: "EG",
      },
      sameAs: Object.values(siteConfig.social),
      knowsAbout: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Web development",
        "UI design",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("portfolio-theme")==="light"){document.documentElement.setAttribute("data-theme","light");}}catch(e){}})();`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="antialiased">
        <ThemeProvider>
          <Preloader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
