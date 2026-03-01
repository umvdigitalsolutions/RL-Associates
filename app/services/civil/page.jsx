import Link from "next/link";

export default function CivilService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Civil Litigation & Dispute Resolution</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Our civil litigation practice covers a wide range of disputes including property matters,
          contractual claims, family law issues, and administrative or constitutional challenges.
          We pursue pragmatic strategies to secure favourable outcomes through settlement or trial.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Practice Focus</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li>Property and real estate disputes</li>
          <li>Breach of contract and commercial disputes</li>
          <li>Family law and guardianship matters</li>
          <li>Writ petitions and administrative law challenges</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Vineeta Sharma v. Rakesh Sharma (2020)</h3>
            <p className="text-sm text-gray-300 mt-1">A historic Supreme Court ruling granting daughters equal coparcenary rights in Hindu Undivided Family (HUF) property, reshaping family and property disputes.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Satyabrata Ghose v. Mugneeram Bangur & Co. (1954)</h3>
            <p className="text-sm text-gray-300 mt-1">The foundational Supreme Court judgment on the Doctrine of Frustration (Section 56 of the Indian Contract Act), vital for breach of contract and commercial litigation.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Salem Advocate Bar Association v. Union of India (2005)</h3>
            <p className="text-sm text-gray-300 mt-1">A crucial ruling upholding amendments to the Civil Procedure Code (CPC), emphasizing speedy trials and alternative dispute resolution mechanisms.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Maneka Gandhi v. Union of India (1978)</h3>
            <p className="text-sm text-gray-300 mt-1">A cornerstone of administrative and constitutional law that expanded Article 21, establishing that state actions must be just, fair, and reasonable.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition">
            Discuss Your Case
          </a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}