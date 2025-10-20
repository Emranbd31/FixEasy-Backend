export default function Design6() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning', icon: '✨' },
    { name: 'Gardeners', icon: '🌱' },
    { name: 'Carpenters', icon: '🔨' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Tech Support', icon: '💻' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F0FDF4', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'white',
        borderBottom: '2px solid #10B981',
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669' }}>🌿 FixEasy</h1>
          <button style={{
            background: '#10B981',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌱</div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#065F46', lineHeight: '1.2' }}>
            Eco-Friendly Home Services
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#047857', marginBottom: '2rem' }}>
            Sustainable solutions for your home, kind to the planet 🌍
          </p>
          <button style={{
            background: '#10B981',
            color: 'white',
            border: 'none',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
          }}>
            Book Green Service
          </button>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#065F46' }}>
            Our Services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: '#F0FDF4',
                border: '2px solid #10B981',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#065F46' }}>{service.name}</h4>
                <p style={{ color: '#047857', fontSize: '0.9rem', marginTop: '0.5rem' }}>Eco-certified</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#10B981',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>🌿 FixEasy</h4>
        <p>© 2025 FixEasy Ireland. Green & Sustainable.</p>
      </footer>
    </div>
  );
}
