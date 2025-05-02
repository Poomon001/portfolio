// layout.tsx
import { Inter as FontSans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Poom Chuthamsatid",
  description: "This is the layout for the portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fontSans.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
