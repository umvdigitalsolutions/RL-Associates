import Hero from "../components/Hero";

export default function Home() {
  return (
    // Note: I removed the bg-red-950 wrapper div here because 
    // we already applied it globally to the <body> in layout.jsx!
    <main className="mx-auto max-w-7xl px-6 py-8 md:py-14">
      <Hero />

      {/* ABOUT SECTION */}
      <section id="about" className="mt-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-white">About Us</h2>
        
        <p className="mt-4 text-gray-200 max-w-7xl text-justify leading-relaxed text-lg">
          RL Associates is a distinguished law firm committed to excellence, integrity, and achieving results. Founded by Dr. Jagdish Kumar Prajapat, our practice spans a broad spectrum of legal disciplines, providing both strategic advisory and aggressive litigation services. Whether navigating complex corporate compliance, resolving civil disputes, or providing criminal defense, our firm is built on a foundation of meticulous legal strategy. We pride ourselves on understanding our clients' unique challenges and delivering tailored, effective solutions
        </p>

        {/* Image and Name Profile */}
        <div className="mt-6 flex flex-col items-center">
          <img
            src="/jag.jpeg"
            alt="Dr. Jagdish Kumar Prajapat"
            className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-lg"
          />
          <h3 className="mt-5 text-xl font-medium text-white">
            Dr. Jagdish Kumar Prajapat
          </h3>
          <p className="text-md text-gray-300 mt-1 font-light tracking-wide">
            Advocate, Rajasthan High Court
          </p>
          <a
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-800 px-5 py-2 text-sm font-medium text-white shadow-lg transform transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-adv-gold/50"
          >
            Details
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="mt-12">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white/20 bg-white/5 p-8 backdrop-blur-sm text-center md:text-left transition-colors hover:bg-white/10">
          <h3 className="text-xl font-semibold text-white">Corporate Law</h3>
          <p className="mt-3 text-sm text-gray-300">M&A, compliance, contracts.</p>
        </div>
        
        <div className="rounded-lg border border-white/20 bg-white/5 p-8 backdrop-blur-sm text-center md:text-left transition-colors hover:bg-white/10">
          <h3 className="text-xl font-semibold text-white">Litigation</h3>
          <p className="mt-3 text-sm text-gray-300">Civil and criminal representation.</p>
        </div>
        
        <div className="rounded-lg border border-white/20 bg-white/5 p-8 backdrop-blur-sm text-center md:text-left transition-colors hover:bg-white/10">
          <h3 className="text-xl font-semibold text-white">Advisory</h3>
          <p className="mt-3 text-sm text-gray-300">Regulatory and compliance counsel.</p>
        </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/services"
            className="inline-block bg-yellow-800 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-md shadow-md"
          >
            Full Services
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mt-12 mb-8 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
        <p className="mt-3 text-gray-300">For consultations, please reach out via email or phone.</p>
        
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-lg text-gray-200">
          <div>
            <span className="font-semibold text-white">Email:</span> info@rlassociates.example
          </div>
          <div className="hidden md:block text-white/30">|</div>
          <div>
            <span className="font-semibold text-white">Phone:</span> +91-XXXXXXXXXX
          </div>
        </div>
      </section>
    </main>
  );
}