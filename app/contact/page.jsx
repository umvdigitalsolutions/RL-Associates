import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-lg">
        <h1 className="text-3xl font-bold text-adv-navy text-center">Contact RL Associates</h1>
        <p className="mt-3 text-center text-sm text-gray-300">Professional legal counsel — get in touch for confidential consultation.</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-lg p-4 sm:p-6 border border-white/10 bg-white/3">
              <h2 className="text-lg font-semibold text-adv-navy">Office</h2>
              <p className="mt-2 text-sm text-gray-300">RL Associates, Near (landmark), Jodhpur, Rajasthan, India</p>
              <p className="mt-2 text-sm text-gray-300">Phone: <a href="tel:+91-7568959609" className="text-adv-navy">+91-7568959609</a></p>
              <p className="mt-1 text-sm text-gray-300">Email: <a href="mailto:info@rlassociates.example" className="text-adv-navy">info@rlassociates.example</a></p>
            </div>

            <div className="rounded-lg p-4 sm:p-6 border border-white/10 bg-white/3">
              <h2 className="text-lg font-semibold text-adv-navy">Hours</h2>
              <p className="mt-2 text-sm text-gray-300">Mon — Fri: 10:00 AM — 6:00 PM</p>
              <p className="mt-1 text-sm text-gray-300">Sat: By appointment</p>
            </div>

            <div className="rounded-lg p-4 sm:p-6 border border-white/10 bg-white/3">
              <h2 className="text-lg font-semibold text-adv-navy">Confidential Consultation</h2>
              <p className="mt-2 text-sm text-gray-300">For sensitive matters, request a discreet initial call or in-person meeting.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a href="mailto:info@rlassociates.example" className="inline-block w-full sm:w-auto bg-adv-gold text-white px-4 py-2 rounded-md text-center">Email Us</a>
                <a href="tel:+91-7568959609" className="inline-block w-full sm:w-auto border border-adv-navy px-4 py-2 rounded-md text-adv-navy text-center">Call Office</a>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-gradient-to-br from-white/3 to-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
            <div>
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" name="name" className="mt-2 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adv-gold" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" name="email" className="mt-2 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adv-gold" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Phone (optional)</label>
              <input type="tel" name="phone" className="mt-2 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adv-gold" placeholder="+91-" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea name="message" rows="5" className="mt-2 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adv-gold" placeholder="Briefly describe your matter"></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <button type="submit" className="inline-block w-full sm:w-auto bg-adv-navy text-white px-5 py-2 rounded-md font-medium text-center">Send Message</button>
              <Link href="/privacy" className="text-sm text-gray-400">Privacy & Confidentiality</Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
