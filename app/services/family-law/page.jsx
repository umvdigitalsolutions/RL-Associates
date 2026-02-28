import Link from "next/link";

export default function FamilyLawService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">Family Law Matters</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          RL Associates advises and represents clients in family law matters including divorce,
          maintenance, child custody, adoption, domestic violence matters and settlement agreements.
          We seek solutions that protect our clients' interests while prioritizing welfare of children.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>Divorce, separation and settlement negotiations</li>
          <li>Child custody, visitation and guardianship</li>
          <li>Maintenance and support proceedings</li>
          <li>Adoption and guardianship matters</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Request Consultation</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
