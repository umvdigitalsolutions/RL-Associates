import Link from "next/link";

export default function CorporateService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">Corporate & Commercial Law</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          We advise businesses on complex commercial matters including Mergers & Acquisitions,
          corporate structuring, commercial contracts, and governance. Our guidance is practical and
          geared to protect commercial objectives while mitigating legal exposure.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>M&A due diligence and transaction documentation</li>
          <li>Shareholder agreements and corporate governance</li>
          <li>Commercial contracts, supply and distribution agreements</li>
          <li>Restructuring and regulatory compliance</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Why Clients Choose Us</h2>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          We combine commercial insight with technical legal expertise to structure deals and
          contracts that advance our clients' goals and withstand regulatory scrutiny.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Request Advice</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
