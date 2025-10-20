export default function Design7() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#FEF3C7', minHeight: '100vh' }}>
      {/* Header */}
      <nav style={{ background: 'white', padding: '1.5rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#D97706' }}>FixEasy</h1>
          <button style={{ background: '#D97706', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Book Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '3rem', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#92400E', lineHeight: '1.2' }}>
              Book Top Pros<br />Instantly
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#78350F', marginBottom: '2rem', lineHeight: '1.6' }}>
              The best professionals for every home service.
            </p>
            <button style={{ background: '#D97706', color: 'white', border: 'none', padding: '1rem 2.5rem', borderRadius: '12px', fontWeight: '700', fontSize: '1.1rem', boxShadow: '0 4px 16px rgba(217,119,6,0.3)', cursor: 'pointer' }}>
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

function OldDesign7() {
  const services = [
    { name: 'Electricians', icon: '⚡', color: '#FEF3C7' },
    { name: 'Cleaning', icon: '✨', color: '#FFEDD5' },
    { name: 'Gardeners', icon: '🌱', color: '#FEF3C7' },
    { name: 'Carpenters', icon: '🔨', color: '#FFEDD5' },
    { name: 'Roofing', icon: '🏠', color: '#FEF3C7' },
    { name: 'Tech Support', icon: '💻', color: '#FFEDD5' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#FFFBEB', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{
        background: 'linear-gradient(90deg, #F97316 0%, #FBBF24 100%)',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '800' }}>⚡ FixEasy</h1>
          <button style={{
            background: 'white',
            color: '#F97316',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            fontWeight: '700',
            cursor: 'pointer'
          }}>Book Now!</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
        padding: '6rem 2rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          fontSize: '15rem',
          opacity: 0.1
        }}>⚡</div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Fast, Reliable,<br />Energetic!
          </h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.95 }}>
            High-energy professionals ready to power up your home! 🔥
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>24/7</div>
              <div style={{ fontSize: '0.9rem' }}>Available</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>{'<'} 1hr</div>
              <div style={{ fontSize: '0.9rem' }}>Response</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>100%</div>
              <div style={{ fontSize: '0.9rem' }}>Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#F97316' }}>
            Power Services ⚡
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.name} style={{
                background: service.color,
                padding: '2.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                border: '3px solid #F97316',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 6px 16px rgba(249, 115, 22, 0.2)'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#92400E' }}>{service.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(90deg, #F97316 0%, #FBBF24 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>⚡ FixEasy</h4>
        <p>© 2025 FixEasy Ireland. Energize Your Home!</p>
      </footer>
    </div>
  );
}
