import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Зоокомплекс Lucky Dog",
  description: "Магазин зоотоварів та швидка базова допомога для тварин",
  icons: {
    icon: "/Luck_Dog_Logo.jpg",
    apple: "/Luck_Dog_Logo.jpg",
    shortcut: "/Luck_Dog_Logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
