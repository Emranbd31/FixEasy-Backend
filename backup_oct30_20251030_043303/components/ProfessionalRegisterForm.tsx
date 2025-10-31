import { useState } from 'react';

export default function ProfessionalRegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSuccess('');
        setError('');
        setLoading(true);
        try {
            const res = await fetch('/api/register/professional', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, category })
            });
            if (!res.ok) throw new Error('API error');
            setSuccess('✅ Your registration was submitted successfully and is under review.');
        } catch (err) {
            setError('❌ Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {success && <div className="bg-green-100 text-green-800 p-2 rounded">{success}</div>}
            {error && <div className="bg-red-100 text-red-800 p-2 rounded">{error}</div>}
            <input
                type="text"
                placeholder="Full Name"
                className="border p-2 w-full"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
            />
            <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
            />
            <input
                type="text"
                placeholder="Service Category"
                className="border p-2 w-full"
                required
                value={category}
                onChange={e => setCategory(e.target.value)}
                disabled={loading}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={loading}
            >
                {loading ? 'Submitting...' : 'Submit Application'}
            </button>
        </form>
    );
}
