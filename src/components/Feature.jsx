import React from "react";

const Features = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Experience the difference with our premium features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                🚚
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Free Shipping
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy free shipping on all orders over $50. Fast delivery to
                your doorstep within 3-5 business days.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Secure Payment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shop with confidence using our encrypted payment system. Your
                information is always protected.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                ↩️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Easy Returns
              </h3>
              <p className="text-gray-600 leading-relaxed">
                30-day hassle-free returns. Not satisfied? Send it back for a
                full refund, no questions asked.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                ⭐
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest materials and craftsmanship. Each piece is
                carefully inspected before shipping.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                💬
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is here to help you anytime,
                anywhere. Get answers instantly.
              </p>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform">
                🌍
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainable practices and eco-friendly materials. Fashion that
                cares for our planet's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Commitments</h2>
          <p className="text-xl text-indigo-100">
            What we promise to deliver every single time
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Verified Quality</h3>
            <p className="text-indigo-100">Every product tested and approved</p>
          </div>

          <div className="group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-indigo-100">Express shipping available</p>
          </div>

          <div className="group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
              🎁
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Gift Ready</h3>
            <p className="text-indigo-100">Beautiful packaging included</p>
          </div>

          <div className="group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
              👥
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-indigo-100">Join 50K+ happy customers</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-gray-900 mb-1">Free Shipping</h4>
              <p className="text-sm text-gray-600">Orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-gray-900 mb-1">30-Day Returns</h4>
              <p className="text-sm text-gray-600">Money back guarantee</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-900 mb-1">Premium Quality</h4>
              <p className="text-sm text-gray-600">Best materials only</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">💳</div>
              <h4 className="font-bold text-gray-900 mb-1">Secure Payment</h4>
              <p className="text-sm text-gray-600">100% protected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
