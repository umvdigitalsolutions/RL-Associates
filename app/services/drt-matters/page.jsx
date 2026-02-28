import Link from "next/link";

export default function DRTService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">DRT Matters (Debt Recovery)</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          RL Associates offers representation before Debt Recovery Tribunals and Appellate Tribunals.
          We assist lenders, financial institutions and creditors with recovery claims, execution and
          enforcement of decrees, and interlocutory relief where necessary.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>Filing and defending recovery suits before DRTs</li>
          <li>Execution and enforcement of orders</li>
          <li>Appeals and representation before appellate authorities</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Request Assistance</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
