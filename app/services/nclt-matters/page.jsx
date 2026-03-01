import Link from "next/link";

export default function NCLTService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">NCLT & Insolvency Matters (IBC)</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Corporate disputes and insolvency proceedings require swift, decisive legal action. At RL Associates, we provide formidable representation before the National Company Law Tribunal (NCLT) and the National Company Law Appellate Tribunal (NCLAT). We represent Financial Creditors, Operational Creditors, Corporate Debtors, and Resolution Professionals, navigating the complex, strict timelines of the Insolvency and Bankruptcy Code (IBC) and the Companies Act to protect your commercial interests and maximize asset value.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Insolvency & Bankruptcy (IBC):</strong> Initiating and defending Corporate Insolvency Resolution Processes (CIRP) under Sections 7, 9, and 10 of the IBC.</li>
          <li><strong>Committee of Creditors (CoC) Advisory:</strong> Guiding creditors through the resolution process, evaluating resolution plans, and ensuring commercial wisdom is upheld.</li>
          <li><strong>Oppression & Mismanagement:</strong> Representing majority and minority shareholders in complex corporate governance disputes under Sections 241 and 242 of the Companies Act, 2013.</li>
          <li><strong>Corporate Restructuring:</strong> Facilitating Mergers, Amalgamations, and Demergers (Sections 230-232), and securing statutory scheme approvals from the Tribunal.</li>
          <li><strong>Liquidation & Winding Up:</strong> Navigating voluntary and involuntary liquidation processes, managing stakeholder claims, and asset distribution.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Swiss Ribbons Pvt. Ltd. v. Union of India (2019)</h3>
            <p className="text-sm text-gray-300 mt-1">A monumental Supreme Court ruling that upheld the constitutional validity of the IBC in its entirety. It definitively shifted the narrative from "defaulter's paradise" to a creditor-in-control regime, emphasizing that the primary focus of the IBC is corporate resolution, not mere debt recovery.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">CoC of Essar Steel India Ltd. v. Satish Kumar Gupta (2019)</h3>
            <p className="text-sm text-gray-300 mt-1">The bedrock judgment establishing the absolute supremacy of the "commercial wisdom" of the Committee of Creditors (CoC). The Supreme Court ruled that the NCLT and NCLAT cannot interfere with or second-guess the CoC's business decisions regarding a resolution plan.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">M/s. Innoventive Industries Ltd. v. ICICI Bank (2017)</h3>
            <p className="text-sm text-gray-300 mt-1">The very first Supreme Court judgment interpreting the IBC. It laid down the strict criteria for admitting an insolvency petition, confirming that once a default of debt is established, the NCLT must admit the application, reinforcing the Code's rigid timelines.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Tata Consultancy Services v. Cyrus Investments Pvt. Ltd. (2021)</h3>
            <p className="text-sm text-gray-300 mt-1">A definitive ruling on corporate governance and shareholder rights. The Supreme Court clarified the high threshold required to prove 'oppression and mismanagement' under the Companies Act, stating that mere poor business decisions do not amount to oppression.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Strategic Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Rooted in the strategic legal philosophy of Dr. Jagdish Kumar Prajapat, our firm approaches NCLT litigation with a deep understanding of corporate finance and statutory rigidity. Whether we are aggressively pursuing a defaulting debtor to initiate CIRP, or deploying defensive strategies to protect a viable company from hostile creditors, we engineer solutions that align with your ultimate commercial objectives.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Request Representation
          </a>
          <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}