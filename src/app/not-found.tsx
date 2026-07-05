import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-muted text-lg mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold hover:shadow-lg transition-shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
