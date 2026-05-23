import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          NSC SMS
        </h1>

        <p className="text-muted-foreground">
          Welcome to the Student Management System
        </p>

        <Link
          href="/login"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-primary-foreground"
        >
          Login
        </Link>
      </div>
    </main>
  );
}