import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        padding: "4rem 0",
        background: "linear-gradient(180deg, #fefcff 0%, #f2f8ff 100%)",
      }}
    >
      <h1>FixEasy Ireland</h1>
      <p>Real local pros. Upfront pricing. Book in minutes.</p>
      <a
        href="/book"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Book a Service
      </a>
    </motion.section>
  );
}
