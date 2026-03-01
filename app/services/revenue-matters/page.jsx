import Link from "next/link";

export default function RevenueService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Revenue & Tenancy Matters</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Navigating the hierarchy of revenue courts and the complexities of land records requires highly specialized expertise. At RL Associates, we provide robust representation in revenue disputes, agricultural land matters, and tax assessments under state tenancy and land revenue acts. Whether you are dealing with a complex mutation dispute, agricultural partition, land conversion, or challenging arbitrary assessment notices, we offer strategic advocacy from the Tehsildar and SDO courts all the way to the Board of Revenue and the High Court.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Mutation & Land Records:</strong> Assisting with the correct entry, correction, and dispute resolution regarding Jamabandi, Khatauni, and mutation (Namantaran) records.</li>
          <li><strong>Agricultural Land Disputes:</strong> Representing clients in suits for the declaration of tenancy rights, partition of agricultural holdings, and eviction of trespassers.</li>
          <li><strong>Land Use & Conversion:</strong> Navigating statutory approvals for the conversion of agricultural land for commercial, residential, or industrial use (e.g., Section 90A matters).</li>
          <li><strong>Revenue Assessments & Appeals:</strong> Challenging arbitrary land tax assessments, stamp duty evasions, and penalty notices before appellate authorities.</li>
          <li><strong>Acquisition & Allotment:</strong> Advising on land allotment cancellations, regularizations, and representing landowners in compensation disputes during state land acquisition.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Jitendra Singh v. State of Madhya Pradesh (2021)</h3>
            <p className="text-sm text-gray-300 mt-1">A definitive Supreme Court judgment reiterating that mutation of a property in revenue records neither creates nor extinguishes title. Mutation is solely for fiscal purposes (payment of land revenue) and cannot be treated as a document of title.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Suraj Bhan v. Financial Commissioner (2007)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly critical ruling where the Supreme Court established that revenue authorities do not have the jurisdiction to decide complex questions of title; such disputes must be strictly adjudicated by a competent Civil Court.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Union of India v. Vasavi Cooperative Housing Society Ltd. (2014)</h3>
            <p className="text-sm text-gray-300 mt-1">A landmark decision concerning the burden of proof in declaratory suits. The Court held that a plaintiff cannot rely merely on revenue entries to prove ownership but must establish their case on the strength of their own registered title documents.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">H. Lakshmaiah Reddy v. L. Venkatesh Reddy (2015)</h3>
            <p className="text-sm text-gray-300 mt-1">An essential judgment clarifying that revenue entries made on the basis of a forged document or an unregistered partition deed are void, ensuring that rightful owners are protected from fraudulent transfers in government records.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Strategic Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Guided by the meticulous litigation strategies established by Dr. Jagdish Kumar Prajapat, our firm combines an encyclopedic knowledge of local revenue codes with relentless advocacy. We understand the bureaucratic hurdles of revenue departments. We cut through the red tape, ensuring that your ancestral rights, agricultural holdings, and commercial real estate investments are perfectly legally documented and fiercely protected.
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