import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/jag.jpeg"
              alt="Dr. Jagdish Kumar Prajapat"
              className="w-36 h-36 rounded-full object-cover border-2 border-adv-navy/20 shadow"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-adv-navy">Dr. Jagdish Kumar Prajapat</h1>
            <p className="mt-2 text-adv-muted">Founder & Senior Advocate — RL Associates</p>
            <p className="mt-4 text-sm text-gray-300 max-w-xl leading-relaxed">
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
            <h2 className="text-2xl font-semibold text-adv-navy">Experience</h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
              <li>Advocate, Rajasthan High Court — decades of litigation experience</li>
              <li>Counsel for corporate clients on M&A and compliance matters</li>
              <li>Representation in high-stakes civil and criminal trials</li>
              <li>Advisory on regulatory frameworks and dispute resolution</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-adv-navy">Education & Credentials</h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
              <li>LL.B., (University)</li>
              <li>Ph.D. in Law — specialization in criminal jurisprudence</li>
              <li>Bar Council registration and senior advocate designation</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div>
          <h2 className="text-2xl font-semibold text-adv-navy text-center">About RL Associates</h2>

          <h3 className="mt-4 text-xl font-semibold text-adv-navy">Who We Are</h3>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            RL Associates is a premier, full-service law firm dedicated to providing comprehensive,
            results-driven legal solutions. Rooted in a tradition of excellence and guided by the
            extensive expertise of our founder, Dr. Jagdish Kumar Prajapat, Advocate at the Rajasthan
            High Court, we proudly represent individuals, businesses, and corporate entities across a
            diverse spectrum of legal challenges.
          </p>

          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
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
              <p className="mt-1 leading-relaxed">We handle complex civil matters, including property disputes, breach of contract, family law, and constitutional writs. We pursue efficient resolutions through courtroom advocacy or strategic settlements as appropriate.</p>
            </div>

            <div>
              <h4 className="font-medium text-adv-navy">Criminal Defense</h4>
              <p className="mt-1 leading-relaxed">We provide formidable legal representation in criminal matters. From trial courts to the High Court, we defend our clients' constitutional rights with meticulous evidence analysis and compelling advocacy.</p>
            </div>

            <div>
              <h4 className="font-medium text-adv-navy">Corporate & Commercial Law</h4>
              <p className="mt-1 leading-relaxed">We act as trusted advisors to businesses of all sizes. Our services include Mergers & Acquisitions, corporate restructuring, complex contract drafting, and strategies to mitigate commercial liabilities.</p>
            </div>

            <div>
              <h4 className="font-medium text-adv-navy">Regulatory & Compliance Advisory</h4>
              <p className="mt-1 leading-relaxed">We guide corporations, startups, and institutions through evolving statutory frameworks, ensuring airtight compliance and proactively managing legal risk.</p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-adv-navy">The RL Associates Difference: A Client-First Philosophy</h3>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            What truly sets RL Associates apart is our "client-first" approach. We do not believe in
            one-size-fits-all legal advice. Instead, we take the time to deeply understand the unique
            nuances of each client's situation, their commercial objectives, and their personal
            concerns.
          </p>

          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
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
