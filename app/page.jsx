import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Landmarks from "../components/Landmarks";

export default function Home() {
  return (
    // Note: I removed the bg-red-950 wrapper div here because 
    // we already applied it globally to the <body> in layout.jsx!
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
      <Hero />

      <Stats />

      {/* Landmarks box centered above About */}
      <div className="mt-6 flex justify-center">
        <Landmarks speed="30s" />
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="mt-10 rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center">About Us</h2>

        <div className="mt-6 flex flex-col md:flex-row items-start gap-8">
          {/* Left: image & profile (boxed) */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <div className="w-full rounded-lg border border-white/10 bg-white/5 p-4 flex flex-col items-center md:items-start">
              <img
                src="/jag.jpeg"
                alt="Dr. Jagdish Kumar Prajapat"
                className="w-40 sm:w-84 h-64 sm:h-80 object-cover rounded-md border-2 border-white/20 shadow-lg"
              />
              <h3 className="mt-4 text-xl font-medium text-white">Dr. Jagdish Kumar Prajapat</h3>
              <p className="text-md text-gray-300 mt-1 font-light tracking-wide">Advocate, Rajasthan High Court</p>
            </div>
          </div>

          {/* Right: about content */}
          <div className="md:w-2/3">
            <p className="text-justify text-gray-200 leading-relaxed text-lg">
Founded in 2011 by Dr. Jagdish Kumar Prajapat, RL Associates has established itself as a distinguished law firm committed to legal excellence, professional integrity, and achieving tangible results. For over a decade, the firm has served as a trusted partner to its clients, providing a seamless blend of strategic foresight and aggressive legal representation. The team does more than just practice law; they partner with clients to navigate their most critical legal challenges, ensuring that every action is backed by a meticulous and well-researched strategy.

  The firm’s practice spans a comprehensive spectrum of legal disciplines, allowing it to act as a robust, single-source resource for individuals, enterprises, and institutions. In the realm of corporate law, RL Associates guides businesses through complex regulatory frameworks, ensuring strict compliance, drafting airtight contracts, and mitigating risks before they evolve into costly disputes. When dealing with civil matters, ranging from high-stakes commercial conflicts to real estate matters, the firm prioritizes efficient resolution through strategic negotiation and mediation, yet remains fiercely prepared to litigate in the courtroom when rights are on the line. Furthermore, the firm offers a formidable criminal defense practice, built on exhaustive investigation, constitutional protections, and unyielding advocacy to ensure justice is served.

At the core of RL Associates is the foundational belief that no two cases are identical. The firm takes immense pride in deeply understanding the unique challenges, operational realities, and ultimate objectives of every client it represents. This deep comprehension allows the legal team to engineer tailored, highly effective solutions that address the specific nuances of each situation. Guided by Dr. Prajapat's vision since its inception, the dedicated professionals at RL Associates continue to operate with a unified purpose: to safeguard client interests, uphold the highest ethical standards, and consistently deliver the results they deserve.            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-md bg-yellow-800 px-6 py-2 text-sm font-medium text-white shadow transform transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-adv-gold/50"
          >
            Details
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white/20 bg-white/5 p-6 sm:p-8 backdrop-blur-sm text-center md:text-left transition-colors hover:bg-white/10">
          <h3 className="text-xl font-semibold text-white">Corporate Law</h3>
          <p className="mt-3 text-sm text-gray-300">M&A, compliance, contracts.</p>
        </div>
        
        <div className="rounded-lg border border-white/20 bg-white/5 p-6 sm:p-8 backdrop-blur-sm text-center md:text-left transition-colors hover:bg-white/10">
          <h3 className="text-xl font-semibold text-white">Litigation</h3>
          <p className="mt-3 text-sm text-gray-300">Civil and criminal representation.</p>
        </div>
        
        <div className="rounded-lg border border-white/20 bg-white/5 p-6 sm:p-8 backdrop-blur-sm text-center md:text-left transition-colors hover:bg-white/10">
          <h3 className="text-xl font-semibold text-white">Advisory</h3>
          <p className="mt-3 text-sm text-gray-300">Regulatory and compliance counsel.</p>
        </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="/services"
            className="inline-block bg-yellow-800 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-md shadow-md"
          >
            Full Services
          </a>
        </div>
      </section>

      <Testimonials />

      {/* CONTACT SECTION */}
      <section id="contact" className="mt-10 mb-8 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Contact Us</h2>
        <p className="mt-3 text-gray-300">For consultations, please reach out via email or phone.</p>
        
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-lg text-gray-200">
          <div>
            <span className="font-semibold text-white">Email:</span> info@rlassociates.example
          </div>
          <div className="hidden md:block text-white/30">|</div>
          <div>
            <span className="font-semibold text-white">Phone:</span> +91-7568959609
          </div>
        </div>
      </section>
    </main>
  );
}