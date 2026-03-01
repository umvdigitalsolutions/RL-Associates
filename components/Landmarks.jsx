"use client";

import React, { useEffect, useState, useRef } from "react";

const defaultItems = [
  "Kesavananda Bharati v. State of Kerala (1973) — Supreme Court landmark establishing the Basic Structure Doctrine.",
  "Vishaka v. State of Rajasthan (1997) — Supreme Court guidelines originating from Rajasthan regarding workplace safety.",
  "Justice K.S. Puttaswamy v. Union of India (2017) — Supreme Court landmark declaring the Right to Privacy as a fundamental right.",
  "Shreya Singhal v. Union of India (2015) — Supreme Court landmark striking down Section 66A of the IT Act, protecting digital free speech.",
  "Cadila Health Care Ltd. v. Cadila Pharmaceuticals (2001) — Supreme Court landmark on trademark passing off and deceptive similarity.",
  "Toyota Jidosha Kabushiki Kaisha v. Prius Auto Industries (2018) — Supreme Court landmark establishing the 'territoriality principle' for trans-border trademark reputation.",
  "Nandhini Deluxe v. Karnataka Coop. Milk Producers (2018) — Supreme Court ruling that trademark registration does not grant an absolute monopoly over an entire class of goods.",
  "Bajaj Auto Ltd. v. TVS Motor Co. Ltd. (2009) — Supreme Court directive for expedited Intellectual Property dispute resolutions.",
  "Pernod Ricard India v. Karanveer Singh (2025) — Recent Supreme Court landmark on trademark infringement, the anti-dissection rule, and deceptive similarity.",
  "Nirmala Kabra v. Registrar of Trademarks (2025) — Recent Rajasthan High Court ruling declaring the speedy disposal of trademark applications a Fundamental Right under Article 21."
];

export default function Landmarks({ speed = "30s", sizeClass = "w-80 sm:w-96 md:w-[48rem] h-44 sm:h-56" }) {
  const [items, setItems] = useState(defaultItems);
  const [source, setSource] = useState("default");
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // parse duration like "14s" into seconds
  const durationSeconds = (() => {
    if (typeof speed === "string" && speed.endsWith("s")) return parseFloat(speed) || 18;
    const n = Number(speed);
    return isNaN(n) ? 18 : n;
  })();

  useEffect(() => {
    // Try to fetch live data from the public folder. Fall back to defaults on error.
    let mounted = true;
    fetch("/landmarks.json", { cache: "no-cache", mode: "same-origin" })
      .then((res) => {
        if (!res.ok) throw new Error("no data");
        return res.json();
      })
      .then((data) => {
        console.log("landmarks fetched:", data);
        if (!mounted) return;
        if (Array.isArray(data) && data.length > 0) {
          setItems(data);
          setSource("live");
        }
      })
      .catch((err) => {
        console.error("failed to fetch landmarks.json", err);
        if (!mounted) return;
        setSource("default");
      });

    return () => {
      mounted = false;
    };
  }, []);

  // auto-scroll implementation using requestAnimationFrame for smooth looping
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    console.log('landmarks container sizes before scroll', {
      clientHeight: el.clientHeight,
      scrollHeight: el.scrollHeight,
      itemsLength: items.length,
    });

    // ensure initial scrollTop within first half
    el.scrollTop = 0;

    let rafId;
    let lastTime = null;

    const step = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        const half = el.scrollHeight / 2 || 1;
        const rate = half / Math.max(0.1, durationSeconds); // px per second
        const dy = (rate * delta) / 1000;
        el.scrollTop = el.scrollTop + dy;
        if (el.scrollTop >= half) {
          el.scrollTop = el.scrollTop - half;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [items, isPaused, durationSeconds]);

  // duplicate items for smooth looping
  const loopItems = [...items, ...items];

  return (
    <section id="landmarks" className="mt-10">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center">Landmark Judgments</h2>
        <span className="text-xs text-gray-300">{source === "live" ? "(live)" : "(default)"}</span>
      </div>

      <div
        className={`mt-4 marquee rounded-lg border border-white/10 bg-white/5 dark:bg-white/3 p-0 overflow-hidden ${sizeClass}`}
        style={{ ["--marquee-duration"]: speed }}
        aria-label="Landmark judgments scrolling list"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* left image - top on small, left on md+ */}
          <div className="w-full md:w-1/2 h-44 sm:h-56 md:h-full overflow-hidden">
            <img
              src="/jh.jpg"
              alt="judge"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* right scrolling content */}
          <div
            className="w-full md:w-1/2 p-4 h-44 sm:h-56 md:h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={containerRef}
              className="h-full overflow-hidden"
              aria-hidden={false}
            >
                <div style={{ minHeight: "200%" }}>
                  {loopItems.map((it, i) => (
                    <div key={i} className="text-gray-900 dark:text-gray-200 text-sm sm:text-base px-2 py-1.5 border-b border-white/5 last:border-0">
                      {it}
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}