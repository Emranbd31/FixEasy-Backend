// lib/apiClient.ts
export const API_BASE_URL = "https://fixeasy-backend.onrender.com";

export async function fetchFromApi(path: string, options?: RequestInit) {
    const url = `${API_BASE_URL}${path}`;
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
}
