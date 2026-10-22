import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <h1>Ласкаво просимо до TechStore!</h1>
      <p>Сучасна техніка для навчання, роботи та відпочинку.</p>
      <Link className="button" href="/catalog">
        Перейти до каталогу
      </Link>
    </section>
  );
}