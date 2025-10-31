"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAdminSummary } from "@/lib/adminSummary";

export default function DashboardPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [summary, setSummary] = useState<any[]>([]);

    const loadData = async () => {
        setLoading(true);
        setError(null);
        const { data, error } = await fetchAdminSummary();
        if (error) {
            setError("Failed to load summary. Please try again.");
            setSummary([]);
        } else {
            setSummary(data?.summary || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">Admin Dashboard</h1>
                {loading ? (
                    <div className="text-gray-500 mb-6">Loading026</div>
                ) : error ? (
                    <div className="mb-6 text-red-600">
                        {error}
                        <button onClick={loadData} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">Retry</button>
                    </div>
                ) : summary.length === 0 ? (
                    <div className="mb-6 text-gray-500">No records yet</div>
                ) : (
                    <div className="mb-6">
                        <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">{JSON.stringify(summary, null, 2)}</pre>
                    </div>
                )}
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
