
"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <div className="text-center mt-8">
        <Link href="/register/professional">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            💼 Join as Professional & Get Requests
          </button>
        </Link>
      </div>

  <section id="how-it-works" className="py-8 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold"
        >
          ⚡ Quick & Easy Process
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          How It <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Get your home services done in three simple steps
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
        {/* Connecting Lines */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

        {[
          {
            icon: '🔍',
            number: '01',
            title: 'Choose Service',
            desc: 'Browse our 12 professional services and select what you need',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            icon: '📅',
            number: '02',
            title: 'Book & Schedule',
            desc: 'Pick a convenient time and get instant confirmation from verified pros',
            color: 'from-cyan-500 to-blue-600'
          },
          {
            icon: '✅',
            number: '03',
            title: 'Get It Done',
            desc: 'Sit back while our professionals complete your service perfectly',
            color: 'from-blue-600 to-cyan-600'
          }
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -12, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
            className="relative"
          >
            {/* Step Number Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl text-white font-bold text-lg`}>
                {step.number}
              </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl p-8 pt-14 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 h-full relative overflow-hidden">
              {/* Decorative Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-5 rounded-full -mr-16 -mt-16`}></div>

              {/* Icon */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-24 h-24 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                >
                  <span className="text-5xl">{step.icon}</span>
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow for connection (desktop only) */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 z-20">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-3xl text-blue-500"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

{/* LOCATION COVERAGE SECTION */ }
<section className="py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
      >
        🇮🇪 Nationwide Coverage
      </motion.div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
        Serving All of <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Ireland</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Professional home services available in all 32 counties across Ireland
      </p>
    </motion.div>

    {/* Counties Grid */}
    <div className="max-w-6xl mx-auto">
      {/* Province: Leinster */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">🏛️</span> Leinster
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {['Dublin', 'Carlow', 'Kildare', 'Kilkenny', 'Laois', 'Longford', 'Louth', 'Meath', 'Offaly', 'Westmeath', 'Wexford', 'Wicklow'].map((county, i) => (
            <motion.div
              key={county}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-400 text-center cursor-pointer"
            >
              <div className="text-lg font-semibold text-gray-900">{county}</div>
              <div className="text-xs text-green-600 font-semibold mt-1">✓ Available</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Province: Munster */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">🏰</span> Munster
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {['Cork', 'Clare', 'Kerry', 'Limerick', 'Tipperary', 'Waterford'].map((county, i) => (
            <motion.div
              key={county}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-400 text-center cursor-pointer"
            >
              <div className="text-lg font-semibold text-gray-900">{county}</div>
              <div className="text-xs text-green-600 font-semibold mt-1">✓ Available</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Province: Connacht */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">🌊</span> Connacht
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {['Galway', 'Leitrim', 'Mayo', 'Roscommon', 'Sligo'].map((county, i) => (
            <motion.div
              key={county}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-400 text-center cursor-pointer"
            >
              <div className="text-lg font-semibold text-gray-900">{county}</div>
              <div className="text-xs text-green-600 font-semibold mt-1">✓ Available</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Province: Ulster */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">⛰️</span> Ulster (ROI)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {['Cavan', 'Donegal', 'Monaghan'].map((county, i) => (
            <motion.div
              key={county}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-400 text-center cursor-pointer"
            >
              <div className="text-lg font-semibold text-gray-900">{county}</div>
              <div className="text-xs text-green-600 font-semibold mt-1">✓ Available</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Coverage Stats */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 text-center"
    >
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">32</div>
            <div className="text-gray-700 font-semibold">Counties Covered</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-semibold">Local Professionals</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700 font-semibold">Ireland Coverage</div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* AS SEEN IN SECTION */ }
<section className="py-16 bg-gradient-to-b from-white to-gray-50 border-y border-gray-200">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
        As Featured In
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
        <div className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">The Irish Times</div>
        <div className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">RTÉ</div>
        <div className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">Irish Independent</div>
        <div className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">The Herald</div>
      </div>
    </motion.div>
  </div>
</section>

{/* CUSTOMER TESTIMONIALS SECTION */ }
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold"
            >
              ⭐ Trusted by Thousands
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers across Ireland
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Sarah Murphy',
                location: 'Dublin',
                service: 'Cleaning',
                rating: 5,
                text: 'Simply amazing! Booked a cleaner within minutes. The service was professional and my house has never looked better. Highly recommend!',
                avatar: 'https://i.pravatar.cc/150?img=1'
              },
              {
                name: 'John O\'Brien',
                location: 'Cork',
                service: 'Plumbing',
                rating: 5,
                text: 'Had a plumbing emergency at 9pm. Found a verified pro immediately who fixed everything the next morning. Outstanding service!',
                avatar: 'https://i.pravatar.cc/150?img=12'
              },
              {
                name: 'Emma Walsh',
                location: 'Galway',
                service: 'Electrical',
                rating: 5,
                text: 'The electrician was ID-verified, arrived on time, and did excellent work. Transparent pricing with no hidden fees. Will use again!',
                avatar: 'https://i.pravatar.cc/150?img=5'
              },
              {
                name: 'Michael Byrne',
                location: 'Limerick',
                service: 'Handyman',
                rating: 5,
                text: 'Needed several repairs done. The handyman was skilled, friendly, and finished ahead of schedule. Great value for money!',
                avatar: 'https://i.pravatar.cc/150?img=13'
              },
              {
                name: 'Lisa Keane',
                location: 'Waterford',
                service: 'Gardening',
                rating: 5,
                text: 'My garden was completely transformed! The gardener was knowledgeable and the results exceeded my expectations.',
                avatar: 'https://i.pravatar.cc/150?img=9'
              },
              {
                name: 'David Kelly',
                location: 'Dublin',
                service: 'Moving',
                rating: 5,
                text: 'Stress-free moving experience! The team was careful with my belongings and made the whole process smooth and easy.',
                avatar: 'https://i.pravatar.cc/150?img=14'
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                  "{testimonial.text}"
                </p>

                {/* Customer Info - WITH REAL PHOTO */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location} • {testimonial.service}</div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">✓ Verified</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trustpilot-style Overall Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-green-500 text-3xl">★</span>
                ))}
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">4.8 out of 5</div>
                <div className="text-gray-600 mt-2">Based on 2,847+ customer reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
            >
              💎 Premium Quality Service
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">FixEasy</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best home service experience in Ireland
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: '✅',
                title: 'ID-Verified Professionals',
                desc: 'All pros are background checked, ID-verified, and certified before joining our platform',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: '🏆',
                title: 'Happiness Pledge',
                desc: 'Not satisfied? We\'ll work to make it right or your money back - guaranteed',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                desc: 'No hidden fees - see clear upfront costs before you book. Starting from €29',
                color: 'from-blue-400 to-cyan-500'
              },
              {
                icon: '⚡',
                title: 'Instant Booking',
                desc: 'Book your service online in minutes. 24/7 availability with real-time confirmation',
                color: 'from-purple-400 to-pink-500'
              }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 text-center h-full relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feat.color} opacity-5 rounded-full -mr-12 -mt-12`}></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${feat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <span className="text-4xl">{feat.icon}</span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span className="text-gray-700 font-semibold">Insured Services</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span className="text-gray-700 font-semibold">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-gray-700 font-semibold">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇪</span>
              <span className="text-gray-700 font-semibold">Proudly Irish</span>
            </div>
          </motion.div>

          {/* Money-Back Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 border-4 border-green-300 rounded-3xl p-8 text-center shadow-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Happiness Pledge</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                If you're not 100% satisfied with your service, we'll work to make it right or provide a <span className="font-bold text-green-700">full refund</span>. Your satisfaction is our guarantee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed font-light">Join thousands of satisfied customers who trust FixEasy for their home service needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300">Book Now</motion.button>
              </Link>
              <Link href="/register/professional">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="px-12 py-5 bg-transparent text-white rounded-2xl font-bold text-lg border-2 border-white hover:bg-white/10 transition-all duration-300">Join as Professional</motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
}
