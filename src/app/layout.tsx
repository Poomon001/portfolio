import Head from "next/head";
import { Roboto as FontSans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "P. Chuthamsatid - Software Developer",
  titleTemplate: "poomrapee.com",
  description: "Poomrapee's portfolio showcasing software development expertise",
  icons: {
    icon: "/initials-96x96.png",
  },
  openGraph: {
    title: "poomrapee.com",
    siteName: "poomrapee.com",
    description: "Poomrapee's portfolio showcasing software development expertise",
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
        <link rel='icon' type='image/png' href='/initials-96x96.png' sizes='96x96' /> {/* SEO */}
        <link rel='shortcut icon' href='/initials-96x96.png' /> {/* SEO */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Poomrapee Chuthamsatid",
              url: "https://www.poomrapee.com",
              jobTitle: "Software Developer",
              description: "Poomrapee's portfolio showcasing software development expertise",
              sameAs: ["https://www.linkedin.com/in/poomrapee-chuthamsatid-04b31119a", "https://github.com/Poomon001"],
            }),
          }}
        />
      </Head>
      <body className={fontSans.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
