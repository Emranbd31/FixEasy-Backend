"use client";
import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function BookServicePageInner() {
  const searchParams = useSearchParams();
  const service = searchParams?.get("service");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!service) return;

    async function fetchData() {
      try {
        const response = await fetch(`/api/bookings?service=${service}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Booking fetch error:", err);
      }
    }

    fetchData();
  }, [service]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Book a Service</h1>
        {service ? (
          <p className="text-gray-700 mb-4">You’re booking: <b>{service}</b></p>
        ) : (
          <p className="text-gray-500 mb-4">No service selected.</p>
        )}

        {data ? (
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-800">Available slots:</p>
            <ul className="list-disc list-inside">
              {data.slots?.map((slot: string, i: number) => (
                <li key={i}>{slot}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-400">Loading service details...</p>
        )}

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function BookServicePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookServicePageInner />
    </Suspense>
  );
}
