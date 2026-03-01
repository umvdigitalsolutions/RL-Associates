import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/jag.jpeg"
              alt="Dr. Jagdish Kumar Prajapat"
              className="w-28 h-28 sm:w-38 sm:h-39 rounded-2xl object-cover border-2 border-adv-navy/20 shadow"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-adv-navy">Dr. Jagdish Kumar Prajapat</h1>
            <p className="mt-2 text-adv-muted">Founder & Senior Advocate — RL Associates</p>
            <p className="mt-4 text-sm text-gray-300 max-w-xl text-justify leading-relaxed">
              Dr. Jagdish Kumar Prajapat is a distinguished advocate with extensive
              experience in civil and criminal law. He has represented numerous
              high-profile clients before tribunals and higher courts, and provides
              strategic counsel on complex regulatory and corporate matters.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-block bg-adv-navy text-white px-3 py-1 rounded-full text-sm">Litigation</span>
              <span className="inline-block bg-adv-navy text-white px-3 py-1 rounded-full text-sm">Corporate</span>
              <span className="inline-block bg-adv-navy text-white px-3 py-1 rounded-full text-sm">Regulatory</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-adv-navy">Experience</h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
              <li>Advocate, Rajasthan High Court — decades of litigation experience</li>
              <li>Counsel for corporate clients on M&A and compliance matters</li>
              <li>Representation in high-stakes civil and criminal trials</li>
              <li>Advisory on regulatory frameworks and dispute resolution</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-adv-navy">Education & Credentials</h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
              <li>LL.B., (University)</li>
              <li>Ph.D. in Law — specialization in criminal jurisprudence</li>
              <li>Bar Council registration and senior advocate designation</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-adv-navy text-center sm:text-left">About RL Associates</h2>

          <h3 className="mt-4 text-xl font-semibold text-adv-navy">Who We Are</h3>
          <p className="mt-3 text-justify text-sm text-gray-300 leading-relaxed">
            Founded in 2011 by Dr. Jagdish Kumar Prajapat, RL Associates has established itself as a distinguished law firm committed to legal excellence, professional integrity, and achieving tangible results. For over a decade, the firm has served as a trusted partner to its clients, providing a seamless blend of strategic foresight and aggressive legal representation. The team does more than just practice law; they partner with clients to navigate their most critical legal challenges, ensuring that every action is backed by a meticulous and well-researched strategy.

The firm’s practice spans a comprehensive spectrum of legal disciplines, allowing it to act as a robust, single-source resource for individuals, enterprises, and institutions. In the realm of corporate law, RL Associates guides businesses through complex regulatory frameworks, ensuring strict compliance, drafting airtight contracts, and mitigating risks before they evolve into costly disputes. When dealing with civil matters, ranging from high-stakes commercial conflicts to real estate matters, the firm prioritizes efficient resolution through strategic negotiation and mediation, yet remains fiercely prepared to litigate in the courtroom when rights are on the line. Furthermore, the firm offers a formidable criminal defense practice, built on exhaustive investigation, constitutional protections, and unyielding advocacy to ensure justice is served.

At the core of RL Associates is the foundational belief that no two cases are identical. The firm takes immense pride in deeply understanding the unique challenges, operational realities, and ultimate objectives of every client it represents. This deep comprehension allows the legal team to engineer tailored, highly effective solutions that address the specific nuances of each situation. Guided by Dr. Prajapat's vision since its inception, the dedicated professionals at RL Associates continue to operate with a unified purpose: to safeguard client interests, uphold the highest ethical standards, and consistently deliver the results they deserve.          </p>

          <p className="mt-3 text-justify text-sm text-gray-300 leading-relaxed">
            We understand that navigating the legal landscape can be complex and daunting. That is why
            our firm is built on a foundation of clarity, meticulous preparation, and unwavering
            advocacy. Whether we are negotiating a high-stakes corporate merger, resolving a
            contentious civil dispute, or providing robust criminal defense, our commitment remains
            the same: protecting our clients' rights and advancing their best interests.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-adv-navy">Our Core Practice Areas</h3>
          <div className="mt-4 space-y-4 text-sm text-gray-300">
            <div>
              <h4 className="font-medium text-adv-navy">Civil Litigation & Dispute Resolution</h4>
                <p className="mt-1 text-justify leading-relaxed">We handle complex civil matters, including real estate matters, breach of contract, family law, and constitutional writs. We pursue efficient resolutions through courtroom advocacy or strategic settlements as appropriate.</p>
            </div>

            <div>
              <h4 className="font-medium text-adv-navy">Criminal Defense</h4>
              <p className="mt-1 text-justify leading-relaxed">We provide formidable legal representation in criminal matters. From trial courts to the High Court, we defend our clients' constitutional rights with meticulous evidence analysis and compelling advocacy.</p>
            </div>

            <div>
              <h4 className="font-medium text-adv-navy">Corporate & Commercial Law</h4>
              <p className="mt-1 text-justify leading-relaxed">We act as trusted advisors to businesses of all sizes. Our services include Mergers & Acquisitions, corporate restructuring, complex contract drafting, and strategies to mitigate commercial liabilities.</p>
            </div>

            <div>
              <h4 className="font-medium text-adv-navy">Regulatory & Compliance Advisory</h4>
              <p className="mt-1 text-justify leading-relaxed">We guide corporations, startups, and institutions through evolving statutory frameworks, ensuring airtight compliance and proactively managing legal risk.</p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-adv-navy">The RL Associates Difference: A Client-First Philosophy</h3>
          <p className="mt-3 text-justify text-sm text-gray-300 leading-relaxed">
            What truly sets RL Associates apart is our "client-first" approach. We do not believe in
            one-size-fits-all legal advice. Instead, we take the time to deeply understand the unique
            nuances of each client's situation, their commercial objectives, and their personal
            concerns.
          </p>

          <p className="mt-3 text-justify text-sm text-gray-300 leading-relaxed">
            We pride ourselves on transparent communication—translating complex legal jargon into
            practical, actionable counsel. When you partner with RL Associates, you gain more than
            just legal representation; you gain a dedicated strategic ally committed to achieving the
            most favorable resolution possible with integrity, confidentiality, and unparalleled legal rigor.
          </p>
        </div>
      </section>
    </main>
  );
}
