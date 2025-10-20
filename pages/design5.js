export default function Design5() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning Services', icon: '✨' },
    { name: 'Gardening & Landscaping', icon: '🌱' },
    { name: 'Carpentry', icon: '🔨' },
    { name: 'Roofing & Gutters', icon: '🏠' },
    { name: 'Technical Support', icon: '💻' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: '#1E40AF',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>FixEasy Professional</h1>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Services</a>
            <a style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>About</a>
            <a style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
            <button style={{
              background: 'white',
              color: '#1E40AF',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>Request Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
        color: 'white',
        padding: '5rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              PROFESSIONAL HOME SERVICES
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Expert Solutions for Your Property
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>
              Certified professionals delivering excellence in home maintenance and repairs since 2020.
            </p>
            <button style={{
              background: 'white',
              color: '#1E40AF',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Schedule Consultation
            </button>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Why Choose Us</h3>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li>✓ Licensed & Insured Professionals</li>
              <li>✓ 24/7 Emergency Service Available</li>
              <li>✓ Satisfaction Guaranteed</li>
              <li>✓ Competitive Pricing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem' }}>
              Our Services
            </h3>
            <p style={{ color: '#6B7280', fontSize: '1.1rem' }}>
              Comprehensive solutions for all your property needs
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: '#F8FAFC',
                border: '1px solid #E5E7EB',
                padding: '2rem',
                borderRadius: '8px',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1F2937', marginBottom: '0.5rem' }}>{service.name}</h4>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Professional service with guaranteed results
                </p>
                <a style={{ color: '#1E40AF', fontWeight: '600', fontSize: '0.9rem' }}>Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1E40AF',
        color: 'white',
        padding: '3rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>FixEasy Professional</h4>
          <p style={{ opacity: 0.9 }}>© 2025 FixEasy Ireland. Professional Home Services.</p>
        </div>
      </footer>
    </div>
  );
}
