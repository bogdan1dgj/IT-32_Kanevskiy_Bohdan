import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechStore",
  description: "Магазин техніки",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h2>TechStore</h2>
          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2026 TechStore</footer>
      </body>
    </html>
  );
}