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
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#111827', color: 'white', minHeight: '100vh' }}>
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
        background: 'linear-gradient(to bottom, #111827, #1F2937)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/images/worker-illustration.png" alt="FixEasy professionals" style={{ width: '200px', marginBottom: '2rem', borderRadius: '16px' }} />
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #F59E0B, #10B981)',
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '2rem'
          }}>
            ✨ Premium Home Services
          </div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Elite Professionals<br />
            <span style={{ background: 'linear-gradient(135deg, #F59E0B, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              At Your Service
            </span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#9CA3AF', marginBottom: '2rem' }}>
            Experience luxury home services with our handpicked professionals
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
            color: '#111827',
            border: 'none',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(251, 191, 36, 0.3)'
          }}>
            Book Premium Service
          </button>
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
