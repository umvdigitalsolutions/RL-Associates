import Link from "next/link";

export default function IPRService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">Intellectual Property Rights (IPR)</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          In today’s fiercely competitive and highly digital market, your intellectual property is often your most valuable business asset. At RL Associates, we provide end-to-end IPR services—from securing robust registrations to fiercely litigating infringement claims. Whether protecting a corporate brand identity, a groundbreaking invention, or original creative works, we ensure your intangible assets are legally fortified against unauthorized use and exploitation.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Practice Areas</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Trademark Prosecution & Litigation:</strong> Conducting clearance searches, filing applications, handling registry objections/oppositions, and litigating passing-off and infringement suits.</li>
          <li><strong>Copyright Protection:</strong> Securing registrations for software, literature, artistic works, and prosecuting piracy and copyright violations.</li>
          <li><strong>Patent Advisory & Filing:</strong> Advising on patentability, drafting specifications, and navigating complex patent prosecutions and infringement defenses.</li>
          <li><strong>Design Rights:</strong> Registering industrial designs and protecting the unique aesthetic aspects of products from imitation.</li>
          <li><strong>IP Licensing & Assignments:</strong> Drafting and negotiating robust IP transfer agreements, licensing structures, and franchise agreements to monetize your IP assets safely.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Cadila Health Care Ltd. v. Cadila Pharmaceuticals (2001)</h3>
            <p className="text-sm text-gray-300 mt-1">The bedrock Supreme Court judgment on trademark passing off and deceptive similarity. It laid down the definitive test for determining confusion between marks, particularly enforcing a stricter standard for medicinal and pharmaceutical products.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Toyota Jidosha Kabushiki Kaisha v. Prius Auto Industries (2018)</h3>
            <p className="text-sm text-gray-300 mt-1">A massive ruling establishing the "territoriality principle" in India. The Supreme Court held that to claim trans-border reputation, a multinational brand must prove it has acquired substantial goodwill and reputation specifically within the Indian market.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Bajaj Auto Ltd. v. TVS Motor Co. Ltd. (2009)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly critical Supreme Court directive addressing the crippling delays in IP litigation. The Court mandated that intellectual property matters, especially those involving temporary injunctions, must be expedited and decided on a day-to-day basis.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Pernod Ricard India v. Karanveer Singh (2025)</h3>
            <p className="text-sm text-gray-300 mt-1">A recent and highly relevant Supreme Court landmark reaffirming the "anti-dissection rule." The court ruled that composite trademarks must be compared as a whole, preventing infringers from breaking down marks to deny deceptive similarity.</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Strategic Enforcement Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Led by the meticulous legal frameworks established by Dr. Jagdish Kumar Prajapat, our firm recognizes that an unprotected brand is a vulnerability. We take a proactive approach, securing injunctions swiftly to halt infringement the moment it occurs. We combine sharp commercial awareness with deep technical IP knowledge to not only protect what is yours, but to enhance the market valuation of your business through solid IP portfolios.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition duration-200">
            Consult on IP Matters
          </a>
          <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center hover:bg-adv-navy hover:text-white transition duration-200">
            Call Office
          </a>
        </div>
      </section>
    </main>
  );
}