// lib/adminSummary.ts
export async function fetchAdminSummary() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    try {
        const res = await fetch(`${baseUrl}/admin/summary`);
        if (!res.ok) throw new Error('Failed to fetch admin summary');
        const data = await res.json();
        return { data, error: null };
    } catch (error) {
        return { data: null, error };
    }
}
