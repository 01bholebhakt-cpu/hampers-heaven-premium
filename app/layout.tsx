
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hampers Heaven | Gifts That Feel Like Love",
    template: "%s | Hampers Heaven",
  },
  description:
    "Discover premium gift hampers, curated gift boxes and thoughtful presents for birthdays, anniversaries and every special occasion.",
  applicationName: "Hampers Heaven",
  keywords: [
    "gift hampers",
    "premium gift boxes",
    "birthday gifts",
    "anniversary gifts",
    "personalised gifts",
    "Hampers Heaven",
  ],
  openGraph: {
    title: "Hampers Heaven — Gifts That Feel Like Love",
    description:
      "Beautifully curated gifts for life's most meaningful moments.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
