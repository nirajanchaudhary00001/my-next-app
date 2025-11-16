import React from 'react'

const Hero = () => {
  return (
    <div>
       <section className="relative bg-gray-100 px-6 py-24 md:px-12 lg:flex lg:items-center lg:py-32">
     
      <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Elevate Your Style
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover premium clothing designed for comfort, confidence, and bold expression.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start gap-4">
          <a
            href="/shop"
            className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
          >
            Shop Now
          </a>
          <a
            href="/collection"
            className="px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition"
          >
            Explore Collection
          </a>
        </div>
      </div>

      
      <div className="relative mt-12 lg:mt-0 lg:ml-16 flex justify-center">
        <img
          src="/letter-nx-logo-design-nx-logo-with-square-shape-in-black-colors-free-template-free-vector.webp"
          alt="Fashion Model"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
    </div>
  )
}

export default Hero