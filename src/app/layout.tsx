// layout.tsx
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/app/lib/shadcn/utils";
import StyledComponentsRegistry from "@/app/lib/registry";
import "./styles/globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "My Application - Layout",
  description: "This is the layout for the app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
