import { useState, useEffect } from "react";

interface SellProps {
  onNavigate: (page: string) => void;
}

export function Sell({ onNavigate }: SellProps) {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", brand: "", model: "", year: "", mileage: "", color: "", condition: "", price: "", description: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setFiles(names);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#0B0B0D] border border-white/10 text-[#E5E5E5] px-4 py-3.5 text-sm font-['Inter'] focus:border-[#C6A45C] focus:outline-none transition-colors duration-200 placeholder:text-[#A8A8A8]/40";
  const labelClass = "block text-[#A8A8A8] text-[10px] tracking-[0.3em] uppercase font-['Inter'] mb-2";

  return (
    <div className="bg-[#0B0B0D] min-h-screen pt-20 pb-24 md:pb-8">
      {/* Header */}
      <div className="relative py-20 bg-[#141417] border-b border-[#C6A45C]/10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=50')" }} />
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">Premium Car Acquisition</p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#E5E5E5] mb-4">
            Sell Your Vehicle
          </h1>
          <p className="text-[#A8A8A8] font-['Inter'] text-base max-w-xl">
            Get the best value for your luxury vehicle. We offer fair, transparent pricing and fast payment — no games, no delays.
          </p>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 py-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — Why Sell With Us */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">Why Choose Us</p>
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#E5E5E5] mb-4">
                  The Premium Way to Sell
                </h2>
                <div className="w-10 h-px bg-[#C6A45C] mb-6" />
              </div>

              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Best Market Price",
                  desc: "We use live market data to offer you the highest fair value. No low-ball offers.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Fast Process",
                  desc: "Valuation within 24 hours. Payment within 48 hours of agreement. No delays.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Fully Discreet",
                  desc: "Total confidentiality. Your transaction stays private. Trusted by executives and VIPs.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                  title: "Instant Bank Transfer",
                  desc: "Payment directly to your account. No cash handling. Fully documented.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-white/5 hover:border-[#C6A45C]/20 transition-colors duration-200 bg-[#141417]">
                  <div className="text-[#C6A45C] flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-['Inter'] text-sm font-semibold text-[#E5E5E5] mb-1">{item.title}</h4>
                    <p className="text-[#A8A8A8] text-xs font-['Inter'] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Contact alternative */}
              <div className="bg-[#141417] border border-[#C6A45C]/15 p-6">
                <p className="text-[#E5E5E5] text-sm font-semibold font-['Inter'] mb-2">Prefer to call?</p>
                <p className="text-[#A8A8A8] text-xs font-['Inter'] mb-4">Our acquisition team is standing by.</p>
                <a
                  href="tel:+2348012345678"
                  className="flex items-center gap-2 text-[#C6A45C] font-['Inter'] text-sm font-semibold hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 801 234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-[#141417] border border-[#C6A45C]/20 p-16 text-center animate-[fadeInUp_0.5s_ease_forwards]">
                <div className="w-16 h-16 border border-[#C6A45C] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#C6A45C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#E5E5E5] mb-4">Submission Received</h3>
                <p className="text-[#A8A8A8] font-['Inter'] text-sm mb-2">
                  Thank you, <span className="text-[#E5E5E5]">{form.name}</span>. Our acquisition team will review your submission and contact you within 24 hours.
                </p>
                <p className="text-[#A8A8A8] font-['Inter'] text-xs mb-8">
                  Reference: LLC-{Date.now().toString().slice(-6)}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",brand:"",model:"",year:"",mileage:"",color:"",condition:"",price:"",description:"" }); setFiles([]); }}
                    className="border border-[#C6A45C] text-[#C6A45C] px-8 py-3 text-sm tracking-widest uppercase font-['Inter'] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-300"
                  >
                    Submit Another
                  </button>
                  <button
                    onClick={() => onNavigate("home")}
                    className="border border-white/10 text-[#E5E5E5] px-8 py-3 text-sm tracking-widest uppercase font-['Inter'] hover:border-[#C6A45C] hover:text-[#C6A45C] transition-all duration-300"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#141417] border border-white/5 p-8 md:p-10">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#E5E5E5] mb-2">Vehicle Submission Form</h3>
                <p className="text-[#A8A8A8] text-sm font-['Inter'] mb-8">All fields are required for a complete valuation.</p>

                {/* Personal Info */}
                <div className="mb-8">
                  <p className="text-[#C6A45C] text-[10px] tracking-[0.4em] uppercase font-['Inter'] mb-4 pb-2 border-b border-[#C6A45C]/10">
                    Your Information
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="e.g. Emeka Okafor" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="+234 801 234 5678" className={inputClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Email Address *</label>
                      <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="mb-8">
                  <p className="text-[#C6A45C] text-[10px] tracking-[0.4em] uppercase font-['Inter'] mb-4 pb-2 border-b border-[#C6A45C]/10">
                    Vehicle Details
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Brand *</label>
                      <select name="brand" value={form.brand} onChange={handleChange} required className={inputClass + " cursor-pointer"}>
                        <option value="">Select Brand</option>
                        {["Mercedes-Benz","BMW","Porsche","Land Rover","Lexus","Toyota","Audi","Bentley","Ferrari","Lamborghini","Rolls-Royce","Other"].map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Model *</label>
                      <input name="model" value={form.model} onChange={handleChange} required type="text" placeholder="e.g. G63 AMG" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Year *</label>
                      <select name="year" value={form.year} onChange={handleChange} required className={inputClass + " cursor-pointer"}>
                        <option value="">Select Year</option>
                        {Array.from({length: 10}, (_, i) => 2024 - i).map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Mileage *</label>
                      <input name="mileage" value={form.mileage} onChange={handleChange} required type="text" placeholder="e.g. 25,000 km" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Color *</label>
                      <input name="color" value={form.color} onChange={handleChange} required type="text" placeholder="e.g. Obsidian Black" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Condition *</label>
                      <select name="condition" value={form.condition} onChange={handleChange} required className={inputClass + " cursor-pointer"}>
                        <option value="">Select Condition</option>
                        <option>Brand New</option>
                        <option>Tokunbo (Foreign Used)</option>
                        <option>Nigerian Used</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Your Asking Price (₦) *</label>
                      <input name="price" value={form.price} onChange={handleChange} required type="text" placeholder="e.g. ₦85,000,000" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-[#C6A45C] text-[10px] tracking-[0.4em] uppercase font-['Inter'] mb-4 pb-2 border-b border-[#C6A45C]/10">
                    Additional Information
                  </p>
                  <label className={labelClass}>Vehicle Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about the vehicle — options, service history, accident history, modifications, etc."
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Photo Upload */}
                <div className="mb-8">
                  <p className="text-[#C6A45C] text-[10px] tracking-[0.4em] uppercase font-['Inter'] mb-4 pb-2 border-b border-[#C6A45C]/10">
                    Vehicle Photos
                  </p>
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-[#C6A45C]/20 hover:border-[#C6A45C]/50 transition-colors duration-300 p-10 text-center bg-[#0B0B0D]/40">
                      <div className="text-[#C6A45C] mb-3">
                        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-[#E5E5E5] text-sm font-['Inter'] mb-1">
                        {files.length > 0 ? `${files.length} photo(s) selected` : "Upload Vehicle Photos"}
                      </p>
                      <p className="text-[#A8A8A8] text-xs font-['Inter']">
                        {files.length > 0 ? files.slice(0, 3).join(", ") + (files.length > 3 ? ` +${files.length - 3} more` : "") : "JPG, PNG up to 10MB each · Min 4 photos recommended"}
                      </p>
                    </div>
                    <input type="file" multiple accept="image/*" onChange={handleFileChange} className="sr-only" />
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group relative w-full bg-[#C6A45C] text-[#0B0B0D] py-5 text-sm tracking-[0.2em] uppercase font-bold font-['Inter'] overflow-hidden hover:shadow-[0_0_40px_rgba(198,164,92,0.3)] transition-all duration-500"
                >
                  <span className="relative z-10">Submit for Valuation</span>
                  <div className="absolute inset-0 bg-[#E5C97A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </button>
                <p className="text-center text-[#A8A8A8] text-xs font-['Inter'] mt-4">
                  By submitting, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
