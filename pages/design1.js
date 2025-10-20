export default function Design1() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#E0F2FE', minHeight: '100vh' }}>
      {/* Header */}
      <nav style={{ background: 'white', padding: '1.5rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0369A1' }}>FixEasy</h1>
          <button style={{ background: '#0369A1', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Book now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '3rem', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0C4A6E', lineHeight: '1.2' }}>
              Trusted Professionals.<br />Verified for Your Peace of Mind.
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
              Hire experienced and vetted pros for all your home needs.
            </p>
            <button style={{ background: '#0369A1', color: 'white', border: 'none', padding: '1rem 2.5rem', borderRadius: '12px', fontWeight: '700', fontSize: '1.1rem', boxShadow: '0 4px 16px rgba(3,105,161,0.3)', cursor: 'pointer' }}>
              Book a Service
            </button>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
            <img src="/images/worker-illustration.png.png" alt="FixEasy professionals" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
