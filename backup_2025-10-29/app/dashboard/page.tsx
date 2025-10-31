
import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mb-8">
                    This is a clean dashboard template. You can fill in tables and stats later.
                </p>
                <Link
                    href="/"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                    Go to FixEasy Home
                </Link>
            </div>
        </main>
    );
}
