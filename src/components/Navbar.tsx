import { useState, useEffect } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "inventory", label: "Inventory" },
    { id: "sell", label: "Sell Your Car" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-[#C6A45C]/10 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex flex-col items-start group"
          >
            <span className="font-['Playfair_Display'] text-xl font-bold text-[#E5E5E5] tracking-wider group-hover:text-[#C6A45C] transition-colors duration-300">
              LEKKI LUXURY
            </span>
            <span className="text-[10px] text-[#C6A45C] tracking-[0.3em] uppercase font-['Inter']">
              Cars
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative text-sm tracking-widest uppercase font-['Inter'] transition-all duration-300 group ${
                  currentPage === link.id
                    ? "text-[#C6A45C]"
                    : "text-[#A8A8A8] hover:text-[#E5E5E5]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C6A45C] transition-all duration-300 ${
                    currentPage === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+2348012345678"
              className="text-[#A8A8A8] hover:text-[#C6A45C] text-sm transition-colors duration-300 font-['Inter']"
            >
              +234 801 234 5678
            </a>
            <button
              onClick={() => onNavigate("inventory")}
              className="bg-[#C6A45C] text-[#0B0B0D] px-5 py-2.5 text-xs tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#E5C97A] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#C6A45C]/20"
            >
              View Inventory
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block h-px w-6 bg-[#E5E5E5] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#E5E5E5] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#E5E5E5] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0B0B0D]/98 backdrop-blur-xl border-t border-[#C6A45C]/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`text-left text-sm tracking-widest uppercase font-['Inter'] ${
                currentPage === link.id ? "text-[#C6A45C]" : "text-[#A8A8A8]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+2348012345678"
            className="text-[#C6A45C] text-sm font-['Inter'] mt-2"
          >
            +234 801 234 5678
          </a>
        </div>
      </div>
    </nav>
  );
}
