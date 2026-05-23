import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-black text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <h2 className="font-brand text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-white to-indigo-500 bg-clip-text text-transparent">
              BKS
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Modern solutions for modern businesses. We create quality
              experiences with design, innovation, and technology.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <button className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all duration-300 shadow-lg">
                <IoLogoWhatsapp size={22} />
              </button>

              <button className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg">
                <FaFacebookF size={18} />
              </button>

              <button className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 transition-all duration-300 shadow-lg">
                <IoLogoInstagram size={22} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Ahmedabad, Gujarat</p>
              <p>support@bks.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}
            <span className="text-white font-medium"> BKS Enterprise</span> —
            All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-500">
            <button className="hover:text-white transition">
              Privacy Policy
            </button>
            <button className="hover:text-white transition">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
