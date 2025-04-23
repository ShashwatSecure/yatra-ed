// components/Navbar.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-blue-800">
              Yatra<span className="text-red-600">Ed</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/courses" className="hover:text-blue-600">Courses</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
        </nav>

          
        <Link
  href="/contact-us"
  className="hidden md:inline-block px-4 py-2 bg-[#231F41] text-white rounded hover:bg-blue-800 hover:text-white"
>
  Contact Us
</Link>


          {/* Hamburger Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 font-medium text-gray-700">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/courses" className="block hover:text-blue-600">Courses</Link>
          <Link href="/about" className="block hover:text-blue-600">About Us</Link>
          <Link
            href="/contact-us"
            className="inline-block mt-2 px-4 py-2 bg-[#231F41] text-white rounded hover:bg-blue-800 hover:text-white"
          >
            Contact Us
          </Link>
          </div>
        )}
      </header>
  );
};

export default Navbar;
