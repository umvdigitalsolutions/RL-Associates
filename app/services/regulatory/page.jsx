import Link from "next/link";

export default function RegulatoryService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">Regulatory & Compliance Advisory</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Our regulatory practice helps organisations navigate complex statutory and administrative
          regimes. We advise on compliance programs, respond to investigations, and design risk
          mitigation strategies that align with business objectives.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Core Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>Regulatory gap analysis and compliance program design</li>
          <li>Regulatory investigations and responses</li>
          <li>Licensing, permits and statutory filings</li>
          <li>Policy drafting and training for in-house teams</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Request Advisory</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
