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
  description: "This is the layout for the portfolio",
  icons: {
    icon: "/initials.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      </Head>
      <body className={fontSans.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
