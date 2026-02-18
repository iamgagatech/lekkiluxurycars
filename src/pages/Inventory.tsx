import { useState, useEffect, useRef } from "react";
import { cars, getBadgeColor, Car } from "../data/cars";

interface InventoryProps {
  onNavigate: (page: string, carId?: number) => void;
}

function QuickViewModal({ car, onClose, onNavigate }: { car: Car; onClose: () => void; onNavigate: (page: string, carId?: number) => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#141417] border border-[#C6A45C]/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 animate-[fadeInUp_0.3s_ease_forwards]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 border border-white/20 flex items-center justify-center text-[#A8A8A8] hover:text-[#C6A45C] hover:border-[#C6A45C] transition-all duration-200"
        >
          ✕
        </button>

        {/* Image */}
        <div className="h-64 overflow-hidden">
          <img src={car.images[0]} alt={car.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141417]/60 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[#A8A8A8] text-xs tracking-widest uppercase font-['Inter'] mb-1">
                {car.year} · {car.condition} · {car.brand}
              </p>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#E5E5E5]">
                {car.name}
              </h3>
            </div>
            <p className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A45C]">
              {car.priceDisplay}
            </p>
          </div>

          <p className="text-[#A8A8A8] text-sm font-['Inter'] leading-relaxed mb-6">
            {car.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Power", value: car.specs.horsepower },
              { label: "0-100", value: car.specs.acceleration.split(" ")[0] },
              { label: "Seats", value: car.specs.seats },
              { label: "Drive", value: car.specs.drivetrain.split(" ")[0] },
            ].map((s) => (
              <div key={s.label} className="bg-[#0B0B0D] border border-white/5 p-3 text-center">
                <p className="text-[#A8A8A8] text-[9px] uppercase tracking-widest font-['Inter']">{s.label}</p>
                <p className="text-[#E5E5E5] text-sm font-semibold font-['Inter'] mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => { onNavigate("car-details", car.id); onClose(); }}
              className="flex-1 bg-[#C6A45C] text-[#0B0B0D] py-3 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#E5C97A] transition-colors duration-300"
            >
              Full Details
            </button>
            <a
              href={`https://wa.me/2348012345678?text=I'm%20interested%20in%20the%20${encodeURIComponent(car.name)}%20(${car.priceDisplay})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-[#25D366] text-[#25D366] py-3 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Inquire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Inventory({ onNavigate }: InventoryProps) {
  const [filterBrand, setFilterBrand] = useState("All");
  const [filterCondition, setFilterCondition] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [quickViewCar, setQuickViewCar] = useState<Car | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const brands = ["All", ...Array.from(new Set(cars.map((c) => c.brand)))];
  const conditions = ["All", "Brand New", "Tokunbo"];
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Under ₦150M", min: 0, max: 150000000 },
    { label: "₦150M – ₦200M", min: 150000000, max: 200000000 },
    { label: "Above ₦200M", min: 200000000, max: Infinity },
  ];

  const selectedRange = priceRanges.find((r) => r.label === filterPrice) || priceRanges[0];

  const filtered = cars.filter((c) => {
    const brandOk = filterBrand === "All" || c.brand === filterBrand;
    const condOk = filterCondition === "All" || c.condition === filterCondition;
    const priceOk = c.price >= selectedRange.min && c.price <= selectedRange.max;
    return brandOk && condOk && priceOk;
  });

  return (
    <div className="bg-[#0B0B0D] min-h-screen pt-20 pb-24 md:pb-8">
      {/* Header */}
      <div className="relative py-20 bg-[#141417] border-b border-[#C6A45C]/10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=50')" }} />
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">
            Our Collection
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#E5E5E5] mb-4">
            Vehicle Inventory
          </h1>
          <p className="text-[#A8A8A8] font-['Inter'] text-base">
            {cars.length} Premium Vehicles Available · Lekki Phase 1, Lagos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12" ref={ref}>
        {/* Filters */}
        <div className={`bg-[#141417] border border-[#C6A45C]/10 p-6 mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Brand Filter */}
            <div>
              <label className="text-[#A8A8A8] text-[10px] tracking-widest uppercase font-['Inter'] block mb-2">
                Brand
              </label>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setFilterBrand(b)}
                    className={`px-3 py-1.5 text-xs tracking-wide font-['Inter'] border transition-all duration-200 ${
                      filterBrand === b
                        ? "bg-[#C6A45C] text-[#0B0B0D] border-[#C6A45C]"
                        : "border-white/10 text-[#A8A8A8] hover:border-[#C6A45C]/50 hover:text-[#E5E5E5]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div>
              <label className="text-[#A8A8A8] text-[10px] tracking-widest uppercase font-['Inter'] block mb-2">
                Condition
              </label>
              <div className="flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilterCondition(c)}
                    className={`px-3 py-1.5 text-xs tracking-wide font-['Inter'] border transition-all duration-200 ${
                      filterCondition === c
                        ? "bg-[#C6A45C] text-[#0B0B0D] border-[#C6A45C]"
                        : "border-white/10 text-[#A8A8A8] hover:border-[#C6A45C]/50 hover:text-[#E5E5E5]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <label className="text-[#A8A8A8] text-[10px] tracking-widest uppercase font-['Inter'] block mb-2">
                Price Range
              </label>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setFilterPrice(r.label)}
                    className={`px-3 py-1.5 text-xs tracking-wide font-['Inter'] border transition-all duration-200 ${
                      filterPrice === r.label
                        ? "bg-[#C6A45C] text-[#0B0B0D] border-[#C6A45C]"
                        : "border-white/10 text-[#A8A8A8] hover:border-[#C6A45C]/50 hover:text-[#E5E5E5]"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-[#A8A8A8] text-sm font-['Inter']">
              Showing <span className="text-[#C6A45C] font-semibold">{filtered.length}</span> of {cars.length} vehicles
            </p>
            <button
              onClick={() => { setFilterBrand("All"); setFilterCondition("All"); setFilterPrice("All"); }}
              className="text-[#A8A8A8] hover:text-[#C6A45C] text-xs font-['Inter'] tracking-wide transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Car Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-['Playfair_Display'] text-2xl text-[#E5E5E5] mb-3">No vehicles found</p>
            <p className="text-[#A8A8A8] font-['Inter'] text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car, i) => (
              <div
                key={car.id}
                className={`group relative bg-[#141417] border border-white/5 overflow-hidden hover:border-[#C6A45C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C6A45C]/5 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent opacity-60" />

                  {car.badge && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 text-[9px] tracking-widest uppercase font-semibold font-['Inter'] ${getBadgeColor(car.badge)}`}>
                      {car.badge}
                    </span>
                  )}

                  {/* Quick View overlay */}
                  <div className="absolute inset-0 bg-[#0B0B0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setQuickViewCar(car); }}
                      className="bg-[#C6A45C] text-[#0B0B0D] px-5 py-2.5 text-xs tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#E5C97A] transition-colors duration-200 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-[#A8A8A8] text-xs tracking-widest uppercase font-['Inter'] mb-1">
                      {car.year} · {car.condition}
                    </p>
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#E5E5E5] group-hover:text-[#C6A45C] transition-colors duration-300">
                      {car.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: "Engine", value: car.engine },
                      { label: "Mileage", value: car.mileage },
                      { label: "Power", value: car.specs.horsepower },
                      { label: "Drive", value: car.specs.drivetrain.split(" ")[0] },
                    ].map((spec) => (
                      <div key={spec.label} className="bg-[#0B0B0D]/60 px-3 py-2">
                        <p className="text-[#A8A8A8] text-[9px] uppercase tracking-widest font-['Inter']">{spec.label}</p>
                        <p className="text-[#E5E5E5] text-xs font-['Inter'] mt-0.5 truncate">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <p className="font-['Playfair_Display'] text-xl font-bold text-[#C6A45C]">
                      {car.priceDisplay}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onNavigate("car-details", car.id)}
                        className="text-[#C6A45C] border border-[#C6A45C]/30 px-3 py-1.5 text-xs tracking-widest uppercase font-['Inter'] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-200"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewCar && (
        <QuickViewModal
          car={quickViewCar}
          onClose={() => setQuickViewCar(null)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
