import Head from "next/head";
import { Roboto as FontSans } from "next/font/google";
import { profile, site } from "@/lib/config";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: site.title,
  titleTemplate: site.titleTemplate,
  description: site.description,
  icons: {
    icon: "/initials-48x48.ico",
  },
  openGraph: {
    title: site.titleTemplate,
    siteName: site.titleTemplate,
    description: site.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' type='image/x-icon' href='/initials-48x48.ico' /> {/* SEO */}
        <link rel='icon' type='image/png' href='/initials-96x96.png' sizes='96x96' /> {/* SEO */}
        <link rel='shortcut icon' type='image/png' href='/initials-96x96.png' /> {/* SEO */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: `${profile.full} ${profile.last}`,
              url: site.url,
              jobTitle: "Software Developer",
              description: site.description,
              sameAs: [profile.linkedin, profile.github],
            }),
          }}
        />
      </Head>
      <body className={fontSans.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <SpeedInsights />
      </body>
    </html>
  );
}
