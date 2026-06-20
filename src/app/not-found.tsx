import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-display text-6xl text-[#C4A265] mb-4">404</h1>
          <p className="text-[#5C5856] mb-8">Page not found</p>
          <Link
            href="/"
            className="inline-flex px-8 py-3 bg-[#2D2D2D] text-[#FAF8F5] text-sm tracking-wide hover:bg-[#C4A265] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
