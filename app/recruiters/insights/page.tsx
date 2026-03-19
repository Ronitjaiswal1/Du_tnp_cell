/* eslint-disable @next/next/no-img-element */
import { RecruitersNav } from "@/components/recruiters/recruiters-nav";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata = {
  title: "Recruiter Insights | Faculty of Technology, University of Delhi",
  description:
    "Placement insights, recruiter feedback, and hiring statistics from leading companies recruiting at FoT, University of Delhi.",
};

const recruiterCards = [
  {
    name: "Google",
    sector: "Technology & Cloud Computing",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCkSMDAijKe_perY-EB_njdkluJjnFeelX8e0paJ_iDoh4uQdrRoQ85TegvNzN4yjoItBRxPm5VS1jKVnO8yaYPU0hvsIHQZE69M6RBdJj8y2QtwYIEbgQKz-2ekxF0LFo_jckEmdiw5I3m81ywirAln8EHvHzakjEJb-TxK7ek__nzbTGiFyh3b7KnrDeJa4timVz_1GPhGqrf8kSLHSp4O7PuzcS5b10Nss50Waq9vqZLoZC8-1wcVSkaMEwnDpLM8_GgbN66kRV",
    avg: "32.5 LPA",
    hires: "24",
    quote:
      "DU students demonstrate exceptional problem-solving skills and a strong foundation in CS fundamentals.",
    author: "HR Lead, University Relations",
    badge: "Top Recruiter",
    badgeClass: "bg-green-100 text-green-700",
  },
  {
    name: "Microsoft",
    sector: "Software & OS Development",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwUJ_VcTNkPo243h7kkm-XbbiRNjW8HYUKE0B0EU1BA57mBRl-AliELdk8A0_0Pq4UVVKPgYk0aoZHfBffUzlFN7e0typvSijWpDdwukcQUNQNzFwF6mBUQQn0-oFGxATSLecydTzWIKz-_NkCG3glBlzGqthdyS9n_tdhUCGqE5Jj0zcLAVIEFc7z02EjWbXlxLO2v2byoDwbUgs8nNnN-8NcB6uQWwMg7e1gT14tzf5AU4vj15-Dav-SQjFhowKic9sZBbCWV10A",
    avg: "28.4 LPA",
    hires: "18",
    quote:
      "The technical rigour at the Faculty of Technology translates directly into high-impact engineering work.",
    author: "Senior Director, Talent Acquisition",
  },
  {
    name: "Amazon",
    sector: "E-commerce & AWS",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwc9ISZ-hqOd4sWjQKtYsN20uhEizFI8ADQ1Jusdz_fX4X2kD77UZcX9GT8BbGy19F3_-yIn3hwT117pdoOYFKnPUEcxpaiHLzG0xaWSZIYWahpPyIcjit5CmO758sI3Rj68Ggqn8-s1iDacciKNnsYD6WgBlQWk4UGta6nNDi3AP9bLWz25IJtJKldv2vvyJZwFkSsl4EPtNFIHuNKMMNHSZ68kgzlbWwxatlhf6wZHwuKWfNdziNYApsZ4YO-gcIJSrDwl_1Sztp",
    avg: "26.0 LPA",
    hires: "42",
    quote:
      "Consistent performance across batches makes DU a primary destination for our SDE hiring pipeline.",
    author: "Tech Recruiting Partner",
    badge: "Mass Recruiter",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    name: "Goldman Sachs",
    sector: "FinTech & Investment Banking",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-z82QGlkJheiq6IgtXZLPQZsHI79mHQe3IZ5Fxjbg0IiGlwN_v6Rbv7Jeztd0xUxNhKhpHGxitTqdeQaB9yDqxV_RiiyeAWua3KvE0gmZt0HzLRydCc1cHMnWuWCTsRAEaw7cnCaK1opg18sLZ6UihHuAELixR7VOS-tydqtKlw5Tf4AuEkexVci1EISyp7x_xMBX4xCfE0ApCwYLMZbnlD12boB2gs2MxW9KDof7xaNfIlXP_MXQsO0_WcdC_OZ9zpqO1LRAST04",
    avg: "24.2 LPA",
    hires: "12",
    quote:
      "The analytical depth and quantitative skills of FoT students are world-class for financial roles.",
    author: "VP, Global Markets Recruiting",
  },
  {
    name: "Adobe",
    sector: "Software & Multimedia",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDByjFvLNZ9emEGNATuVo12aMEOoQ3nJmucGV6-oESoytlRxZCw-xiK6_siJvS22OHTcFhw__zR-P51flZtkmUoSC0ruMhzbiKqFK4gRbHyhotc_JUQN1RnnBrUoJFrKY_mw6R6nN3arHLT35H0mWj0rFTVTKsKXygLs83FCv9FALEK8eXKPnmgO5R1AbBSIIu4rPWIV0Vo33d7LtLeZ013j2kkGTHBBxHqRjHtFmJ6NbNK_QtdqShp01ecLIutHQMDJKr60Je_vnnk",
    avg: "27.8 LPA",
    hires: "15",
    quote:
      "We appreciate the diversity and technical creativity DU engineers bring to our product teams.",
    author: "Lead Product HR",
  },
  {
    name: "Atlassian",
    sector: "Team Collaboration Software",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuByuopX4VnDrvMD1jaLfuBNKNSpZJbOjB94DsGmXqMXUE0vcoHBRvnVYk4r7gvMuiHRp8mlQnGFuCy5eERAjurxaR3TfRl_YaMr6VM_QlG_YmwfOBbjxWe-dui6R0aTrOIZzD4JlTXZtopfD9fU_DegRXSxJGCM_vj-Q6V1TpOkMB6G8OsonQakFV0DwoMt0x7m02k3LmRKkvzJvm8QGwm0kUEkynoRy9MAwrPcGQCn3Mj2hNF2FWtnW2V8HGoxBFi_2QaW-yEV7Hj7",
    avg: "30.1 LPA",
    hires: "8",
    quote:
      "DU's emphasis on collaborative learning perfectly aligns with our culture of open communication.",
    author: "Senior Tech Recruiter",
  },
  {
    name: "NVIDIA",
    sector: "AI & Hardware Engineering",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiFkf0qRQvD9oo0Qr1oj8K7KT7fmtRv1z1qAbheKohnb-OS8sumA-OElUYcL60KJv7zPdHeZA2dA93BsFciCV4aYOJ4TtwNTcc3k0PHkLxuHRma0dy7swy287htbuR2s15-FoeDwzRHHGIATBlETOwE4ZG6vD-ff0MLs9yM_Nc4U5Nyadck5qUGHJxpO-PQjK3duYSmCQCV5BSA7cbKS8btGQayifHgTY9m4KzGfKVFAfn7yhLcuqr9XZOUlMh4vgnK7HxVOs1duIx",
    avg: "35.2 LPA",
    hires: "5",
    quote:
      "Exceptional talent in VLSI and AI research. FoT graduates are truly industry-ready for hardware tech.",
    author: "Global Talent Manager",
  },
  {
    name: "Zomato",
    sector: "Internet & Consumer Tech",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUcacG_SwVLhgJls7XAAZHYwTrBcw2qDoPOn1_1GLFwRJGpL5kljiWbkI3MJ32tqUXr6CuSOWTxKeKW3MV--y6wtbGfS8pTxKcsPBOLlkPTDSQMk7MeeiR-2WwfXDTTrCfkmFrWSWPLmBaW1bsGKmWAbyHcuwVgS5nrC3nF9lVIE6jVG-3wYsfBMSJFG2idse4x4S8ruykwYKQBc8C_-g0kA43_8p6nJMn5CbCFTXx-pyKInWPOEPcp3KnVMMLWSdszv6SkGTFMPCn",
    avg: "22.4 LPA",
    hires: "14",
    quote:
      "Speed and innovation are key for us, and DU engineers deliver both with high quality code.",
    author: "Head of Engineering",
  },
];

const tableRows = [
  { recruiter: "Google", avg: "32.5 LPA", median: "28.0 LPA", offers: "24", profile: "SDE-1" },
  { recruiter: "Microsoft", avg: "28.4 LPA", median: "24.5 LPA", offers: "18", profile: "Product Engineer" },
  { recruiter: "Amazon", avg: "26.0 LPA", median: "22.0 LPA", offers: "42", profile: "Cloud Associate" },
];

export default function RecruiterInsightsPage() {
  return (
    <main className="bg-[#f8f6f6] text-slate-900 min-h-screen">
      <RecruitersNav activePage="insights" />

      <div className="max-w-7xl mx-auto w-full px-6 py-8">
        <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
          <span className="text-slate-500">Home</span>
          <span className="text-slate-400">›</span>
          <span className="text-[#ae1320]">Recruiter Insights</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-[1.1]">
              Placement Insights & <br />
              <span className="text-[#ae1320]">Recruiter Feedback</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Explore detailed analytics, salary trends, and testimonials from our global hiring partners who value the technical
              excellence of DU graduates.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors" type="button">
              <span>⬇</span>
              Download Full Report
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#d4af37] text-white rounded-lg text-sm font-bold shadow-md hover:brightness-110 transition-colors" type="button">
              <span>◉</span>
              View Trends
            </button>
          </div>
        </div>

        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto whitespace-nowrap">
          <button className="px-6 py-3 border-b-2 border-[#ae1320] text-[#ae1320] font-bold text-sm" type="button">All Recruiters</button>
          <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-[#ae1320] font-bold text-sm" type="button">Fortune 500</button>
          <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-[#ae1320] font-bold text-sm" type="button">Tech Unicorns</button>
          <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-[#ae1320] font-bold text-sm" type="button">Recent Feedback</button>
          <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-[#ae1320] font-bold text-sm" type="button">High CTC</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {recruiterCards.map((card) => (
            <div key={card.name} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-40 bg-slate-100 p-8 flex items-center justify-center relative">
                <img alt={`${card.name} logo`} className="h-16 w-auto object-contain" src={card.logo} />
                {card.badge && (
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${card.badgeClass}`}>
                    {card.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{card.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{card.sector}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#f8f6f6] p-3 rounded-lg">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Avg Package</p>
                    <p className="text-[#ae1320] font-black">{card.avg}</p>
                  </div>
                  <div className="bg-[#f8f6f6] p-3 rounded-lg">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Hires &apos;23</p>
                    <p className="text-slate-900 font-black">{card.hires}</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <p className="italic text-slate-600 text-xs mb-3">&quot;{card.quote}&quot;</p>
                  <p className="text-[10px] font-bold text-slate-400">- {card.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#ae1320] rounded-2xl p-10 text-white mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-80 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-2">2023 Placement Season Highlights</h2>
              <p className="text-red-100/80 max-w-lg">Another record-breaking year with over 150+ companies visiting the campus.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-black mb-1">84 LPA</p>
                <p className="text-xs uppercase font-bold tracking-widest text-red-200">Highest Package</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black mb-1">18.5 LPA</p>
                <p className="text-xs uppercase font-bold tracking-widest text-red-200">Average CTC</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black mb-1">98%</p>
                <p className="text-xs uppercase font-bold tracking-widest text-red-200">Placed Students</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black mb-1">150+</p>
                <p className="text-xs uppercase font-bold tracking-widest text-red-200">Recruiters</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-[#ae1320]">◉</span>
            Detailed Package Comparison
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-3xl">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Recruiter</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Average CTC</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Median CTC</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Offers Made</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Top Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tableRows.map((row) => (
                    <tr key={row.recruiter}>
                      <td className="px-6 py-4 font-bold">{row.recruiter}</td>
                      <td className="px-6 py-4 text-[#ae1320]">{row.avg}</td>
                      <td className="px-6 py-4">{row.median}</td>
                      <td className="px-6 py-4">{row.offers}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">{row.profile}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <span className="text-[#ae1320] text-sm font-bold hover:underline cursor-pointer">View All 150+ Recruiter Data</span>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
