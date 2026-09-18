import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";

export function NotFoundPage() {
  useSeo({ title: "Page Not Found" });
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest2 text-brass-500">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink">This page has wandered off</h1>
      <p className="mt-3 max-w-md text-ink-500">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="mt-6 text-sm font-medium uppercase tracking-wide text-ink underline-offset-4 hover:text-brass-500 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
