import React from "react";

const quotes = [
  {
    quote:
      "Professional, thorough and always available. They guided us through a complex corporate matter with excellent results.",
    name: "Ramesh Sharma",
    role: "CEO, Sharma Industries",
  },
  {
    quote:
      "Exceptional advocacy and attention to detail. I felt supported every step of the way.",
    name: "Anita Gupta",
    role: "Private Client",
  },
  {
    quote:
      "Totally reliable team — pragmatic advice and strong courtroom presence.",
    name: "Karan Mehta",
    role: "Founder, Mehta Logistics",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">What Clients Say</h2>
        <p className="mt-2 text-gray-300">Client feedback and real outcomes from recent matters.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((q, idx) => (
          <div key={idx} className="rounded-lg border border-white/10 bg-white/3 p-6 text-left">
            <p className="text-gray-200">“{q.quote}”</p>
            <div className="mt-4">
              <div className="text-white font-semibold">{q.name}</div>
              <div className="text-sm text-gray-400">{q.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
