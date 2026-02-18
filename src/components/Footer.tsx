interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B0B0D] border-t border-[#C6A45C]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-['Playfair_Display'] text-2xl font-bold text-[#E5E5E5] tracking-wider">
                LEKKI LUXURY
              </p>
              <p className="text-[10px] text-[#C6A45C] tracking-[0.4em] uppercase font-['Inter'] mt-0.5">
                Cars
              </p>
            </div>
            <p className="text-[#A8A8A8] text-sm leading-relaxed font-['Inter'] mb-6">
              Lagos's most trusted destination for ultra-premium vehicles. We curate only the finest automobiles for discerning clients.
            </p>
            <div className="flex gap-4">
              {["IG", "FB", "TW", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-[#C6A45C]/30 flex items-center justify-center text-xs text-[#C6A45C] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-300 font-['Inter'] font-semibold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#E5E5E5] font-semibold mb-6 text-lg">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", page: "home" },
                { label: "Inventory", page: "inventory" },
                { label: "Sell Your Car", page: "sell" },
                { label: "Contact Us", page: "contact" },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-[#A8A8A8] hover:text-[#C6A45C] text-sm font-['Inter'] transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Inventory */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#E5E5E5] font-semibold mb-6 text-lg">
              Our Fleet
            </h4>
            <ul className="space-y-3">
              {[
                "Mercedes-AMG G63",
                "Range Rover Autobiography",
                "BMW X7 M60i",
                "Lexus LX 600",
                "Porsche Cayenne",
                "Land Cruiser 300",
              ].map((car) => (
                <li key={car}>
                  <button
                    onClick={() => onNavigate("inventory")}
                    className="text-[#A8A8A8] hover:text-[#C6A45C] text-sm font-['Inter'] transition-colors duration-300 text-left tracking-wide"
                  >
                    {car}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#E5E5E5] font-semibold mb-6 text-lg">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#C6A45C] mt-0.5">📍</span>
                <span className="text-[#A8A8A8] text-sm font-['Inter'] leading-relaxed">
                  12 Admiralty Way, Lekki Phase 1,<br />Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C6A45C]">📞</span>
                <a
                  href="tel:08147738614"
                  className="text-[#A8A8A8] hover:text-[#C6A45C] text-sm font-['Inter'] transition-colors duration-300"
                >
                  +234 814 7738 614
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C6A45C]">✉</span>
                <a
                  href="mailto:hello@lekkilvuxurycars.com"
                  className="text-[#A8A8A8] hover:text-[#C6A45C] text-sm font-['Inter'] transition-colors duration-300"
                >
                  hello@lekkiluxurycars.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C6A45C]">🕐</span>
                <span className="text-[#A8A8A8] text-sm font-['Inter']">
                  Mon–Sat: 9AM – 7PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C6A45C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A8A8A8] text-xs font-['Inter'] tracking-wide">
            © 2026 Lekki Luxury Cars. All rights reserved. Where Luxury Meets Trust.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#A8A8A8] hover:text-[#C6A45C] text-xs font-['Inter'] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
