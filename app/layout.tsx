import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XRAY | Workflow Automation That Actually Works",
  description:
    "We deliver AI that works and automations that flow, all while you keep using the tools you know and love.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-navy">
        {children}
      </body>
    </html>
  );
}
