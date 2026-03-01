import Link from "next/link";

export default function CorporateService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Corporate & Commercial Law</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          At RL Associates, we recognize that in today's dynamic business environment, legal strategy must align seamlessly with commercial objectives. We advise startups, established enterprises, and multinational corporations on complex commercial matters. From orchestrating Mergers & Acquisitions and optimizing corporate structuring to drafting ironclad commercial contracts and ensuring stringent governance, our guidance is highly practical. We aim to propel your business forward while proactively mitigating legal and regulatory exposure.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Mergers & Acquisitions:</strong> End-to-end support including due diligence, term sheets, and transaction documentation.</li>
          <li><strong>Corporate Governance:</strong> Drafting shareholder agreements, advising on board responsibilities, and preventing oppression and mismanagement disputes.</li>
          <li><strong>Commercial Contracts:</strong> Structuring and negotiating complex supply, distribution, licensing, and franchise agreements.</li>
          <li><strong>Restructuring & Insolvency:</strong> Strategic advisory on corporate restructuring, debt recovery, and compliance under the Insolvency and Bankruptcy Code (IBC).</li>
          <li><strong>Regulatory Compliance:</strong> Navigating FDI, FEMA regulations, and sector-specific statutory compliances.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Tata Consultancy Services v. Cyrus Investments Pvt. Ltd. (2021)</h3>
            <p className="text-sm text-gray-300 mt-1">A definitive Supreme Court judgment on corporate governance, detailing the thresholds for proving 'oppression and mismanagement' and clarifying the rights of minority shareholders.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Vodafone International Holdings BV v. Union of India (2012)</h3>
            <p className="text-sm text-gray-300 mt-1">A monumental ruling on cross-border taxation, corporate structuring, and the principles governing the lifting of the corporate veil in international M&A transactions.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">M/s. Innoventive Industries Ltd. v. ICICI Bank (2017)</h3>
            <p className="text-sm text-gray-300 mt-1">The landmark inaugural judgment by the Supreme Court interpreting the Insolvency and Bankruptcy Code (IBC), establishing the strict timeline and supremacy of the Code over state laws.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">BCCI v. Kochi Cricket Pvt. Ltd. (2018)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly significant ruling clarifying the applicability of the Arbitration and Conciliation Act amendments, crucial for resolving large-scale commercial contract disputes efficiently.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Why Clients Choose RL Associates</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Led by the foundational principles established by Dr. Jagdish Kumar Prajapat, our firm combines sharp commercial insight with deep technical legal expertise. We do not just flag risks; we engineer solutions. We structure deals and draft contracts that not only advance our clients' ambitious goals but also confidently withstand rigorous judicial and regulatory scrutiny.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Request Advice
          </a>
          <a href="tel:+91-XXXXXXXXXX" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}