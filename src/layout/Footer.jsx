import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-gray-300 py-12 px-6 md.px-12">
      <div className="mx-w-6xl mx-auto grid grid-cols-1 md-grid-cols-4 gap-10">

      <div>
          <h2 className="text-white text-2xl font-bold mb-4">Urbanwear</h2>
          <p className="text-gray-400 text-sm">Premium clothing made for style, comfort, confident</p>
      </div>

      {/* shop link  */}
      <div>
        <h3 className="text-white font-semibold mb-4">Shop</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/men" className="hover:text-white">Men</a></li>
          <li><a href="/women" className="hover:text-white">Women</a></li>
          <li><a href="/new_arrivals" className="hover:text-white">New Arrivals</a></li>
          <li><a href="/sale" className="hover:text-white">Sale</a></li>

        </ul>
      </div>
      {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
            <li><a href="/returns" className="hover:text-white">Returns</a></li>
          </ul>
        </div>


      {/* news letter */}

      <div>
        <h3 className="text-white font-semibold mb-4">
          Stay Updated
        </h3 >
        <p className="text-gray-400 text-sm mb-4">Subscribe for drops, discounts and news.</p>
        <form className="flex">
        <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-400"/>
        <button type="submit" className="px-4 py-2 bg-white text-black font-semibold rounded-r-md rounded-l-md hover:bg-gray-200 transition">Join</button>
        </form>
      </div>
      </div>

      {/* buttom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
         © {new Date().getFullYear()} UrbanWear. All rights reserved.
      </div>
    </footer>
    </>
  )
};

export default Footer;
