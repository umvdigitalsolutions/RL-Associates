import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-adv-navy text-center">Our Services</h1>
        <p className="mt-3 text-center text-sm text-gray-300 max-w-2xl mx-auto">
          RL Associates provides focused expertise across litigation, corporate law, regulatory
          advisory and criminal defence. Click a service below to read a detailed overview.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Criminal Defense</h3>
            <p className="mt-2 text-sm text-gray-300">Comprehensive defense from investigation through appeal.</p>
            <Link href="/services/criminal" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Corporate & Commercial</h3>
            <p className="mt-2 text-sm text-gray-300">M&A, contracts, restructuring and corporate governance.</p>
            <Link href="/services/corporate" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Civil Litigation</h3>
            <p className="mt-2 text-sm text-gray-300">Property disputes, contracts, family law and more.</p>
            <Link href="/services/civil" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Regulatory & Compliance</h3>
            <p className="mt-2 text-sm text-gray-300">Proactive compliance, investigations and advisory.</p>
            <Link href="/services/regulatory" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Revenue Matters</h3>
            <p className="mt-2 text-sm text-gray-300">Advisory and representation on tax, revenue appeals and assessments.</p>
            <Link href="/services/revenue-matters" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Property Disputes</h3>
            <p className="mt-2 text-sm text-gray-300">Resolution of title, possession and boundary disputes.</p>
            <Link href="/services/land-disputes" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Mutation</h3>
            <p className="mt-2 text-sm text-gray-300">Assistance with mutation proceedings and record updates.</p>
            <Link href="/services/mutation" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Land Registry</h3>
            <p className="mt-2 text-sm text-gray-300">Support with registration, title search and registry matters.</p>
            <Link href="/services/land-registry" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">MACT Matters</h3>
            <p className="mt-2 text-sm text-gray-300">Representation in Motor Accident Claims Tribunal matters and compensation cases.</p>
            <Link href="/services/mact-matters" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">Family Law Matters</h3>
            <p className="mt-2 text-sm text-gray-300">Divorce, maintenance, custody, adoption and related family matters.</p>
            <Link href="/services/family-law" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">DRT Matters</h3>
            <p className="mt-2 text-sm text-gray-300">Debt Recovery Tribunal representation, claims and enforcement assistance.</p>
            <Link href="/services/drt-matters" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>

          <article className="rounded-lg p-6 border border-white/10 bg-white/3">
            <h3 className="text-lg font-semibold text-adv-navy">NCLT Matters</h3>
            <p className="mt-2 text-sm text-gray-300">Representation before the National Company Law Tribunal on insolvency and corporate disputes.</p>
            <Link href="/services/nclt-matters" className="mt-4 inline-block text-adv-gold font-medium">Learn more →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
