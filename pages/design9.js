export default function Design9() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning', icon: '✨' },
    { name: 'Gardeners', icon: '🌱' },
    { name: 'Carpenters', icon: '🔨' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Tech Support', icon: '💻' },
  ];

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#FFF1F2', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'white',
        borderBottom: '2px solid #FB7185',
        padding: '1.5rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#E11D48', fontFamily: 'Georgia, serif' }}>FixEasy</h1>
          <button style={{
            background: '#E11D48',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            fontWeight: '400',
            cursor: 'pointer',
            fontFamily: 'Georgia, serif'
          }}>Book Service</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #FFE4E6 0%, #FFF1F2 100%)',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            color: '#E11D48'
          }}>✦</div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '400', marginBottom: '1.5rem', color: '#881337', lineHeight: '1.3' }}>
            Elegant Home Services
          </h2>
          <p style={{ fontSize: '1.3rem', color: '#9F1239', marginBottom: '2rem', fontStyle: 'italic' }}>
            Refined professionals for distinguished homes
          </p>
          <button style={{
            background: '#E11D48',
            color: 'white',
            border: '2px solid #9F1239',
            padding: '1rem 2.5rem',
            borderRadius: '4px',
            fontSize: '1.1rem',
            fontWeight: '400',
            cursor: 'pointer'
          }}>
            Request Service
          </button>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '400', textAlign: 'center', marginBottom: '1rem', color: '#881337' }}>
            Our Services
          </h3>
          <p style={{ textAlign: 'center', color: '#9F1239', fontSize: '1.1rem', marginBottom: '3rem', fontStyle: 'italic' }}>
            Curated excellence for your home
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: '#FFF1F2',
                border: '1px solid #FB7185',
                padding: '2.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '400', color: '#881337', marginBottom: '0.5rem' }}>{service.name}</h4>
                <div style={{
                  width: '60px',
                  height: '1px',
                  background: '#FB7185',
                  margin: '1rem auto'
                }} />
                <p style={{ color: '#9F1239', fontSize: '0.95rem' }}>Premium service</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#881337',
        color: '#FFE4E6',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '2px solid #9F1239'
      }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✦</div>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>FixEasy</h4>
        <p style={{ opacity: 0.9 }}>© 2025 FixEasy Ireland. Elegant Home Services.</p>
      </footer>
    </div>
  );
}
