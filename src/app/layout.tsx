import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/utils/ThemProvider";

export const metadata: Metadata = {
  title: "AIOGitSoln",
  description: "All in One Git Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
