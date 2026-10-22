import Link from "next/link";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="container">
      <h1>Каталог техніки</h1>
      <nav className="categories">
        <Link href="/catalog">Усі товари</Link>
        <Link href="/catalog/smartphones">Смартфони</Link>
        <Link href="/catalog/laptops">Ноутбуки</Link>
      </nav>
      {children}
    </section>
  );
}