import Link from "next/link";

export default function CriminalService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Criminal Defense</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Facing criminal charges is a daunting experience that threatens your liberty, reputation, and livelihood. At RL Associates, we provide a robust, uncompromising criminal defense representation at every stage of the legal process—from initial police investigations and bail proceedings to complex trials and appellate advocacy before the High Courts and the Supreme Court. We are fiercely dedicated to protecting your constitutional rights, crafting evidence-led defense strategies, and delivering formidable advocacy in the courtroom.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">What We Handle</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Serious Criminal Offenses:</strong> Defense against charges under the IPC/BNS, including offenses against persons and property.</li>
          <li><strong>White-Collar & Economic Offenses:</strong> Handling complex matters involving fraud, money laundering, and investigations by agencies like the CBI, ED, and EOW.</li>
          <li><strong>Bail & Anticipatory Bail:</strong> Rapid response for securing regular bail, anticipatory bail, and interim relief to protect clients from arbitrary arrest.</li>
          <li><strong>Trial Advocacy:</strong> Rigorous evidence review, forensic analysis, strategic witness preparation, and aggressive cross-examination.</li>
          <li><strong>Appeals & Revisions:</strong> Challenging convictions and seeking post-conviction remedies before higher appellate forums.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">D.K. Basu v. State of West Bengal (1997)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly critical Supreme Court judgment establishing specific guidelines and mandatory procedures that police must follow during arrests and detentions to prevent custodial violence.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Arnesh Kumar v. State of Bihar (2014)</h3>
            <p className="text-sm text-gray-300 mt-1">A landmark ruling aimed at preventing arbitrary arrests, mandating that police cannot automatically arrest individuals for offenses punishable with less than seven years of imprisonment.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Sushila Aggarwal v. State (NCT of Delhi) (2020)</h3>
            <p className="text-sm text-gray-300 mt-1">A foundational Constitutional Bench decision clarifying that the protection granted by anticipatory bail is not limited to a fixed timeframe and can continue until the end of the trial.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Hussainara Khatoon v. Home Secretary, State of Bihar (1979)</h3>
            <p className="text-sm text-gray-300 mt-1">A pivotal public interest litigation that recognized the right to a speedy trial as a fundamental right implicit under Article 21, securing the release of thousands of undertrials.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Led by the meticulous legal strategy championed by Dr. Jagdish Kumar Prajapat, our approach combines exhaustive factual investigation with aggressive legal argumentation. We do not take things at face value; we challenge the prosecution's narrative, identify procedural lapses, and aggressively pursue the most effective route to secure your freedom—whether that involves negotiating lesser charges, filing for quashing of FIRs, or demonstrating absolute trial preparedness.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Email for Consultation
          </a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}