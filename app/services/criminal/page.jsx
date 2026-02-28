import Link from "next/link";

export default function CriminalService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <Link href="/services" className="text-sm text-adv-navy">← Back to Services</Link>
        <h1 className="mt-4 text-3xl font-bold text-adv-navy">Criminal Defense</h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          RL Associates provides robust criminal defense representation at every stage — from
          investigation, bail proceedings and trial to appeals before higher courts. We focus on
          protecting constitutional rights, crafting evidence-led strategies, and delivering
          persuasive advocacy in court.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">What We Handle</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-2">
          <li>Serious criminal charges and white-collar offenses</li>
          <li>Arrest response, bail applications and interim relief</li>
          <li>Evidence review, witness preparation and expert engagement</li>
          <li>Appeals and post-conviction remedies before High Courts</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-adv-navy">Our Approach</h2>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          We combine meticulous factual investigation with strategic legal argumentation. Our team
          works closely with clients to evaluate options, preserve rights, and pursue the most
          effective route — whether negotiation, plea strategy, or full trial preparedness.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block bg-adv-gold text-white px-4 py-2 rounded-md">Email for Consultation</a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block border border-adv-navy px-4 py-2 rounded-md text-adv-navy">Call Office</a>
        </div>
      </section>
    </main>
  );
}
