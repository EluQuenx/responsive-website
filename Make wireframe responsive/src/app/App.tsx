import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* TOP BAR */}
      <div className="bg-[#111] text-[#bbb] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 py-2 text-[10px] sm:text-[11px] tracking-widest gap-2 sm:gap-0">
        <span className="text-center">FREE SHIPPING ON ORDERS OVER $35 · USE CODE: <strong className="text-white">SMART10</strong> FOR 10% OFF</span>
        <div className="flex gap-3 sm:gap-5">
          <a href="#" className="hover:text-white transition-colors">Store Locator</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Track Order</a>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-[#d8d8d8] px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="font-bold text-base sm:text-lg lg:text-[22px] tracking-[4px] sm:tracking-[6px] uppercase text-black">
            SMARTHOME
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-0 h-16">
            {['Cases', 'Screen Protectors', 'Chargers', 'Smart Home', 'Accessories', 'New Arrivals', 'Sale'].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`flex items-center text-[11px] lg:text-[12px] tracking-widest uppercase px-3 xl:px-4 border-b-[3px] transition-all ${
                  i === 0 ? 'text-black border-black' : 'text-[#3d3d3d] border-transparent hover:text-black hover:border-black'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <a href="#" className="hidden sm:flex flex-col items-center gap-1 text-[10px] lg:text-[11px] tracking-wide text-[#555] hover:text-black transition-colors">
              <div className="w-5 h-5 bg-[#d8d8d8] flex items-center justify-center text-[10px] text-[#777]">🔍</div>
              <span className="hidden xl:inline">Search</span>
            </a>
            <a href="#" className="hidden sm:flex flex-col items-center gap-1 text-[10px] lg:text-[11px] tracking-wide text-[#555] hover:text-black transition-colors">
              <div className="w-5 h-5 bg-[#d8d8d8] flex items-center justify-center text-[10px] text-[#777]">👤</div>
              <span className="hidden xl:inline">Account</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-[10px] lg:text-[11px] tracking-wide text-[#555] hover:text-black transition-colors">
              <div className="w-5 h-5 bg-[#d8d8d8] flex items-center justify-center text-[10px] text-[#777]">🛒</div>
              <span className="hidden xl:inline">Cart</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-[#d8d8d8] py-4 space-y-2">
            {['Cases', 'Screen Protectors', 'Chargers', 'Smart Home', 'Accessories', 'New Arrivals', 'Sale'].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`block py-2 px-2 text-[12px] tracking-widest uppercase ${
                  i === 0 ? 'text-black font-bold' : 'text-[#3d3d3d]'
                } hover:text-black`}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* DEVICE NAV BAR */}
      <div className="bg-[#f6f6f6] border-b border-[#d8d8d8] flex overflow-x-auto px-4 sm:px-6 lg:px-12 scrollbar-hide">
        {['iPhone 16 Series', 'iPhone 15', 'Samsung S25', 'Samsung S24', 'Google Pixel 9', 'iPad Pro', 'MacBook', 'AirPods', 'Apple Watch', 'Galaxy Watch'].map((device, i) => (
          <a
            key={device}
            href="#"
            className={`text-[10px] sm:text-[11px] tracking-wide py-2 sm:py-2.5 px-3 sm:px-4 whitespace-nowrap border-b-2 transition-all ${
              i === 0 ? 'text-black border-black font-bold' : 'text-[#777] border-transparent hover:text-black hover:border-black'
            }`}
          >
            {device}
          </a>
        ))}
      </div>

      {/* MAIN HERO */}
      <div className="bg-[#1e1e1e] min-h-[400px] sm:min-h-[520px] flex items-center relative overflow-hidden px-4 sm:px-8 lg:px-20 xl:px-24 py-12 sm:py-0">
        <div className="z-10 max-w-xl">
          <div className="text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] uppercase text-[#999] mb-3 sm:mb-4">
            New Collection — 2025
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-white leading-tight mb-3 sm:mb-4">
            Protect.<br/>Perform.<br/>Prevail.
          </h1>
          <p className="text-sm sm:text-[15px] text-[#999] leading-relaxed mb-6 sm:mb-8">
            Military-grade protection meets minimal design. Built for the way you live — every drop, every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="px-6 sm:px-8 py-3 bg-white text-black text-[11px] sm:text-[12px] tracking-[2px] uppercase border-2 border-white hover:bg-transparent hover:text-white transition-all text-center">
              Shop Now
            </a>
            <a href="#" className="px-6 sm:px-8 py-3 bg-transparent text-[#d8d8d8] text-[11px] sm:text-[12px] tracking-[2px] uppercase border-2 border-[#555] hover:border-white hover:text-white transition-all text-center">
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden md:block absolute right-[8%] lg:right-[12%] top-1/2 -translate-y-1/2 text-[11px] sm:text-[13px] text-[#555] tracking-[2px] border border-dashed border-[#3d3d3d] px-6 sm:px-10 py-12 sm:py-16">
          [ FULL-WIDTH HERO PRODUCT IMAGE ]
        </div>
      </div>

      {/* SPLIT BANNERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px] sm:min-h-[320px]">
        {[
          { tag: 'Featured', title: 'Tough Armor Series', cta: 'Shop Cases' },
          { tag: 'Best Seller', title: 'Ultra Hybrid', cta: 'Shop Now' }
        ].map((card, i) => (
          <div key={i} className="bg-[#2a2a2a] flex items-end p-6 sm:p-8 lg:p-9 relative overflow-hidden border-r border-[#3d3d3d] last:border-r-0">
            <div className="z-10">
              <span className="block text-[9px] sm:text-[10px] tracking-[3px] text-[#999] uppercase mb-2">
                {card.tag}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[26px] text-white mb-3 sm:mb-4">
                {card.title}
              </h2>
              <a href="#" className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 bg-transparent text-[#d8d8d8] text-[10px] sm:text-[11px] tracking-[2px] uppercase border border-[#777] hover:border-white hover:text-white transition-all">
                {card.cta}
              </a>
            </div>
            <div className="hidden sm:block absolute top-1/2 right-[10%] lg:right-[15%] -translate-y-[60%] text-[10px] sm:text-[11px] text-[#555] tracking-wide border border-dashed border-[#3d3d3d] px-4 sm:px-5 py-6 sm:py-8">
              [ PRODUCT IMAGE ]
            </div>
          </div>
        ))}
      </div>

      {/* CATEGORY STRIP */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 bg-white">
        <div className="flex justify-between items-baseline mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#d8d8d8]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] tracking-wide">Shop by Category</h2>
          <a href="#" className="text-[11px] sm:text-[12px] tracking-widest text-[#777] uppercase border-b border-[#bbb] pb-0.5 hover:text-black hover:border-black transition-colors">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border border-[#d8d8d8]">
          {['Phone Cases', 'Screen Protectors', 'Wireless Chargers', 'Smart Plugs', 'Accessories'].map((cat, i) => (
            <a
              key={cat}
              href="#"
              className="flex flex-col items-center p-6 sm:p-8 border-r border-b sm:border-b-0 border-[#d8d8d8] last:border-r-0 hover:bg-[#f6f6f6] transition-colors"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#d8d8d8] flex items-center justify-center text-[8px] sm:text-[9px] text-[#999] tracking-wide mb-3">
                IMG
              </div>
              <span className="text-[11px] sm:text-[12px] tracking-widest text-[#3d3d3d] uppercase text-center">
                {cat}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 bg-[#f6f6f6]">
        <div className="flex justify-between items-baseline mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#d8d8d8]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] tracking-wide">New Arrivals</h2>
          <a href="#" className="text-[11px] sm:text-[12px] tracking-widest text-[#777] uppercase border-b border-[#bbb] pb-0.5 hover:text-black hover:border-black transition-colors">
            See All New →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#d8d8d8] border border-[#d8d8d8]">
          {[
            { name: 'Tough Armor MagFit Case', compat: 'For iPhone 16 Pro', price: '$49.99', isNew: true, colors: ['#222', '#888', '#ddd'] },
            { name: '15W Qi2 Wireless Charging Pad', compat: 'Universal', price: '$39.99', isNew: true, colors: ['#111', '#eee'] },
            { name: 'Ultra Hybrid Crystal Clear Case', compat: 'For Samsung S25', price: '$34.99', isNew: false, colors: ['transparent', '#555'] },
            { name: 'Fold Stand Folio Case with Pencil Holder', compat: 'For iPad Pro 13"', price: '$64.99', isNew: true, colors: ['#333', '#999'] }
          ].map((product, i) => (
            <div key={i} className="bg-white cursor-pointer hover:bg-[#f6f6f6] transition-colors">
              <div className="relative bg-[#eee] h-44 sm:h-52 lg:h-56 flex items-center justify-center text-[10px] sm:text-[11px] text-[#999] tracking-wide border-b border-[#d8d8d8]">
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-black text-white text-[8px] sm:text-[9px] tracking-[2px] px-2 py-1 uppercase">
                    New
                  </span>
                )}
                [ PRODUCT IMAGE ]
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-[9px] sm:text-[10px] tracking-[2px] text-[#999] uppercase mb-1.5">
                  {product.compat}
                </div>
                <h3 className="text-sm sm:text-[15px] text-black leading-snug mb-2">
                  {product.name}
                </h3>
                <div className="font-bold text-sm sm:text-[15px] text-black mb-2.5">
                  {product.price}
                </div>
                <div className="flex gap-1.5">
                  {product.colors.map((color, j) => (
                    <div
                      key={j}
                      className="w-3.5 h-3.5 rounded-full border border-[#bbb]"
                      style={{ background: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROMO BANNER */}
      <div className="bg-[#1e1e1e] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-10 sm:py-12 lg:py-14 relative overflow-hidden gap-6 lg:gap-0">
        <div className="max-w-md z-10">
          <div className="text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] text-[#777] uppercase mb-3">
            Limited Offer
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] text-white leading-tight mb-3">
            Military-Grade Protection.<br/>Zero Compromise.
          </h2>
          <p className="text-sm sm:text-[14px] text-[#999] leading-relaxed mb-6 sm:mb-7">
            Our Tough Armor series is engineered with dual-layer defense — absorbing impact before it reaches your device.
          </p>
          <a href="#" className="inline-block px-6 sm:px-8 py-3 bg-white text-black text-[11px] sm:text-[12px] tracking-[2px] uppercase border-2 border-white hover:bg-transparent hover:text-white transition-all">
            Shop Tough Armor
          </a>
        </div>
        <div className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 text-[11px] sm:text-[12px] text-[#555] tracking-[2px] border border-dashed border-[#3d3d3d] px-6 sm:px-8 py-10 sm:py-12">
          [ LIFESTYLE / PRODUCT IMAGE ]
        </div>
      </div>

      {/* BEST SELLERS */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 bg-white">
        <div className="flex justify-between items-baseline mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#d8d8d8]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] tracking-wide">Best Sellers</h2>
          <a href="#" className="text-[11px] sm:text-[12px] tracking-widest text-[#777] uppercase border-b border-[#bbb] pb-0.5 hover:text-black hover:border-black transition-colors">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#d8d8d8] border border-[#d8d8d8]">
          {[
            { name: 'Liquid Air Armor Case', compat: 'For iPhone 15/16', price: '$29.99', origPrice: '$37.99', isSale: true, colors: ['#111', '#666', '#ccc', '#4a3f5e'] },
            { name: 'Smart Wi-Fi Plug 16A Energy Monitor', compat: 'Universal', price: '$24.99', isSale: false, colors: ['#eee'] },
            { name: 'Tough Armor AirPods Case', compat: 'For AirPods Pro 2', price: '$19.99', origPrice: '$23.99', isSale: true, colors: ['#222', '#eee'] },
            { name: 'Rugged Armor Watch Band', compat: 'For Apple Watch Ultra 2', price: '$34.99', isSale: false, colors: ['#111', '#555'] }
          ].map((product, i) => (
            <div key={i} className="bg-white cursor-pointer hover:bg-[#f6f6f6] transition-colors">
              <div className="relative bg-[#eee] h-44 sm:h-52 lg:h-56 flex items-center justify-center text-[10px] sm:text-[11px] text-[#999] tracking-wide border-b border-[#d8d8d8]">
                {product.isSale && (
                  <span className="absolute top-3 left-3 bg-[#555] text-white text-[8px] sm:text-[9px] tracking-[2px] px-2 py-1 uppercase">
                    -{((parseFloat(product.origPrice!.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.origPrice!.slice(1)) * 100).toFixed(0)}%
                  </span>
                )}
                [ PRODUCT IMAGE ]
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-[9px] sm:text-[10px] tracking-[2px] text-[#999] uppercase mb-1.5">
                  {product.compat}
                </div>
                <h3 className="text-sm sm:text-[15px] text-black leading-snug mb-2">
                  {product.name}
                </h3>
                <div className="mb-2.5">
                  <span className="font-bold text-sm sm:text-[15px] text-black">{product.price}</span>
                  {product.origPrice && (
                    <span className="text-xs sm:text-[12px] text-[#999] line-through ml-2">{product.origPrice}</span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  {product.colors.map((color, j) => (
                    <div
                      key={j}
                      className="w-3.5 h-3.5 rounded-full border border-[#bbb]"
                      style={{ background: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 bg-[#f6f6f6]">
        <div className="flex justify-between items-baseline mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#d8d8d8]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] tracking-wide">Why SmartHome</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#d8d8d8]">
          {[
            { icon: '🛡️', title: 'Military-Grade Protection', desc: 'Every product passes MIL-STD-810G drop tests — 4-foot drop protection as standard, not a premium.' },
            { icon: '🔬', title: 'Precision Engineered', desc: 'Exact cutouts, tactile buttons, and perfect fit — designed for your specific device, not a generic shell.' },
            { icon: '♻️', title: 'Sustainable Materials', desc: 'We use recycled and eco-friendly materials wherever possible without compromising on protection or feel.' }
          ].map((feature, i) => (
            <div key={i} className="p-6 sm:p-8 lg:p-10 border-r border-[#d8d8d8] last:border-r-0 bg-white">
              <div className="w-12 h-12 bg-[#eee] border border-[#d8d8d8] flex items-center justify-center text-base sm:text-lg mb-4">
                {feature.icon}
              </div>
              <h4 className="text-base sm:text-lg lg:text-[16px] text-black mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-[13px] text-[#777] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 bg-white">
        <div className="flex justify-between items-baseline mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#d8d8d8]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] tracking-wide">What Customers Say</h2>
          <a href="#" className="text-[11px] sm:text-[12px] tracking-widest text-[#777] uppercase border-b border-[#bbb] pb-0.5 hover:text-black hover:border-black transition-colors">
            All Reviews →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {[
            { stars: 5, text: '"Dropped my phone from waist height onto concrete. Not a single crack. The case barely has a scuff. Worth every peso."', author: '— Maria S., Verified Buyer' },
            { stars: 5, text: '"Slim, clean, and the cutouts are perfect. I\'ve tried other brands but the fit here is just unmatched. Will keep buying."', author: '— James R., Verified Buyer' },
            { stars: 4, text: '"Fast shipping and great packaging. The smart plug works perfectly with Google Home out of the box. No setup headaches."', author: '— Ana C., Verified Buyer' }
          ].map((review, i) => (
            <div key={i} className="border border-[#d8d8d8] p-5 sm:p-7 bg-white">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className={`text-sm ${j < review.stars ? 'text-black' : 'text-[#999]'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-[13px] text-[#555] leading-relaxed mb-4 italic">
                {review.text}
              </p>
              <div className="text-[11px] sm:text-[12px] tracking-wide text-[#999] uppercase">
                {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-black px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] text-white mb-2">
            Stay in the Loop
          </h2>
          <p className="text-xs sm:text-[13px] text-[#999] leading-relaxed">
            Get early access to new launches, exclusive discounts, and tech tips — straight to your inbox.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-0 w-full lg:w-auto lg:flex-shrink-0">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 sm:px-5 py-3 bg-[#2a2a2a] border border-[#3d3d3d] text-white text-xs sm:text-[13px] w-full sm:w-72 outline-none placeholder:text-[#555]"
          />
          <button className="px-5 sm:px-7 py-3 bg-white text-black text-[11px] sm:text-[12px] tracking-[2px] uppercase border-none cursor-pointer hover:bg-[#d8d8d8] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1e1e1e] px-4 sm:px-6 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-[#2a2a2a]">
          <div className="sm:col-span-2">
            <span className="block font-bold text-lg sm:text-xl tracking-[4px] sm:tracking-[6px] text-white uppercase mb-3 sm:mb-4">
              SMARTHOME
            </span>
            <p className="text-xs sm:text-[12px] text-[#777] leading-relaxed mb-4 sm:mb-5">
              Protecting what matters. Engineered for real life — military-grade quality at everyday prices.
            </p>
            <div className="flex gap-2 sm:gap-2.5">
              {['FB', 'IG', 'TT', 'YT', 'X'].map((social) => (
                <div key={social} className="w-8 h-8 bg-[#2a2a2a] border border-[#3d3d3d] flex items-center justify-center text-[9px] sm:text-[10px] text-[#999] cursor-pointer hover:border-white hover:text-white transition-all">
                  {social}
                </div>
              ))}
            </div>
          </div>
          {[
            { title: 'Products', links: ['Phone Cases', 'Screen Protectors', 'Chargers', 'Smart Plugs', 'Accessories', 'New Arrivals'] },
            { title: 'Support', links: ['Track My Order', 'Returns', 'Warranty', 'FAQs', 'Contact Us'] },
            { title: 'Company', links: ['About Us', 'Sustainability', 'Careers', 'Press', 'Affiliates'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Accessibility'] }
          ].map((col, i) => (
            <div key={i}>
              <h5 className="text-[11px] sm:text-[12px] tracking-[2px] uppercase text-white mb-4 sm:mb-5">
                {col.title}
              </h5>
              <div className="space-y-2 sm:space-y-2.5">
                {col.links.map((link) => (
                  <a key={link} href="#" className="block text-[11px] sm:text-[12px] text-[#777] hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-[10px] sm:text-[11px] text-[#555] tracking-wide text-center sm:text-left">
            © 2025 SmartHome Hub. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['VISA', 'MASTERCARD', 'PAYPAL', 'GCASH', 'MAYA'].map((payment) => (
              <div key={payment} className="px-2 sm:px-2.5 py-1 bg-[#2a2a2a] border border-[#3d3d3d] text-[8px] sm:text-[9px] tracking-wide text-[#777]">
                {payment}
              </div>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap');

        body {
          font-family: 'EB Garamond', Georgia, 'Times New Roman', serif;
        }

        .font-serif {
          font-family: 'EB Garamond', Georgia, 'Times New Roman', serif;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
