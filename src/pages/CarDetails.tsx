import { useState, useEffect } from "react";
import { cars, getBadgeColor } from "../data/cars";

interface CarDetailsProps {
  carId: number;
  onNavigate: (page: string, carId?: number) => void;
}

export function CarDetails({ carId, onNavigate }: CarDetailsProps) {
  const car = cars.find((c) => c.id === carId) || cars[0];
  const related = cars.filter((c) => c.id !== car.id).slice(0, 3);
  const [activeImage, setActiveImage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showFinancing, setShowFinancing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [carId]);

  return (
    <div className="bg-[#0B0B0D] min-h-screen pt-20 pb-24 md:pb-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-xs font-['Inter'] text-[#A8A8A8]">
          <button onClick={() => onNavigate("home")} className="hover:text-[#C6A45C] transition-colors">Home</button>
          <span className="text-[#C6A45C]">›</span>
          <button onClick={() => onNavigate("inventory")} className="hover:text-[#C6A45C] transition-colors">Inventory</button>
          <span className="text-[#C6A45C]">›</span>
          <span className="text-[#E5E5E5]">{car.name}</span>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left — Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative h-80 md:h-[500px] overflow-hidden bg-[#141417] mb-4">
              <img
                src={car.images[activeImage]}
                alt={car.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              {car.badge && (
                <span className={`absolute top-4 left-4 px-3 py-1.5 text-[9px] tracking-widest uppercase font-semibold font-['Inter'] ${getBadgeColor(car.badge)}`}>
                  {car.badge}
                </span>
              )}
              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-[#0B0B0D]/80 backdrop-blur-sm px-3 py-1.5 text-xs text-[#A8A8A8] font-['Inter']">
                {activeImage + 1} / {car.images.length}
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-3 gap-3">
              {car.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === i ? "border-[#C6A45C]" : "border-transparent hover:border-[#C6A45C]/40"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {activeImage !== i && <div className="absolute inset-0 bg-black/30" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <p className="text-[#A8A8A8] text-xs tracking-[0.3em] uppercase font-['Inter']">
                {car.year} · {car.brand} · {car.condition}
              </p>
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4 leading-tight">
              {car.name}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <p className="font-['Playfair_Display'] text-3xl font-bold text-[#C6A45C]">
                {car.priceDisplay}
              </p>
              <span className="bg-[#C6A45C]/10 border border-[#C6A45C]/20 text-[#C6A45C] text-xs px-3 py-1 font-['Inter'] tracking-widest">
                {car.condition}
              </span>
            </div>

            <p className="text-[#A8A8A8] text-sm leading-relaxed font-['Inter'] mb-8 border-l-2 border-[#C6A45C] pl-4">
              {car.description}
            </p>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Horsepower", value: car.specs.horsepower, icon: "⚡" },
                { label: "Acceleration", value: car.specs.acceleration.split(" ")[0], icon: "🏁" },
                { label: "Top Speed", value: car.specs.topSpeed, icon: "💨" },
                { label: "Drivetrain", value: car.specs.drivetrain, icon: "⚙️" },
                { label: "Seats", value: `${car.specs.seats} Seats`, icon: "🪑" },
                { label: "Fuel", value: car.specs.fuelType, icon: "⛽" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-[#141417] border border-white/5 p-3 hover:border-[#C6A45C]/20 transition-colors duration-200">
                  <span className="text-lg">{s.icon}</span>
                  <div>
                    <p className="text-[#A8A8A8] text-[9px] uppercase tracking-widest font-['Inter']">{s.label}</p>
                    <p className="text-[#E5E5E5] text-xs font-semibold font-['Inter'] mt-0.5">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={`https://wa.me/2348012345678?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(car.name)}%20priced%20at%20${encodeURIComponent(car.priceDisplay)}.%20Please%20provide%20more%20information.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#1ea952] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire on WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowFinancing(true)}
                  className="border border-[#C6A45C] text-[#C6A45C] py-4 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-300"
                >
                  Finance This
                </button>
                <a
                  href="tel:+2348012345678"
                  className="border border-white/10 text-[#E5E5E5] py-4 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:border-[#C6A45C] hover:text-[#C6A45C] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { icon: "🛡️", label: "Verified Vehicle" },
                { icon: "📋", label: "Full History" },
                { icon: "🚚", label: "Lagos Delivery" },
              ].map((t) => (
                <div key={t.label} className="bg-[#141417]/60 border border-white/5 p-3">
                  <div className="text-lg mb-1">{t.icon}</div>
                  <p className="text-[#A8A8A8] text-[9px] font-['Inter'] tracking-wide">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Specs Table */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-3">Technical</p>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#E5E5E5]">Full Specifications</h2>
            <div className="w-12 h-px bg-[#C6A45C] mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-[#C6A45C]/5">
            {[
              { label: "Make", value: car.brand },
              { label: "Model", value: car.name },
              { label: "Year", value: car.year.toString() },
              { label: "Condition", value: car.condition },
              { label: "Engine", value: car.engine },
              { label: "Transmission", value: car.transmission },
              { label: "Horsepower", value: car.specs.horsepower },
              { label: "Torque", value: car.specs.torque },
              { label: "0–100 km/h", value: car.specs.acceleration },
              { label: "Top Speed", value: car.specs.topSpeed },
              { label: "Fuel Type", value: car.specs.fuelType },
              { label: "Drivetrain", value: car.specs.drivetrain },
              { label: "Seats", value: car.specs.seats },
              { label: "Mileage", value: car.mileage },
              { label: "Exterior Color", value: car.color },
              { label: "Category", value: car.category },
            ].map((row) => (
              <div key={row.label} className="bg-[#141417] flex items-center px-6 py-4 hover:bg-[#141417]/80 transition-colors duration-200">
                <p className="text-[#A8A8A8] text-xs font-['Inter'] tracking-widest uppercase w-40 flex-shrink-0">{row.label}</p>
                <p className="text-[#E5E5E5] text-sm font-['Inter']">{row.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Vehicles */}
        <div>
          <div className="mb-10">
            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-3">Similar Vehicles</p>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#E5E5E5]">You May Also Like</h2>
            <div className="w-12 h-px bg-[#C6A45C] mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((relCar) => (
              <div
                key={relCar.id}
                className="group bg-[#141417] border border-white/5 overflow-hidden hover:border-[#C6A45C]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C6A45C]/5 hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate("car-details", relCar.id)}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={relCar.images[0]}
                    alt={relCar.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[#A8A8A8] text-xs font-['Inter'] mb-1">{relCar.year} · {relCar.condition}</p>
                  <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#E5E5E5] mb-3 group-hover:text-[#C6A45C] transition-colors duration-300">
                    {relCar.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="font-['Playfair_Display'] text-lg font-bold text-[#C6A45C]">{relCar.priceDisplay}</p>
                    <span className="text-[#C6A45C] text-xs tracking-widest font-['Inter'] group-hover:translate-x-1 transition-transform duration-300">View →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financing Modal */}
      {showFinancing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowFinancing(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-[#141417] border border-[#C6A45C]/20 max-w-lg w-full p-8 z-10 animate-[fadeInUp_0.3s_ease_forwards]">
            <button onClick={() => setShowFinancing(false)} className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center text-[#A8A8A8] hover:text-[#C6A45C] hover:border-[#C6A45C] transition-all">✕</button>
            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-3">Financing</p>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#E5E5E5] mb-6">Finance This Vehicle</h3>
            <p className="text-[#A8A8A8] text-sm font-['Inter'] leading-relaxed mb-6">
              We partner with 12+ leading Nigerian banks to offer competitive financing rates. Fill in your details and a financing advisor will contact you within 2 hours.
            </p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowFinancing(false); }}>
              <input type="text" placeholder="Full Name" className="w-full bg-[#0B0B0D] border border-white/10 text-[#E5E5E5] px-4 py-3 text-sm font-['Inter'] focus:border-[#C6A45C] outline-none transition-colors placeholder:text-[#A8A8A8]/40" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-[#0B0B0D] border border-white/10 text-[#E5E5E5] px-4 py-3 text-sm font-['Inter'] focus:border-[#C6A45C] outline-none transition-colors placeholder:text-[#A8A8A8]/40" />
              <input type="email" placeholder="Email Address" className="w-full bg-[#0B0B0D] border border-white/10 text-[#E5E5E5] px-4 py-3 text-sm font-['Inter'] focus:border-[#C6A45C] outline-none transition-colors placeholder:text-[#A8A8A8]/40" />
              <select className="w-full bg-[#0B0B0D] border border-white/10 text-[#A8A8A8] px-4 py-3 text-sm font-['Inter'] focus:border-[#C6A45C] outline-none transition-colors">
                <option>Preferred Bank</option>
                <option>GTBank</option>
                <option>Zenith Bank</option>
                <option>First Bank</option>
                <option>Access Bank</option>
                <option>UBA</option>
              </select>
              <div className="bg-[#0B0B0D]/60 border border-[#C6A45C]/10 p-4">
                <p className="text-[#A8A8A8] text-xs font-['Inter']">Vehicle: <span className="text-[#E5E5E5]">{car.name}</span></p>
                <p className="text-[#A8A8A8] text-xs font-['Inter'] mt-1">Price: <span className="text-[#C6A45C] font-semibold">{car.priceDisplay}</span></p>
              </div>
              <button type="submit" className="w-full bg-[#C6A45C] text-[#0B0B0D] py-4 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#E5C97A] transition-colors duration-300">
                Submit Financing Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp on car details */}
      <a
        href={`https://wa.me/2348012345678?text=I'm%20interested%20in%20the%20${encodeURIComponent(car.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-24 md:bottom-8 z-40 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:block text-xs font-['Inter'] font-semibold tracking-widest uppercase">Inquire on WhatsApp</span>
      </a>
    </div>
  );
}
