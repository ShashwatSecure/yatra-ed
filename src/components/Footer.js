// components/Footer.js
const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#231F41", color: "#fff" }} className="py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Tagline */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Yatra<span className="text-yellow-400">Ed</span>
            </div>
            <p className="text-gray-300">
              Guiding your educational journey every step of the way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-3">Get in Touch</h4>
            <p className="text-gray-300 text-sm mb-2">📍 Bangalore, India</p>
            <p className="text-gray-300 text-sm mb-2">📞 +91 98765 43210</p>
            <p className="text-gray-300 text-sm">✉️ contact@yatraed.com</p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-3">Subscribe</h4>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest offerings and insights.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-gray-100 text-black"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-[#231F41] font-semibold py-2 rounded hover:bg-yellow-500 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} YatraEd. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  