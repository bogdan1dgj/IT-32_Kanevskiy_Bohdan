"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error">
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити товари.</p>
      <button className="button" onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}