import Link from "next/link";

export default function NCLTService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">NCLT Matters</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Our team represents clients before the National Company Law Tribunal and appellate bodies
          on matters including corporate insolvency, restructuring, and company law disputes.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>Insolvency and bankruptcy matters under IBC</li>
          <li>Corporate disputes, oppression and mismanagement claims</li>
          <li>Restructuring, compromise and scheme approvals</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Request Representation</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
