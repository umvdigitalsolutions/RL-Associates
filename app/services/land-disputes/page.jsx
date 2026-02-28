import Link from "next/link";

export default function LandDisputesService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">Land Disputes</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Our team handles complex land and property disputes including title, possession, boundary
          conflicts and partition suits. We combine thorough title research with pragmatic dispute
          resolution strategies.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>Title verification and title suits</li>
          <li>Possession and boundary disputes</li>
          <li>Partition and joint property matters</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Discuss Your Matter</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
