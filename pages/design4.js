export default function Design4() {
  const services = [
    { name: 'Electricians', icon: '⚡', bg: '#FEF3C7' },
    { name: 'Cleaning', icon: '✨', bg: '#DBEAFE' },
    { name: 'Gardeners', icon: '🌱', bg: '#D1FAE5' },
    { name: 'Carpenters', icon: '🔨', bg: '#FED7AA' },
    { name: 'Roofing', icon: '🏠', bg: '#E0E7FF' },
    { name: 'Tech Support', icon: '💻', bg: '#FCE7F3' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#FFF7ED', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        padding: '1rem 2rem',
        borderRadius: '0 0 24px 24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#F97316' }}>FixEasy 😊</h1>
          <button style={{
            background: '#F97316',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
          }}>Let's Start!</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏠✨</div>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1F2937', lineHeight: '1.2' }}>
            Home Services Made<br />
            <span style={{ color: '#F97316' }}>Simple & Fun!</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6B7280', marginBottom: '2rem' }}>
            Your friendly neighborhood pros are just a tap away 🎉
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: '#F97316',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Find a Pro 🔍
            </button>
            <button style={{
              background: 'white',
              color: '#F97316',
              border: '2px solid #F97316',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem', color: '#1F2937' }}>
            What Can We Help With?
          </h3>
          <p style={{ textAlign: 'center', color: '#6B7280', fontSize: '1.1rem', marginBottom: '3rem' }}>
            Pick a service and we'll match you with the perfect pro! 🎯
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: service.bg,
                padding: '2.5rem',
                borderRadius: '24px',
                textAlign: 'center',
                border: '3px solid white',
                boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1F2937' }}>{service.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'white',
        borderRadius: '24px 24px 0 0',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>😊</div>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#F97316', marginBottom: '1rem' }}>FixEasy</h4>
        <p style={{ color: '#6B7280' }}>© 2025 FixEasy Ireland. Making homes happy!</p>
      </footer>
    </div>
  );
}
