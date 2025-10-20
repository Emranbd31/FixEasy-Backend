
import Hero from '../components/Hero'
import '../styles/services.css';
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      name: 'Electricians',
      image: '/images/services/electrician.webp',
      description: 'Emergency electricians on call',
    },
    {
      name: 'Cleaning Crews',
      image: '/images/services/cleaning.webp',
      description: 'Hotel-level cleaning teams',
    },
    {
      name: 'Gardeners',
      image: '/images/services/gardening.webp',
      description: 'Gardens cared for all year',
    },
    {
      name: 'Carpenters',
      image: '/images/services/carpenter.webp',
      description: 'Joiners for bespoke storage',
    },
    {
      name: 'Roofing Teams',
      image: '/images/services/roofing.webp',
      description: 'Roof and gutter specialists',
    },
    {
      name: 'Tech Support',
      image: '/images/services/tech.webp',
      description: 'Tech support at your doorstep',
    },
  ];
  return (
    <div>
      <Hero />
      <main className="container" id="services">
        <h2 className="section-title">Popular Home Services</h2>
        <div className="grid">
          {services.map(s => (
            <article className="card" key={s.name}>
              <div className="card-image-wrapper">
                <Image
                  src={s.image}
                  width={300}
                  height={300}
                  alt={s.name}
                  className="card-image"
                />
                <div className="card-gradient" />
              </div>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <span className="badge">Verified</span>
            </article>
          ))}
        </div>
      </main>
      <footer className="footer">© {new Date().getFullYear()} FixEasy Ireland</footer>
    </div>
  );
}
