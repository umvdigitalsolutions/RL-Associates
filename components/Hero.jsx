export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl p-12 shadow bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-white">RL Associates</h1>
          <p className="mt-4 text-lg text-zinc-100/90">
            Advocates & Legal Consultants — Led by Dr. Jagdish Kumar Prajapat.
          </p>
          <p className="mt-6 text-zinc-200">
            Trusted legal services across civil, criminal, corporate and
            regulatory matters. Practical counsel with a client-first approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block rounded-md bg-adv-gold px-6 py-3 text-white"
            >
              Get Consultation
            </a>
            <a
              href="/services"
              className="inline-block rounded-md border border-white/20 px-6 py-3 text-white/90"
            >
              Our Services
            </a>
          </div>
        </div>
          {/* photo removed as requested */}
      </div>
    </section>
  );
}
