import { useState, useEffect } from "react";

export function Contact() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <div className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=50')" }} />
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">Reach Out</p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#E5E5E5] mb-4">
            Contact Us
          </h1>
          <p className="text-[#A8A8A8] font-['Inter'] text-base max-w-lg">
            We'd love to hear from you. Our team typically responds within 2 hours during business hours.
          </p>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 py-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">Our Details</p>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#E5E5E5] mb-4">
                Let's Talk
              </h2>
              <div className="w-10 h-px bg-[#C6A45C] mb-6" />
              <p className="text-[#A8A8A8] text-sm font-['Inter'] leading-relaxed">
                Visit us at our Lekki Phase 1 showroom or reach us through any of the channels below. Private viewings are available by appointment.
              </p>
            </div>

            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Showroom Address",
                value: "12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
                link: null,
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: "Phone (Click to Call)",
                value: "+234 801 234 5678",
                link: "tel:+2348012345678",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "+234 801 234 5678",
                link: "https://wa.me/2348012345678",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "hello@lekkiluxurycars.com",
                link: "mailto:hello@lekkiluxurycars.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Business Hours",
                value: "Mon – Sat: 9:00 AM – 7:00 PM",
                link: null,
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-[#141417] border border-white/5 hover:border-[#C6A45C]/20 transition-colors duration-200">
                <div className="text-[#C6A45C] flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-[#A8A8A8] text-[10px] uppercase tracking-widest font-['Inter'] mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-[#E5E5E5] text-sm font-['Inter'] hover:text-[#C6A45C] transition-colors duration-200">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#E5E5E5] text-sm font-['Inter']">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2348012345678?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20vehicles."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 text-sm tracking-widest uppercase font-semibold font-['Inter'] hover:bg-[#1ea952] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#141417] border border-[#C6A45C]/20 p-16 text-center h-full flex flex-col items-center justify-center animate-[fadeInUp_0.5s_ease_forwards]">
                <div className="w-16 h-16 border border-[#C6A45C] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#C6A45C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#E5E5E5] mb-4">Message Sent</h3>
                <p className="text-[#A8A8A8] font-['Inter'] text-sm mb-2">
                  Thank you, <span className="text-[#E5E5E5]">{form.name}</span>. We've received your message and will respond within 2 hours.
                </p>
                <p className="text-[#A8A8A8] font-['Inter'] text-xs mb-8">A confirmation has been sent to {form.email}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",subject:"",message:"" }); }}
                  className="border border-[#C6A45C] text-[#C6A45C] px-8 py-3 text-sm tracking-widest uppercase font-['Inter'] hover:bg-[#C6A45C] hover:text-[#0B0B0D] transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#141417] border border-white/5 p-8 md:p-10 h-full">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#E5E5E5] mb-2">Send a Message</h3>
                <p className="text-[#A8A8A8] text-sm font-['Inter'] mb-8">We reply within 2 business hours.</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="+234 801 234 5678" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="your@email.com" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required className={inputClass + " cursor-pointer"}>
                      <option value="">Select a subject</option>
                      <option>Vehicle Inquiry</option>
                      <option>Schedule a Viewing</option>
                      <option>Financing Inquiry</option>
                      <option>Sell My Car</option>
                      <option>General Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can assist you..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full bg-[#C6A45C] text-[#0B0B0D] py-5 text-sm tracking-[0.2em] uppercase font-bold font-['Inter'] overflow-hidden hover:shadow-[0_0_40px_rgba(198,164,92,0.3)] transition-all duration-500"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-[#E5C97A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </button>

                  <p className="text-center text-[#A8A8A8] text-xs font-['Inter']">
                    We respect your privacy. Your details will never be shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Map Embed */}
        <div>
          <p className="text-[#C6A45C] text-xs tracking-[0.4em] uppercase font-['Inter'] mb-4">Find Us</p>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#E5E5E5] mb-6">Our Showroom</h2>
          <div className="relative border border-[#C6A45C]/10 overflow-hidden h-80 bg-[#141417]">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7290073888!2d3.4593!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92f%3A0xb57ef1bc5b1c7e09!2sAdmiralty%20Way%2C%20Lekki%20Phase%20I%2C%20Lagos%20106104%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lekki Luxury Cars Location"
            />
            {/* Map overlay badge */}
            <div className="absolute bottom-4 left-4 bg-[#0B0B0D]/90 backdrop-blur-sm border border-[#C6A45C]/20 px-4 py-3">
              <p className="text-[#C6A45C] text-xs font-['Inter'] font-semibold tracking-wide">Lekki Luxury Cars</p>
              <p className="text-[#A8A8A8] text-[10px] font-['Inter']">12 Admiralty Way, Lekki Phase 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
