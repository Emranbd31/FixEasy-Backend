export default function Design1() {
  const services = [
    { name: 'Electricians', icon: '⚡', color: '#F59E0B' },
    { name: 'Cleaning', icon: '✨', color: '#10B981' },
    { name: 'Gardeners', icon: '🌱', color: '#22C55E' },
    { name: 'Carpenters', icon: '🔨', color: '#F97316' },
    { name: 'Roofing', icon: '🏠', color: '#3B82F6' },
    { name: 'Tech Support', icon: '💻', color: '#8B5CF6' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#8B5CF6' }}>FixEasy</h1>
          <button style={{
            background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Trusted Professionals for Your Home
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
              Book vetted experts in minutes. From electricians to cleaners, we've got you covered.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>1,200+</div>
                <div style={{ opacity: 0.9 }}>Verified Pros</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>150+</div>
                <div style={{ opacity: 0.9 }}>Cities</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>45+</div>
                <div style={{ opacity: 0.9 }}>Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem' }}>
            Popular Services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{service.name}</h4>
                <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>Available 24/7</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>FixEasy</h4>
          <p style={{ opacity: 0.9 }}>© 2025 FixEasy Ireland. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
