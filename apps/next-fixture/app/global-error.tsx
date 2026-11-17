"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <h2>Application error</h2>
        <p>{error.message}</p>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </body>
    </html>
  );
}
