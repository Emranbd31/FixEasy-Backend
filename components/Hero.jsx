import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #fefcff 0%, #f2f8ff 100%)',
        textAlign: 'center',
        padding: '60px 20px',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#111',
          marginBottom: '15px',
        }}
      >
        FixEasy Ireland
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          color: '#555',
          fontSize: '1.2rem',
          maxWidth: '600px',
          marginBottom: '40px',
        }}
      >
        Real local pros. Upfront pricing. Book in minutes.
      </motion.p>

      <motion.a
        href='/book'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: '#0070f3',
          color: '#fff',
          padding: '14px 36px',
          borderRadius: '10px',
          fontSize: '1.1rem',
          textDecoration: 'none',
          fontWeight: '500',
        }}
      >
        Book a Service
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        style={{
          marginTop: '70px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {[
          { name: 'Plumbing', color: '#3b82f6' },
          { name: 'Cleaning', color: '#facc15' },
          { name: 'Electrical', color: '#fbbf24' },
          { name: 'Painting', color: '#ef4444' },
          { name: 'Gardening', color: '#22c55e' },
          { name: 'Moving Help', color: '#eab308' },
        ].map((service, i) => (
          <motion.div
            key={service.name}
            whileHover={{ scale: 1.05 }}
            style={{
              width: '150px',
              height: '120px',
              background: '#fff',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#333',
              fontWeight: '600',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                backgroundColor: service.color,
                borderRadius: '3px',
                marginBottom: '8px',
              }}
            ></div>
            {service.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

