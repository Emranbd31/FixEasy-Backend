import Head from "next/head";

export default function Home() {
  const services = [
    { name: 'Electricians', icon: '⚡' },
    { name: 'Cleaning', icon: '✨' },
    { name: 'Gardeners', icon: '🌱' },
    { name: 'Carpenters', icon: '🔨' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Tech Support', icon: '💻' },
  ];

  return (
    <>
      <Head>
        <title>FixEasy - Trusted Professionals. Verified for Your Peace of Mind.</title>
        <meta name="description" content="Easily book reliable home services in your area. All professionals are vetted to ensure your safety." />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#169B62] via-white to-[#FF883E]">
        {/* Nav */}
        <header className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur border-b border-gray-100">
          <div className="text-3xl font-extrabold text-[#169B62]">FixEasy</div>
          <nav className="space-x-8 text-[#169B62] font-medium">
            <a href="#services" className="hover:text-[#FF883E] transition">Services</a>
            <a href="#how" className="hover:text-[#FF883E] transition">How It Works</a>
            <a href="#contact" className="hover:text-[#FF883E] transition">Contact</a>
            <button className="ml-6 px-5 py-2 bg-[#FF883E] text-white rounded-full font-semibold shadow hover:bg-[#169B62] transition-transform transform hover:scale-105 duration-300">Sign Up</button>
          </nav>
        </header>

        {/* Hero */}
        <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-20 py-10 gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#169B62] mb-6 leading-tight">
              Trusted Professionals.<br/>Verified for Your Peace of Mind.
            </h1>
            <p className="text-lg text-[#169B62] mb-8">
              Easily book reliable home services in your area. All professionals are vetted to ensure your safety.
            </p>
            <div className="flex gap-4 mb-10">
              <button className="px-6 py-3 bg-[#169B62] text-white rounded-full font-semibold shadow hover:bg-[#FF883E] transition-transform transform hover:-translate-x-1 duration-300">
                Find a Professional
              </button>
              <button className="px-6 py-3 bg-white text-[#FF883E] border border-[#FF883E] rounded-full font-semibold shadow hover:bg-orange-50 transition-transform transform hover:translate-x-1 duration-300">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <div className="text-2xl font-bold text-[#169B62]">1,200+</div>
                <div className="text-[#169B62] text-sm">vetted professionals</div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <div className="text-2xl font-bold text-[#169B62]">150+</div>
                <div className="text-[#169B62] text-sm">cities covered</div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <div className="text-2xl font-bold text-[#169B62]">45+</div>
                <div className="text-[#169B62] text-sm">services available</div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md flex-shrink-0 flex items-center justify-center">
            <img src="/images/worker-illustration.png.png" alt="Professional Worker" className="rounded-3xl shadow-xl w-full animate-slideX" style={{animationDuration:'1.8s'}} />
          </div>
        </main>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white/80 backdrop-blur">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img src="/icons/insurance.svg" alt="Insurance" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Comprehensive insurance</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/gardening.svg" alt="Gardening" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Gardening covered</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/appliances.svg" alt="Appliances" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Appliances valuable 24/7</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/dedwork.svg" alt="Dedwork" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Dedwork assistance</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/moving.svg" alt="Moving" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Moving & cleaning</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/smart-home.svg" alt="Smart Home" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Smart Home service</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/painting.svg" alt="Painting" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Painting & Heating</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/heating.svg" alt="Heating" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Heating & cooling</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/security.svg" alt="Security" className="w-10 h-10 mb-2" />
              <span className="font-semibold text-[#169B62]">Security remains private</span>
            </div>
          </div>
        </section>

        {/* Safeguards Section */}
        <section id="how" className="py-16 bg-gradient-to-r from-[#169B62]/10 to-[#FF883E]/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-[#169B62] mb-8">Safeguards for Clients, Pros, and Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4 text-[#169B62]">
                <li><b>Insurance & compliance</b><br /><span className="text-gray-600">Industry leading coverage for all services</span></li>
                <li><b>Dedicated assistance</b><br /><span className="text-gray-600">Our Team is available 24/7 to help with any issues</span></li>
                <li><b>Satisfaction guaranteed</b></li>
              </ul>
              <ul className="space-y-4 text-[#169B62]">
                <li><b>Security for compliance</b><br /><span className="text-gray-600">We maintain required levels of security and adherence to regulations</span></li>
                <li><b>Anonymous ratings</b><br /><span className="text-gray-600">Leave feedback with confidence; your identity remains private</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 bg-white/80 backdrop-blur border-t border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#169B62] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">Have questions or need help? Our support team is here for you 24/7.</p>
            <a href="mailto:support@fixeasy.irish" className="inline-block px-6 py-3 bg-[#169B62] text-white rounded-full font-semibold shadow hover:bg-[#FF883E] transition">
              Email Support
            </a>
          </div>
        </section>
        <footer className="footer text-center py-6 text-gray-500 text-sm bg-white/80 backdrop-blur border-t border-gray-100">
          © {new Date().getFullYear()} FixEasy. All rights reserved.
        </footer>
      </div>
    </>
  );
}
