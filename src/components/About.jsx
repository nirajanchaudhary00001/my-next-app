import React from "react";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Born from a vision to revolutionize the fashion industry, we've
              spent years perfecting the balance between contemporary design and
              sustainable practices. Our journey began in a small studio with a
              simple belief: fashion should empower, not compromise.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we're proud to be at the forefront of ethical fashion,
              creating pieces that resonate with conscious consumers who refuse
              to choose between style and sustainability.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-gray-600 mt-2">
                  Happy Customers
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600 mt-2">
                  Designs Created
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600 mt-2">Sustainable</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/black-white-hoodies-wooden-background_447653-25981.webp"
                alt=""
                className="h-60 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-xl"
              />

              <img
                src="/black-white-hoodies-wooden-background_447653-25981.webp"
                alt=""
                className="h-48 w-60 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="/little-boy-tying-shoe-laces-on-stairs-outdoors-closeup.webp"
                alt=""
                className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-xl"
              />

              <img
                src="/little-boy-tying-shoe-laces-on-stairs-outdoors-closeup.webp"
                alt=""
                className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To create fashion that doesn't just look good, but does good.
                We're committed to producing clothing that elevates your style
                while minimizing our environmental footprint, proving that
                luxury and responsibility can coexist beautifully.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">🔮</div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-100 leading-relaxed text-lg">
                To lead a global movement where fashion becomes a force for
                positive change. We envision a future where every garment tells
                a story of ethical production, innovative design, and a
                commitment to preserving our planet for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-600">
            The core principles that shape everything we create
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We celebrate individuality and create designs that let your true
                self shine through every stitch and seam.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eco-conscious materials and ethical practices are woven into the
                fabric of everything we do.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                💎
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium materials and meticulous craftsmanship ensure pieces
                that last a lifetime, not just a season.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building a global family united by shared values, style, and a
                passion for positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-300">
              From concept to creation, excellence at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                💡
              </div>
              <h4 className="text-xl font-bold mb-3">Ideation</h4>
              <p className="text-gray-300">
                Innovative concepts rooted in market trends and customer
                insights
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                ✏️
              </div>
              <h4 className="text-xl font-bold mb-3">Design</h4>
              <p className="text-gray-300">
                Meticulous sketching and digital rendering of every detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                🧵
              </div>
              <h4 className="text-xl font-bold mb-3">Production</h4>
              <p className="text-gray-300">
                Ethical manufacturing with sustainable materials and fair labor
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                🎁
              </div>
              <h4 className="text-xl font-bold mb-3">Delivery</h4>
              <p className="text-gray-300">
                Sustainable packaging and carbon-neutral shipping to your door
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-600">
            The creative minds behind your favorite pieces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/sarah johnson.jpeg.webp"
              alt=""
              className="h-96 w-100 bg-gradient-to-br from-indigo-400 to-purple-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-2xl font-bold text-white mb-2">
                Sarah Johnson
              </h4>
              <p className="text-gray-300 mb-5">Creative Director</p>
              <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                15 years shaping fashion trends and sustainable design
                practices.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Selected-Michael-Chen_JOW-250205-7646-scaled.webp"
              alt=""
              className="h-96 w-100 bg-gradient-to-br from-pink-400 to-red-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-2xl font-bold text-white mb-2">
                Michael Chen
              </h4>
              <p className="text-gray-300 mb-5">Head of Sustainability</p>
              <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pioneering eco-friendly materials and ethical manufacturing
                processes.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/rodriguez-emma-30915-web.webp"
              alt=""
              srcSet=""
              className="h-96 bg-gradient-to-br from-blue-400 to-cyan-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-2xl font-bold text-white mb-2">
                Emma Rodriguez
              </h4>
              <p className="text-gray-300 mb-5">Lead Designer</p>
              <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Award-winning designer bringing innovation to every collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
