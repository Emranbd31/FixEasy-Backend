export default function Design8() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#ECFEFF', minHeight: '100vh' }}>
      {/* Header */}
      <nav style={{ background: 'white', padding: '1.5rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891B2' }}>FixEasy</h1>
          <button style={{ background: '#0891B2', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Book Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '3rem', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#164E63', lineHeight: '1.2' }}>
              Home Services,<br />Simplified
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#155E75', marginBottom: '2rem', lineHeight: '1.6' }}>
              Book, relax, and let us handle the rest.
            </p>
            <button style={{ background: '#0891B2', color: 'white', border: 'none', padding: '1rem 2.5rem', borderRadius: '12px', fontWeight: '700', fontSize: '1.1rem', boxShadow: '0 4px 16px rgba(8,145,178,0.3)', cursor: 'pointer' }}>
              Book Now
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

function OldDesign8() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning', icon: '✨' },
    { name: 'Gardeners', icon: '🌱' },
    { name: 'Carpenters', icon: '🔨' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Tech Support', icon: '💻' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#ECFEFF', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #06B6D4',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891B2' }}>FixEasy Tech</h1>
          <button style={{
            background: 'linear-gradient(135deg, #0891B2, #06B6D4)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
        padding: '5rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              MODERN HOME SOLUTIONS
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Tech-Forward Home Services
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
              Smart solutions for modern homes. Book instantly, track in real-time.
            </p>
            <button style={{
              background: 'white',
              color: '#0891B2',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Book Service
            </button>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Why Choose Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📱</div>
                <div>Mobile-first booking</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>🔔</div>
                <div>Real-time notifications</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>💳</div>
                <div>Secure digital payments</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>⭐</div>
                <div>Verified reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#0F172A' }}>
            Our Services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: '#F0FDFA',
                border: '1px solid #5EEAD4',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0F172A' }}>{service.name}</h4>
                <p style={{ color: '#0891B2', fontSize: '0.9rem', marginTop: '0.5rem' }}>Digital booking</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0891B2',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>FixEasy Tech</h4>
        <p>© 2025 FixEasy Ireland. Modern Home Solutions.</p>
      </footer>
    </div>
  );
}
