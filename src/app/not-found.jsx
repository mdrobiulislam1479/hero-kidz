import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold text-error">404</h1>
          <p className="py-6 text-2xl">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
