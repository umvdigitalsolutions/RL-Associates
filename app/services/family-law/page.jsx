import Link from "next/link";

export default function FamilyLawService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Family Law & Matrimonial Disputes</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Family law matters are profoundly personal and often emotionally taxing. At RL Associates, we approach matrimonial disputes with the utmost discretion, empathy, and legal rigor. We advise and represent clients in a broad spectrum of family law matters, ranging from complex contested divorces and high-net-worth settlement negotiations to sensitive child custody and domestic violence cases. Our primary goal is to secure solutions that fiercely protect our clients' interests and financial stability while prioritizing the welfare of any children involved.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Divorce & Annulment:</strong> Handling both Mutual Consent Divorce and complex Contested Divorce proceedings under various personal laws.</li>
          <li><strong>Child Custody & Guardianship:</strong> Advocating for sole, joint, or shared custody, visitation rights, and the appointment of legal guardians.</li>
          <li><strong>Alimony & Maintenance:</strong> Securing interim and permanent maintenance for spouses, children, and dependent parents (including Section 125 CrPC/BNSS applications).</li>
          <li><strong>Domestic Violence & 498A:</strong> Filing for protection orders, right to residence under the PWDVA, and defending against false dowry harassment claims.</li>
          <li><strong>Restitution of Conjugal Rights & Settlement:</strong> Negotiating out-of-court settlements, drafting Memorandums of Understanding (MoUs), and navigating mediation.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Shilpa Sailesh v. Varun Sreenivasan (2023)</h3>
            <p className="text-sm text-gray-300 mt-1">A historic Constitution Bench ruling establishing that the Supreme Court can invoke its extraordinary powers under Article 142 to grant a divorce on the grounds of "irretrievable breakdown of marriage," bypassing the mandatory waiting period.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Rajnesh v. Neha (2020)</h3>
            <p className="text-sm text-gray-300 mt-1">A definitive Supreme Court judgment that laid down comprehensive guidelines for determining maintenance. It mandated the filing of detailed "Affidavits of Disclosure of Assets and Liabilities" by both parties to ensure fair alimony calculations.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Satish Chander Ahuja v. Sneha Ahuja (2020)</h3>
            <p className="text-sm text-gray-300 mt-1">A vital ruling under the Domestic Violence Act expanding the definition of a "shared household," guaranteeing a daughter-in-law's right to reside in a house solely owned by her in-laws.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Gita Hariharan v. Reserve Bank of India (1999)</h3>
            <p className="text-sm text-gray-300 mt-1">A landmark decision declaring that a mother can be treated as the natural guardian of her minor child during the lifetime of the father, striking down the discriminatory interpretation of the Hindu Minority and Guardianship Act.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">A Strategic & Compassionate Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Guided by the firm's foundational commitment to tailored solutions established by Dr. Jagdish Kumar Prajapat, we understand that family litigation requires a delicate balance. We encourage amicable settlements and mediation whenever possible to minimize emotional trauma. However, when aggressive litigation becomes necessary to protect a client's rights, financial security, or physical safety, our advocates are unyielding in the courtroom.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Request Consultation
          </a>
          <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}