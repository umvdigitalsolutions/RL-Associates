import Link from "next/link";

export default function RealEstateService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Real Estate & Property Law</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          The Indian real estate sector is a high-stakes environment governed by a complex web of local land laws, municipal regulations, and strict federal statutes like RERA. At RL Associates, we provide end-to-end real estate legal services. From conducting bulletproof transactional due diligence for massive commercial acquisitions to fiercely litigating contentious title disputes and builder-buyer conflicts, we protect your property interests at every single stage of the investment lifecycle.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Due Diligence & Title Search:</strong> Conducting exhaustive 30-year title searches, securing Encumbrance Certificates (EC), and generating definitive Title Search Reports (TSR).</li>
          <li><strong>Transactional Conveyancing:</strong> Precision drafting of Sale Deeds, Lease Deeds, Joint Development Agreements (JDA), and Builder-Buyer Agreements.</li>
          <li><strong>RERA Compliance & Litigation:</strong> Representing homebuyers, societies, and developers before the Real Estate Regulatory Authority (RERA) and Appellate Tribunals (REAAT).</li>
          <li><strong>Property Litigation:</strong> Aggressive representation in title declaration suits, partition of ancestral property, boundary disputes, and adverse possession claims.</li>
          <li><strong>Land Registry & Mutation:</strong> Ensuring seamless property registration at the Sub-Registrar Office (SRO) and prompt mutation in municipal and revenue records.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Newtech Promoters and Developers Pvt. Ltd. v. State of UP (2021)</h3>
            <p className="text-sm text-gray-300 mt-1">A monumental Supreme Court ruling that upheld the constitutional validity of the Real Estate (Regulation and Development) Act, 2016 (RERA), confirming its retroactive application to "ongoing projects" and reinforcing homebuyer protections.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Imperia Structures Ltd. v. Anil Patni (2020)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly significant judgment establishing that the remedies available to homebuyers under RERA are in addition to, and not in derogation of, the remedies available under the Consumer Protection Act, giving allottees multiple avenues for justice.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Pioneer Urban Land and Infrastructure Ltd. v. Union of India (2019)</h3>
            <p className="text-sm text-gray-300 mt-1">A pivotal Supreme Court decision upholding the amendments to the Insolvency and Bankruptcy Code (IBC), granting real estate allottees (homebuyers) the powerful status of "Financial Creditors" against defaulting developers.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Suraj Lamp and Industries Pvt. Ltd. v. State of Haryana (2011)</h3>
            <p className="text-sm text-gray-300 mt-1">The bedrock of modern conveyancing law. The Court invalidated property sales executed merely through General Power of Attorney (GPA), Sale Agreement, and Will, mandating a registered Sale Deed for lawful transfer of title.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Strategic Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Led by the meticulous legal strategy of Dr. Jagdish Kumar Prajapat, our firm believes that the best way to win a property dispute is to prevent it from happening. We deploy rigorous due diligence to uncover hidden encumbrances before you invest. However, when litigation is unavoidable, we combine deep knowledge of local property laws with formidable courtroom advocacy to safeguard your most valuable assets.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Discuss Your Property Matter
          </a>
          <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}