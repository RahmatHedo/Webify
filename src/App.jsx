import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const PHONE_NUMBER = "6282181963893"; 
const EMAIL_ADDRESS = "hedorahmat@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/webifystudio.id"; 

// Helper untuk link WA dinamis per paket
const getWaLink = (packageName) => {
  const message = `Halo Webify Studio, saya tertarik dengan paket ${packageName}. Bisa minta info lebih lanjut?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

// --- KOMPONEN NAVBAR ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Masalah", href: "#problem" },
    { title: "Harga", href: "#pricing" },
    { title: "Keunggulan", href: "#why-us" },
    { title: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-out font-['Space_Grotesk']
      ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3' : 'bg-[#0F1115] py-5 border-b border-gray-800'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group z-50">
           <img 
             src="/logo.png" 
             alt="Webify Logo" 
             className="w-10 h-10 object-contain transition-transform group-hover:scale-105" 
           />
           <span className={`text-lg font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
             WEBIFY <span className="text-indigo-500">Studio.</span>
           </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
             <a 
               key={idx}
               href={link.href} 
               className={`text-sm font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}
             >
               {link.title}
             </a>
          ))}
          <a 
            href={getWaLink("Konsultasi Umum")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors"
          >
            Konsultasi Gratis
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden focus:outline-none z-50 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>

        {isOpen && (
           <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden">
              {navLinks.map((link, idx) => (
                 <a key={idx} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium text-lg">
                   {link.title}
                 </a>
              ))}
           </div>
        )}
      </div>
    </nav>
  );
};

// --- HERO SECTION ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center font-['Space_Grotesk'] pt-20 md:pt-0 bg-[#0F1115]">
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Website Profesional <br />
              untuk <span className="text-indigo-400">Bisnis Anda.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Tingkatkan kredibilitas dan penjualan dengan desain website yang modern, cepat, dan SEO-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <a href={getWaLink("Hero Section")} className="bg-white text-indigo-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-gray-100 transition-colors">
                Pesan Sekarang
              </a>
            </div>
        </div>
        <div className="hidden md:block relative">
            <div className="bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="rounded-lg opacity-90" alt="Dashboard Mockup" />
            </div>
        </div>
      </div>
    </section>
  );
};

// --- SECTION 2: PROBLEM & SOLUTION ---
const ProblemSolution = () => {
  return (
    <section id="problem" className="py-24 bg-white font-['Space_Grotesk']">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Masalah vs Solusi</h2>
          <p className="text-gray-500">Kenapa bisnis Anda butuh upgrade digital sekarang juga?</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="bg-red-50/50 rounded-3xl p-8 md:p-10 border border-red-100">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Masalah Umum</h3>
             </div>
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <div className="mt-1 min-w-[20px] text-red-500">✕</div>
                 <div><h4 className="font-bold text-gray-900">Tidak Ada di Google</h4><p className="text-sm text-gray-600">Kalah saing dengan kompetitor.</p></div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="mt-1 min-w-[20px] text-red-500">✕</div>
                 <div><h4 className="font-bold text-gray-900">Website Jadul</h4><p className="text-sm text-gray-600">Menurunkan kepercayaan pelanggan.</p></div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="mt-1 min-w-[20px] text-red-500">✕</div>
                 <div><h4 className="font-bold text-gray-900">Takut Website Down</h4><p className="text-sm text-gray-600">Khawatir pelanggan kabur saat website error.</p></div>
               </li>
             </ul>
          </div>
          <div className="bg-[#161b2c] rounded-3xl p-8 md:p-10 border border-gray-700 relative overflow-hidden text-white">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Solusi Kami</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 min-w-[20px] text-green-400">✓</div>
                    <div><h4 className="font-bold text-white">Desain Premium</h4><p className="text-sm text-gray-400">Meningkatkan citra profesional.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 min-w-[20px] text-green-400">✓</div>
                    <div><h4 className="font-bold text-white">SEO & Responsif</h4><p className="text-sm text-gray-400">Mudah ditemukan dan akses cepat.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 min-w-[20px] text-green-400">✓</div>
                    <div><h4 className="font-bold text-white">Garansi 30 Hari</h4><p className="text-sm text-gray-400">Jika website down/error, kami perbaiki GRATIS.</p></div>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SECTION 3: PRICING (PROMO) ---
const Pricing = () => {
    const packages = [
        {
            name: "Basic",
            type: "Landing Page",
            price: "699.000",
            originalPrice: "1.200.000",
            discount: "Hemat 40%",
            desc: "Cocok untuk promosi satu produk atau jasa spesifik.",
            isPopular: false,
            features: [
                { text: "Single Page (1 Halaman)", available: true },
                { text: "Desain Modern & Responsif", available: true },
                { text: "SEO Basic (Google Friendly)", available: true },
                { text: "Tombol WhatsApp / Call", available: true },
                { text: "Gratis Domain my.id (1 Thn)", available: true },
                { text: "CMS / Admin Dashboard", available: false },
                { text: "Fitur Custom (Database)", available: false },
            ]
        },
        {
            name: "Pro",
            type: "Company Profile",
            price: "1.499.999",
            originalPrice: "3.500.000",
            discount: "🔥 Hemat 57%",
            desc: "Pilihan terbaik untuk membangun kredibilitas perusahaan.",
            isPopular: true,
            features: [
                { text: "Multi Page (5-7 Halaman)", available: true },
                { text: "Desain Premium & Animasi Halus", available: true },
                { text: "SEO Advanced", available: true },
                { text: "Integrasi Social Media & Maps", available: true },
                { text: "Gratis Domain .com (1 Thn)", available: true },
                { text: "Free Revisi 4x", available: true },
                { text: "Fitur Custom (Database)", available: false },
            ]
        },
        {
            name: "Business",
            type: "Web App",
            price: "4.999.999",
            originalPrice: "6.000.000",
            discount: "Hemat 1jt",
            desc: "Sistem kompleks untuk operasional bisnis atau toko online.",
            isPopular: false,
            features: [
                { text: "Halaman Tidak Terbatas", available: true },
                { text: "UI/UX Research & Design", available: true },
                { text: "Prioritas SEO & Kecepatan", available: true },
                { text: "Payment Gateway", available: true },
                { text: "Gratis Domain & Cloud Hosting", available: true },
                { text: "Full Admin Dashboard", available: true },
                { text: "Database & API Integration", available: true },
            ]
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-gray-50 font-['Space_Grotesk']">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilih Paket Sesuai Kebutuhan</h2>
                    <p className="text-gray-600 text-lg">Investasi sekali untuk aset digital jangka panjang. Harga transparan, tanpa biaya tersembunyi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`relative bg-white rounded-2xl p-8 border transition-shadow duration-300 ${pkg.isPopular ? 'border-indigo-500 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-lg hover:shadow-xl'}`}>
                            {pkg.isPopular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                                    Paling Laris (Best Value)
                                </div>
                            )}
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={`text-lg font-bold ${pkg.isPopular ? 'text-indigo-600' : 'text-gray-500'}`}>{pkg.name}</h3>
                                    {pkg.discount && (
                                        <span className={`text-xs font-bold px-2 py-1 rounded-md ${pkg.isPopular ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                            {pkg.discount}
                                        </span>
                                    )}
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-2">{pkg.type}</p>
                                <div className="space-y-1">
                                    <div className="text-sm text-gray-400 line-through decoration-red-400">
                                        Rp {pkg.originalPrice}
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900">
                                        <span className="text-sm text-gray-500 font-normal">Hanya</span> <br/>
                                        IDR {pkg.price}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{pkg.desc}</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3">
                                        {feature.available ? (
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                                                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                            </div>
                                        )}
                                        <span className={`text-sm ${feature.available ? 'text-gray-700 font-medium' : 'text-gray-400 line-through decoration-gray-300'}`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <a href={getWaLink(pkg.type)} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-3.5 rounded-xl font-bold transition-colors ${pkg.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                Ambil Promo {pkg.name}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        * Harga promo berlaku untuk waktu terbatas.<br/>
                        Butuh penawaran khusus? <a href={getWaLink("Custom")} className="text-indigo-600 font-bold underline">Hubungi Kami</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

// --- SECTION 4: WHY CHOOSE US ---
const WhyChooseUs = () => {
  const features = [
    {
      title: "Desain Modern & Custom",
      desc: "Kami anti template pasaran. Setiap pixel didesain khusus mencerminkan karakter unik brand bisnis Anda agar tampil beda.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Cepat & Coding Rapi",
      desc: "Struktur kode yang bersih (Clean Code) menjamin website loading super cepat (di bawah 3 detik) dan mudah dikembangkan.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Harga Bersahabat",
      desc: "Kualitas agensi internasional dengan harga lokal. Transparan di awal, tanpa biaya tersembunyi yang mencekik di akhir.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Support After Launch",
      desc: "Kami tidak lari setelah project selesai. Garansi error 30 hari dan siap membantu jika Anda bingung mengelola website.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-gray-900 font-['Space_Grotesk'] border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
             Kenapa Memilih <br />
             <span className="text-indigo-600">Webify Studio?</span>
           </h2>
           <p className="text-gray-600 text-lg">
             Kombinasi sempurna antara estetika desain, kecepatan teknis, dan layanan purna jual yang handal.
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                 <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover" 
                 />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SECTION 5: PORTFOLIO (LOCAL IMAGES) ---
const Portfolio = () => {
  // ⚠️ PASTIKAN ANDA MEMILIKI FILE GAMBAR DI FOLDER 'public'
  // project1.png, project2.png, project3.png
  const projects = [
    {
      id: 1,
      title: "Delryu Services",
      category: "Company Profile & Booking",
      image: "./public/delryu.png", // Menggunakan file dari folder public
      link: "https://delryu.vercel.app/" 
    },
    {
      id: 2,
      title: "Vista Travel",
      category: "Landing Page",
      image: "./public/vista.png", // Menggunakan file dari folder public
      link: "https://vista-travel.vercel.app/"
    },
    {
      id: 3,
      title: "Veranda Realty",
      category: "Landing Page",
      image: "./public/properti.png", // Menggunakan file dari folder public
      link: "https://veranda-reality.vercel.app/"
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 font-['Space_Grotesk']">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Karya & Klien <span className="text-indigo-600">Bahagia.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Berikut adalah beberapa project website yang telah kami kerjakan dan membantu bisnis klien bertumbuh.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <a 
              key={item.id} 
              href={item.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     Kunjungi Website
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                   </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-indigo-600 font-bold mb-2 uppercase tracking-wider">{item.category}</p>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SECTION 8: CTA ---
const CTA = () => {
  return (
    <section className="py-24 bg-[#0F1115] relative overflow-hidden font-['Space_Grotesk']">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Siap Punya <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Website Profesional?
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Jangan biarkan kompetitor mendahului Anda. Tingkatkan kredibilitas dan omzet bisnis sekarang juga bersama Webify Studio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={getWaLink("Deal Project")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-950 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Pesan Sekarang
          </a>
          <a
            href={getWaLink("Tanya-tanya")}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-700 text-white hover:border-white hover:bg-white/5 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Chat WhatsApp</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Konsultasi Gratis • Respon Cepat • Bergaransi
        </p>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-[#0B0D11] border-t border-gray-800 pt-20 pb-10 font-['Space_Grotesk'] text-gray-400 text-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
               <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
               <span className="text-xl font-bold">WEBIFY <span className="text-indigo-500">Studio.</span></span>
            </div>
            <p className="leading-relaxed text-gray-400">
              Webify Studio adalah partner digital strategis untuk bisnis Anda. Kami berfokus menciptakan website yang tidak hanya indah secara visual, tetapi juga fungsional dan menghasilkan konversi penjualan.
            </p>
            <p className="leading-relaxed text-gray-400">
              Berbasis di Indonesia, kami siap melayani UMKM hingga perusahaan korporat untuk Go Digital dengan standar internasional.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Akses Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#problem" className="hover:text-indigo-400 transition-colors">Masalah & Solusi</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Daftar Harga Paket</a></li>
              <li><a href="#why-us" className="hover:text-indigo-400 transition-colors">Keunggulan Kami</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio Klien</a></li>
              <li><a href={getWaLink("Konsultasi")} className="hover:text-indigo-400 transition-colors">Konsultasi Gratis</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
            <div className="space-y-5">
              <a 
                href={getWaLink("Footer")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-all border border-transparent hover:border-gray-800"
              >
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
                    alt="WhatsApp" 
                    className="w-8 h-8 object-contain"
                 />
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Chat WhatsApp</span>
                    <span className="text-white group-hover:text-green-400 transition-colors">+62 821 8196 3893</span>
                 </div>
              </a>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-all border border-transparent hover:border-gray-800"
              >
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" 
                    alt="Instagram" 
                    className="w-8 h-8 object-contain"
                 />
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Follow Instagram</span>
                    <span className="text-white group-hover:text-pink-400 transition-colors">@webifystudio.id</span>
                 </div>
              </a>
              <a 
                href={`mailto:${EMAIL_ADDRESS}`} 
                className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-all border border-transparent hover:border-gray-800"
              >
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" 
                    alt="Email" 
                    className="w-8 h-8 object-contain"
                 />
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Kirim Email</span>
                    <span className="text-white group-hover:text-red-400 transition-colors">{EMAIL_ADDRESS}</span>
                 </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Webify Studio. Dibuat dengan sepenuh hati di Indonesia.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- APP UTAMA ---
function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-['Space_Grotesk'] scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Pricing />
        <WhyChooseUs />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;