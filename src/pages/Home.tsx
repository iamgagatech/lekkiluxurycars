import { useEffect, useRef, useState } from "react";
import { cars, getBadgeColor } from "../data/cars";

interface HomeProps {
  onNavigate: (page: string, carId?: number) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const testimonials = [
  {
    name: "Chukwuemeka Obi",
    title: "CEO, Apex Capital Group",
    text: "Lekki Luxury Cars redefined my expectations. The attention to detail, from vehicle selection to post-purchase support, is unmatched in Lagos. My G63 arrived immaculate.",
    rating: 5,
  },
  {
    name: "Adaeze Nwosu",
    title: "Executive Director, First Alliance Bank",
    text: "I've purchased three vehicles from them. Every transaction has been seamless. They understand what discerning clients truly need — discretion, quality, and speed.",
    rating: 5,
  },
  {
    name: "Babatunde Adeyemi",
    title: "Founder, Zenith Properties",
    text: "My Range Rover Autobiography was sourced and delivered within 10 days. The team's professionalism and transparency set them apart from every other dealership I've dealt with.",
    rating: 5,
  },
];

export function Home({ onNavigate }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  // Parallax on hero
  useEffect(() => {
    const handleScroll = () => setParallaxY(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredReveal = useReveal();
  const whyReveal = useReveal();
  const ownerReveal = useReveal();
  const ctaReveal = useReveal();
  const testimonialReveal = useReveal();

  return (
    <div className="bg-[#0B0B0D] min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background gradient + image */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-[#0B0B0D]/50 to-[#0B0B0D]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/60 via-transparent to-[#0B0B0D]/40" />
        </div>

        {/* Gold grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E')" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#C6A45C]/20 px-4 py-2 mb-8 rounded-sm">
            <span className="text-[#C6A45C] text-sm">★★★★★</span>
            <span className="text-[#A8A8A8] text-xs font-['Inter'] tracking-widest">4.9 Google Rating · Trusted by 500+ Clients</span>
          </div>

          <h1
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#E5E5E5] leading-[1.05] tracking-tight mb-6 animate-[fadeInUp_1s_ease_forwards]"
          >
            Own the Moment.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A45C] via-[#E5C97A] to-[#C6A45C]">
              Drive the Standard.
            </span>
          </h1>

          <p className="text-[#A8A8A8] text-lg md:text-xl font-['Inter'] font-light tracking-wide mb-10 max-w-xl mx-auto">
            Where Luxury Meets Trust — Lagos's premier destination for ultra-premium automobiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => onNavigate("inventory")}
              className="group relative bg-[#C6A45C] text-[#0B0B0D] px-8 py-4 text-sm tracking-[0.2em] uppercase font-semibold font-['Inter'] overflow-hidden hover:shadow-[0_0_40px_rgba(198,164,92,0.4)] transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">View Inventory</span>
              <div className="absolute inset-0 bg-[#E5C97A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="group border border-[#E5E5E5]/30 text-[#E5E5E5] px-8 py-4 text-sm tracking-[0.2em] uppercase font-['Inter'] hover:border-[#C6A45C] hover:text-[#C6A45C] transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Speak to an Advisor
            </button>
          </div>

          <p className="text-[#A8A8A8] text-xs font-['Inter'] tracking-widest">
            Private viewings available by appointment.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-[#C6A45C] to-transparent" />
          <span className="text-[#C6A45C] text-[9px] tracking-[0.4em] uppercase font-['Inter']">Scroll</span>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-[#141417] border-y border-[#C6A45C]/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Vehicles Sold" },
              { value: "8 Yrs", label: "In Business" },
              { value: "₦50B+", label: "Total Transactions" },
              { value: "4.9★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#C6A45C] mb-1">
                  {s.value}
                </p>
                <p className="text-[#A8A8A8] text-xs tracking-widest uppercase font-['Inter']">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED INVENTORY ─── */}
      <section className="py-24 px-6 max-w-7xl mx-auto" ref={featuredReveal.ref}>
        <div
          className={`transition-all duration-700 ${featuredReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">
              Curated Collection
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              Featured Vehicles
            </h2>
            <div className="w-16 h-px bg-[#C6A45C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, i) => (
              <div
                key={car.id}
                className={`group relative bg-[#141417] border border-white/5 overflow-hidden cursor-pointer hover:border-[#C6A45C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C6A45C]/5 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => onNavigate("car-details", car.id)}
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
                  <div className="absolute inset-0 bg-[#C6A45C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-[#A8A8A8] text-xs tracking-widest uppercase font-['Inter'] mb-1">
                        {car.year} · {car.condition}
                      </p>
                      <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#E5E5E5] group-hover:text-[#C6A45C] transition-colors duration-300">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: "Engine", value: car.engine },
                      { label: "Mileage", value: car.mileage },
                    ].map((spec) => (
                      <div key={spec.label} className="bg-[#0B0B0D]/60 px-3 py-2 rounded-sm">
                        <p className="text-[#A8A8A8] text-[9px] uppercase tracking-widest font-['Inter']">{spec.label}</p>
                        <p className="text-[#E5E5E5] text-xs font-['Inter'] mt-0.5 truncate">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <p className="font-['Playfair_Display'] text-xl font-bold text-[#C6A45C]">
                      {car.priceDisplay}
                    </p>
                    <span className="text-[#C6A45C] text-xs tracking-widest uppercase font-['Inter'] group-hover:translate-x-1 transition-transform duration-300">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("inventory")}
              className="border border-[#C6A45C] text-[#C6A45C] px-10 py-4 text-sm tracking-[0.2em] uppercase font-['Inter'] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A45C]/20"
            >
              Browse Full Inventory
            </button>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-[#141417] border-y border-[#C6A45C]/10" ref={whyReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${whyReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="text-center mb-16">
            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">
              Our Difference
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              Why Choose Us
            </h2>
            <div className="w-16 h-px bg-[#C6A45C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Verified & Certified",
                desc: "Every vehicle undergoes a rigorous 150-point inspection by certified engineers. Full history reports provided. What you see is exactly what you get.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Flexible Financing",
                desc: "Tailored financing solutions in partnership with leading Nigerian banks. Drive away today with plans designed for high-net-worth clients.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "White-Glove Service",
                desc: "Dedicated relationship managers, nationwide delivery, and post-sale concierge support. Your satisfaction is our legacy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 150}ms` }}
                className={`group p-8 border border-white/5 hover:border-[#C6A45C]/30 bg-[#0B0B0D]/40 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#C6A45C]/5 hover:-translate-y-1 ${whyReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-16 h-16 border border-[#C6A45C]/30 flex items-center justify-center text-[#C6A45C] mb-6 group-hover:bg-[#C6A45C]/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#E5E5E5] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#A8A8A8] text-sm leading-relaxed font-['Inter']">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 max-w-5xl mx-auto" ref={testimonialReveal.ref}>
        <div className={`transition-all duration-700 ${testimonialReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="text-center mb-16">
            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">
              Client Stories
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
              What They Say
            </h2>
            <div className="w-16 h-px bg-[#C6A45C] mx-auto" />
          </div>

          <div className="relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === currentTestimonial
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="bg-[#141417] border border-[#C6A45C]/10 p-10 md:p-14 text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-[#C6A45C] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-[#E5E5E5] text-lg md:text-xl font-['Playfair_Display'] italic leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div className="w-8 h-px bg-[#C6A45C] mx-auto mb-6" />
                  <p className="text-[#E5E5E5] font-semibold font-['Inter'] tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-[#A8A8A8] text-sm font-['Inter'] tracking-widest mt-1">
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentTestimonial ? "w-6 h-1.5 bg-[#C6A45C]" : "w-1.5 h-1.5 bg-[#A8A8A8]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── OWNER CREDIBILITY ─── */}
      <section className="py-24 bg-[#141417] border-y border-[#C6A45C]/10" ref={ownerReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${ownerReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#0B0B0D]/80 backdrop-blur-sm border border-[#C6A45C]/20 p-4">
                    <p className="text-[#C6A45C] text-xs tracking-[0.3em] uppercase font-['Inter'] mb-1">Founder & CEO</p>
                    <p className="text-[#E5E5E5] font-['Playfair_Display'] text-lg font-semibold">Emeka Okafor</p>
                  </div>
                </div>
              </div>
              {/* Gold accent line */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C6A45C]/20 pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#C6A45C]/20 pointer-events-none" />
            </div>

            <div>
              <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-5">
                Our Story
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-6 leading-tight">
                Built on Trust,<br />Driven by Passion
              </h2>
              <div className="w-16 h-px bg-[#C6A45C] mb-8" />
              <p className="text-[#A8A8A8] text-base leading-relaxed font-['Inter'] mb-6">
                Founded in 2016 by Emeka Okafor, Lekki Luxury Cars was born from a simple belief: Nigeria's high-net-worth clients deserve the same world-class automotive experience available in Dubai, London, and New York.
              </p>
              <p className="text-[#A8A8A8] text-base leading-relaxed font-['Inter'] mb-8">
                With over ₦50 billion in completed transactions and a client roster that includes CEOs, senators, and entertainment industry leaders, we have earned the trust of Lagos's most demanding buyers.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Years of Excellence", value: "8+" },
                  { label: "Satisfied Clients", value: "500+" },
                  { label: "Partner Banks", value: "12" },
                  { label: "Brands Available", value: "20+" },
                ].map((s) => (
                  <div key={s.label} className="border border-[#C6A45C]/15 p-4">
                    <p className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A45C]">{s.value}</p>
                    <p className="text-[#A8A8A8] text-xs font-['Inter'] tracking-wide mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate("contact")}
                className="border border-[#C6A45C] text-[#C6A45C] px-8 py-4 text-sm tracking-[0.2em] uppercase font-['Inter'] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-300"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 px-6" ref={ctaReveal.ref}>
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${ctaReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative border border-[#C6A45C]/20 bg-[#141417] p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative corner accents */}
            {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-8 h-8 border-[#C6A45C]`}
                style={{
                  borderTopWidth: i < 2 ? "1px" : "0",
                  borderBottomWidth: i >= 2 ? "1px" : "0",
                  borderLeftWidth: i % 2 === 0 ? "1px" : "0",
                  borderRightWidth: i % 2 === 1 ? "1px" : "0",
                }}
              />
            ))}

            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A45C]/3 rounded-full blur-3xl pointer-events-none" />

            <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-5">
              Ready to Drive?
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-6">
              Your Dream Vehicle<br />Awaits in Lekki
            </h2>
            <p className="text-[#A8A8A8] text-base font-['Inter'] mb-10 max-w-lg mx-auto">
              Schedule a private viewing at our Lekki Phase 1 showroom. Experience luxury, not just read about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate("inventory")}
                className="group relative bg-[#C6A45C] text-[#0B0B0D] px-10 py-4 text-sm tracking-[0.2em] uppercase font-semibold font-['Inter'] overflow-hidden hover:shadow-[0_0_40px_rgba(198,164,92,0.4)] transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Explore Inventory</span>
                <div className="absolute inset-0 bg-[#E5C97A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="border border-[#E5E5E5]/20 text-[#E5E5E5] px-10 py-4 text-sm tracking-[0.2em] uppercase font-['Inter'] hover:border-[#C6A45C] hover:text-[#C6A45C] transition-all duration-300"
              >
                Book a Viewing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
