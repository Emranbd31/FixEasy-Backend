export default function Design10() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning Services', icon: '✨' },
    { name: 'Gardeners', icon: '🌱' },
    { name: 'Carpenters', icon: '🔨' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Tech Support', icon: '💻' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #E2E8F0',
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#475569' }}>FixEasy</h1>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.95rem' }}>Services</a>
            <a style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.95rem' }}>About</a>
            <a style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
            <button style={{
              background: '#475569',
              color: 'white',
              border: 'none',
              padding: '0.65rem 1.25rem',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}>Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: '#F1F5F9',
            color: '#475569',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '500',
            marginBottom: '2rem'
          }}>
            TRUSTED HOME SERVICES
          </div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#0F172A', lineHeight: '1.2' }}>
            Professional Services<br />Simplified
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Connect with verified professionals for all your home service needs
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <button style={{
              background: '#475569',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Browse Services
            </button>
            <button style={{
              background: 'white',
              color: '#475569',
              border: '2px solid #E2E8F0',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: '800px',
            margin: '3rem auto 0',
            padding: '2rem',
            background: '#F8FAFC',
            borderRadius: '12px',
            border: '1px solid #E2E8F0'
          }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>1,200+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748B' }}>Professionals</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>150+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748B' }}>Cities Served</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>45+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748B' }}>Service Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '3rem', color: '#0F172A' }}>
            Available Services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: 'white',
                border: '1px solid #E2E8F0',
                padding: '2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0F172A', marginBottom: '0.5rem' }}>{service.name}</h4>
                <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Professional & reliable</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'white',
        borderTop: '1px solid #E2E8F0',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#475569', marginBottom: '1rem' }}>FixEasy</h4>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>© 2025 FixEasy Ireland. All rights reserved.</p>
      </footer>
    </div>
  );
}
