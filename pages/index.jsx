// deploy-bump: 2025-10-20T21:10Z
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FixEasy - Trusted Professionals. Verified for Your Peace of Mind.</title>
        <meta name="description" content="Hire experienced and vetted pros for all your home needs." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-blue-50/60 to-slate-50/40 rounded-[32px] md:rounded-[48px] shadow-xl ring-1 ring-black/5 overflow-hidden">
              {/* Top bar inside hero */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 md:px-10 py-5">
                <div className="text-xl md:text-2xl font-bold text-gray-900">FixEasy</div>
                <a href="#services" className="hidden md:inline-flex px-5 py-2 bg-white text-blue-700 border border-blue-200 rounded-full font-semibold shadow hover:bg-blue-50 transition">
                  Book new
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-16 pt-20 md:pt-24">
                {/* Left Content */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Trusted Professionals.<br />
                    Verified for Your<br />
                    Peace of Mind.
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Hire experienced and vetted pros for all your home needs.
                  </p>
                  <button className="px-8 py-4 bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg transition shadow-[0_10px_22px_rgba(29,78,216,0.35)] hover:shadow-[0_14px_28px_rgba(29,78,216,0.45)] transform hover:-translate-y-0.5">
                    Book a Service
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-end md:pl-6 lg:pl-10">
                  <img
                    src="/images/worker-illustration.png.png"
                    alt="Professional team - plumber, cleaner, handyman"
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl md:translate-y-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Home Services Section */}
        <section id="services" className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
              All Home Services,<br />
              One Tap Away
            </h2>

            {/* Featured services (right of title) */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-start mb-10">
              <div className="md:col-span-2" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Cleaning", icon: "🧹" },
                  { name: "Handyman", icon: "🛠️" },
                  { name: "Plumbing", icon: "🔧" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl px-4 py-5 text-center shadow-[0_12px_28px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                      {s.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full services grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: "Painting", icon: "🎨", color: "bg-indigo-100" },
                { name: "Gardening", icon: "🌿", color: "bg-emerald-100" },
                { name: "Carpentry", icon: "🪚", color: "bg-amber-100" },
                { name: "Appliance Repair", icon: "🔌", color: "bg-blue-100" },
                { name: "Window & Lock Repair", icon: "🪟", color: "bg-cyan-100" },
                { name: "Door & Lock Repair", icon: "🚪", color: "bg-blue-100" },
                { name: "Tiling & Flooring", icon: "🧱", color: "bg-orange-100" },
                { name: "Furniture Assembly", icon: "🧰", color: "bg-cyan-100" },
                { name: "CCTV & Flooring", icon: "📹", color: "bg-blue-100" },
                { name: "HVAC Cooling", icon: "❄️", color: "bg-teal-100" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer ring-1 ring-black/5"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-2xl mb-3`}>
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose Your Service Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Choose Your Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🔄", title: "Choose Your Service", color: "bg-blue-100" },
                { icon: "⚡", title: "Match Instantly", color: "bg-blue-100" },
                { icon: "✅", title: "Relax & Be Done", color: "bg-blue-100" },
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose FixEasy Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose FixEasy
            </h2>

            {/* Two-column bullet list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {[
                  "Verified Professionals",
                  "Match Instantly",
                  "Fast Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">✔</span>
                    <span className="text-lg text-gray-900 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  "Secure Payments",
                  "Relax & Be Done",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">✔</span>
                    <span className="text-lg text-gray-900 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2">FixEasy</div>
              <p className="text-gray-400 text-sm">Trusted professionals verified for your peace of mind.</p>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} FixEasy Ireland. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
