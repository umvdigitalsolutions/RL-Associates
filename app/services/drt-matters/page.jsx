import Link from "next/link";

export default function DRTService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">DRT & SARFAESI Matters (Debt Recovery)</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          The swift recovery of Non-Performing Assets (NPAs) and the resolution of complex financial disputes are critical to the stability of financial institutions and commercial enterprises. At RL Associates, we offer formidable representation before Debt Recovery Tribunals (DRT) and Debt Recovery Appellate Tribunals (DRAT). We actively assist lenders, banks, NBFCs, and private creditors, while also providing strategic defense for borrowers and guarantors facing aggressive recovery actions.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Original Applications (OA):</strong> Drafting, filing, and defending recovery suits under the RDDBFI Act before DRTs.</li>
          <li><strong>SARFAESI Proceedings:</strong> Navigating notices under Section 13(2), objections under Section 13(3A), and possession measures under Section 13(4) and Section 14.</li>
          <li><strong>Securitisation Applications (SA):</strong> Challenging arbitrary actions of secured creditors and seeking stays on property auctions or physical possession.</li>
          <li><strong>Execution & Enforcement:</strong> Facilitating the swift execution of Recovery Certificates (RC) and the enforcement of tribunal orders.</li>
          <li><strong>Appellate Advocacy:</strong> Filing and defending appeals before the DRAT, including navigating mandatory pre-deposit requirements.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Mardia Chemicals Ltd. v. Union of India (2004)</h3>
            <p className="text-sm text-gray-300 mt-1">A monumental Supreme Court judgment that upheld the constitutional validity of the SARFAESI Act, empowering banks to recover NPAs without court intervention, while striking down the unfair pre-deposit condition for initial appeals to the DRT.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">United Bank of India v. Satyawati Tondon (2010)</h3>
            <p className="text-sm text-gray-300 mt-1">A crucial ruling strictly advising High Courts against entertaining writ petitions under Article 226 in SARFAESI matters, emphasizing that borrowers must exhaust the statutory alternative remedies available before the DRT.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Standard Chartered Bank v. Dharminder Bhohi (2013)</h3>
            <p className="text-sm text-gray-300 mt-1">A significant Supreme Court decision clarifying the strict jurisdictional boundaries of the DRT and DRAT, ensuring tribunals adhere tightly to the statutory provisions of the RDDBFI Act.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">ITC Limited v. Blue Coast Hotels Ltd. (2018)</h3>
            <p className="text-sm text-gray-300 mt-1">A vital judgment addressing the nuances of symbolic versus physical possession under the SARFAESI Act and the mandatory requirement for creditors to consider representations made by borrowers.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Strategic Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Rooted in the meticulous litigation strategies cultivated by Dr. Jagdish Kumar Prajapat, our firm approaches debt recovery with urgency and precision. We combine an aggressive push for recovery on behalf of creditors with a profound understanding of statutory compliance. For our borrower clients, we meticulously scrutinize the actions of financial institutions to uncover procedural lapses, ensuring fair treatment and protecting valuable assets from unlawful seizure.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Request Assistance
          </a>
          <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}