import Link from "next/link";

export default function MACTService() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
        <Link href="/services" className="text-sm text-adv-navy hover:underline transition">
          ← Back to Services
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-adv-navy">MACT & Motor Accident Claims</h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          Motor vehicle accidents bring sudden, overwhelming trauma and financial strain to victims and their families. At RL Associates, we understand that pursuing a legal claim while recovering or grieving requires immense strength. We provide dedicated, compassionate representation before Motor Accident Claims Tribunals (MACT). We take the burden of complex litigation off your shoulders, taking on aggressive insurance companies to ensure you receive the maximum, rightful compensation for injuries, permanent disabilities, and fatal losses.
        </p>

        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-adv-navy">Comprehensive Services</h2>
        <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-2">
          <li><strong>Fatal Accident Claims:</strong> Filing for loss of dependency, loss of consortium, and estate claims on behalf of grieving family members.</li>
          <li><strong>Injury & Disability Claims:</strong> Meticulously calculating and claiming medical expenses, loss of future earning capacity, and compensation for pain and suffering.</li>
          <li><strong>Evidence & Documentation:</strong> Rigorous gathering of police reports (FIRs, charge sheets), medical records, disability certificates, and expert witness testimonies.</li>
          <li><strong>Hit-and-Run Cases:</strong> Navigating the special statutory provisions and solatium funds for accidents involving untraceable vehicles.</li>
          <li><strong>Appeals for Enhanced Compensation:</strong> Defending against allegations of contributory negligence and filing appeals in the High Court when the awarded compensation is inadequate.</li>
        </ul>

        {/* Key Landmark Judgments Section */}
        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Key Landmark Judgments</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Sarla Verma v. Delhi Transport Corporation (2009)</h3>
            <p className="text-sm text-gray-300 mt-1">The absolute cornerstone judgment for calculating MACT compensation. It standardized the multiplier method based on the victim's age and income, and clearly defined the deductions for personal and living expenses.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">National Insurance Co. Ltd. v. Pranay Sethi (2017)</h3>
            <p className="text-sm text-gray-300 mt-1">A monumental Constitution Bench ruling that revolutionized compensation by standardizing the addition of "future prospects" to the income of the deceased, including for self-employed individuals and those on fixed salaries.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Raj Kumar v. Ajay Kumar (2011)</h3>
            <p className="text-sm text-gray-300 mt-1">The definitive Supreme Court guide for assessing compensation in severe injury cases, laying down detailed principles for calculating the exact financial loss of future earning capacity based on the percentage of functional permanent disability.</p>
          </div>
          <div className="bg-white/10 border border-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-adv-navy text-sm sm:text-base">Magma General Insurance Co. Ltd. v. Nanu Ram (2018)</h3>
            <p className="text-sm text-gray-300 mt-1">A highly significant ruling that expanded the scope of "loss of consortium" to include 'spousal consortium', 'parental consortium' (for children losing a parent), and 'filial consortium' (for parents losing a child).</p>
          </div>
        </div>

        <h2 className="mt-8 text-lg sm:text-xl font-semibold text-adv-navy">Our Compassionate, Yet Aggressive Approach</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          Led by the meticulous legal strategy of Dr. Jagdish Kumar Prajapat, our firm combines deep empathy for our clients with unyielding courtroom advocacy. Insurance companies often deploy vast resources to minimize payouts. We counter this by building airtight, evidence-based claims, ensuring that your financial stability is restored and justice is served.
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