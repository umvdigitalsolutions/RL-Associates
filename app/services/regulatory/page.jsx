import Link from "next/link";

export default function RegulatoryService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Regulatory & Compliance Advisory</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Operating a modern enterprise in India means navigating a labyrinth of dynamic statutory, administrative, and sector-specific regulations. Non-compliance can result in crippling penalties, reputational damage, and operational halts. At RL Associates, our regulatory practice proactively guides organizations through this complex landscape. We help businesses build robust compliance architectures, respond aggressively to agency investigations, and design strategic risk-mitigation protocols that perfectly align with ambitious commercial objectives.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Regulatory Audits & Due Diligence:</strong> Conducting sweeping gap analyses to ensure absolute compliance with corporate, environmental, and labour laws.</li>
          <li><strong>Agency Investigations & Defense:</strong> Formidable representation during inquiries and dawn raids by regulatory bodies like SEBI, CCI, ED, and the RBI.</li>
          <li><strong>Licensing & Statutory Approvals:</strong> Navigating bureaucratic red tape to secure essential business permits, industry-specific licenses, and environmental clearances.</li>
          <li><strong>Data Privacy & Tech Compliance:</strong> Advising on the IT Act, the Digital Personal Data Protection (DPDP) Act, and cybersecurity compliance protocols.</li>
          <li><strong>Antitrust & Competition Law:</strong> Crafting compliance manuals to prevent cartelization and anti-competitive practices, and handling merger control filings before the CCI.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Excel Crop Care Ltd. v. Competition Commission of India (2017)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly critical Supreme Court judgment in antitrust law. The Court established the doctrine of "relevant turnover," ruling that penalties for anti-competitive practices must be based only on the turnover derived from the specific infringing products, not the company's total global turnover.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Internet and Mobile Association of India v. Reserve Bank of India (2020)</h3>
            <p className="text-sm text-gray-300 mt-1">A landmark decision curbing regulatory overreach. The Supreme Court struck down an RBI circular that banned banks from dealing with cryptocurrency businesses, ruling that administrative actions must pass the test of "proportionality" and cannot arbitrarily destroy an entire industry.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">SEBI v. Sahara India Real Estate Corporation (2012)</h3>
            <p className="text-sm text-gray-300 mt-1">One of the most massive regulatory compliance cases in Indian history. The Supreme Court reaffirmed the sweeping powers of the Securities and Exchange Board of India (SEBI) to protect investors and regulate unlisted companies issuing securities to the public.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Maneka Gandhi v. Union of India (1978)</h3>
            <p className="text-sm text-gray-300 mt-1">The bedrock of Indian administrative law. The Court mandated that any regulatory or state action must be just, fair, and reasonable, firmly embedding the principles of natural justice into all statutory compliance and administrative proceedings.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Strategic Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Led by the meticulous legal frameworks championed by Dr. Jagdish Kumar Prajapat, our firm shifts the focus from reactive damage control to proactive risk management. We do not just tell you what the law is; we design bespoke compliance mechanisms that allow your in-house teams to operate freely and confidently, knowing that every regulatory blind spot has been covered.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Request Advisory
          </a>
          <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}