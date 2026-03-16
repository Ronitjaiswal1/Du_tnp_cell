"use client";

import { useState } from "react";

const accordionItems = [
  {
    title: "Diverse Talent Pool",
    content:
      "Our students are selected via the most rigorous competitive examinations in the nation, ensuring only the sharpest minds enter our halls.",
  },
  {
    title: "Industry-Aligned Curriculum",
    content:
      "In collaboration with tech giants, our syllabus evolves annually to include Generative AI, IoT, and Cloud computing.",
  },
  {
    title: "Legacy of Innovation",
    content:
      "DU graduates are known for their leadership qualities and foundational depth, making them invaluable assets in R&D and Management.",
  },
];

export function RecruiterFunnel() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-black" id="careers">
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative min-h-100 md:min-h-0">
        <div className="absolute inset-0 z-10 bg-maroon/40 mix-blend-overlay" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Lab Activity"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaD-wvE7BqN3BdB3-dK1rVn58yDIVKzvPaE6RgLA4M0mhB1ccxsLJP5uE6oC6agYtvsCEnoD5W5TgqX8s36aamZ8ByRDr_xblT8sCoDrVWAOfd5DoajN_xaezf64foHineKLVy7J8pZzVNZtiUrBUTDTjWHuCI70Kf-FvS2C7DdYL0Rwc5z1Jj0AceyjN7BV4y9IV2FOGdL17Ew2j0Myb0IddhNIJdJrYHcOq4_t3VXsG6grg8GnY-sEF_NzBXLFHC1CGlrpEj-g"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center p-8">
            <h2 className="font-serif text-5xl text-antique-white text-shadow-gold">The Pioneer Edge</h2>
            <p className="text-gold mt-4 font-mono tracking-widest uppercase">Research driven. Industry Ready.</p>
          </div>
        </div>
      </div>

      {/* Accordion Side */}
      <div className="w-full md:w-1/2 bg-antique-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="font-serif text-4xl text-maroon mb-12">Why Recruit From DU?</h2>
        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div key={item.title} className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                type="button"
              >
                <span className="text-xl font-serif text-maroon font-semibold">{item.title}</span>
                <span
                  className={`text-gold transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">{item.content}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button
            className="bg-maroon text-antique-white px-10 py-4 rounded-lg font-bold hover:bg-black transition-all"
            type="button"
          >
            Download Placement Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

