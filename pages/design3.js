export default function Design3() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning', icon: '✨' },
    { name: 'Gardeners', icon: '🌱' },
    { name: 'Carpenters', icon: '🔨' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Tech Support', icon: '💻' },
  ];

  return (
  <div style={{ fontFamily: 'system-ui, sans-serif', background: 'linear-gradient(135deg, #169B62 0%, #FFFFFF 50%, #FF883E 100%)', color: '#222', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FBBF24' }}>FixEasy</h1>
          <button style={{
            background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
            color: '#111827',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer'
          }}>Premium Access</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '32px',
        margin: '3rem auto',
        maxWidth: '900px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        padding: '3rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: '320px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#169B62', lineHeight: '1.2' }}>
            Trusted Professionals.<br />Verified for Your Peace of Mind.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: '2rem' }}>
            Hire experienced and vetted pros for all your home needs.
          </p>
          <button style={{
            background: '#1976D2',
            color: 'white',
            border: 'none',
            padding: '0.85rem 2rem',
            borderRadius: '12px',
            fontWeight: '700',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}>Book a Service</button>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div style={{ background: '#E3FCEC', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#169B62' }}>Painting</div>
              <div style={{ color: '#555', fontSize: '0.95rem' }}>Available 24/7</div>
            </div>
            <div style={{ background: '#FFF4E3', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#FF883E' }}>Gardening</div>
              <div style={{ color: '#555', fontSize: '0.95rem' }}>Available 24/7</div>
            </div>
            <div style={{ background: '#E3FCEC', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#169B62' }}>Carpentry</div>
              <div style={{ color: '#555', fontSize: '0.95rem' }}>Available 24/7</div>
            </div>
            <div style={{ background: '#FFF4E3', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#FF883E' }}>Plumbing</div>
              <div style={{ color: '#555', fontSize: '0.95rem' }}>Available 24/7</div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '320px', textAlign: 'center' }}>
          <img src="/images/worker-illustration.png.png" alt="FixEasy professionals" style={{ width: '260px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem', background: '#1F2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem' }}>
            Premium Services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: '#111827',
                border: '2px solid rgba(251, 191, 36, 0.2)',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#FBBF24' }}>{service.name}</h4>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Premium quality</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        borderTop: '1px solid rgba(251, 191, 36, 0.2)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FBBF24', marginBottom: '1rem' }}>FixEasy</h4>
        <p style={{ color: '#9CA3AF' }}>© 2025 FixEasy Ireland. Premium Services.</p>
      </footer>
    </div>
  );
}
