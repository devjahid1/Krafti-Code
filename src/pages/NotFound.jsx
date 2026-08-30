import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white sm:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[#722df7]">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link to="/" className="mt-10 inline-flex text-sm font-semibold text-white transition hover:text-[#b38ff9]">
          Return to Krafti Code home
        </Link>
      </div>
    </main>
  );
}
