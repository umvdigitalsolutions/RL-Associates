import React from "react";

export default function Stats() {
  return (
    <section id="stats" className="mt-10">
      <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-800/20 text-yellow-400 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c4 0 6 2 6 4v1H6v-1c0-2 2-4 6-4z" />
              </svg>
            </div>
            <div className="mt-3 text-2xl font-semibold text-white">15+</div>
            <div className="mt-1 text-sm text-gray-300">Years Experience</div>
          </div>

          <div className="p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-800/20 text-yellow-400 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v.01" />
              </svg>
            </div>
            <div className="mt-3 text-2xl font-semibold text-white">1200+</div>
            <div className="mt-1 text-sm text-gray-300">Cases Handled</div>
          </div>

          <div className="p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-800/20 text-yellow-400 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="mt-3 text-2xl font-semibold text-white">95%</div>
            <div className="mt-1 text-sm text-gray-300">Success Rate</div>
          </div>

          <div className="p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-800/20 text-yellow-400 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
              </svg>
            </div>
            <div className="mt-3 text-2xl font-semibold text-white">30+</div>
            <div className="mt-1 text-sm text-gray-300">Awards & Recognitions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
