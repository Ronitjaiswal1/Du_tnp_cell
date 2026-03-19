"use client";

import { useEffect, useRef } from "react";

const departmentsHtml = `
<main class="max-w-7xl mx-auto px-6 py-12 bg-slate-50">
  <section class="mb-16">
    <h1 class="serif-title text-5xl md:text-7xl text-brand-maroon mb-4">Academic Departments</h1>
    <p class="text-xl text-slate-600 max-w-2xl">Discover our specialized engineering tracks, state-of-the-art curriculum, and the distinguished faculty shaping the next generation of technology leaders.</p>
  </section>

  <div class="flex flex-nowrap gap-3 mb-12 bg-antique-white py-4 px-3 rounded-xl border border-maroon/20 overflow-x-auto hide-scrollbar">
    <a class="dept-nav-tab dept-nav-tab-active px-6 py-3 rounded-full font-bold shadow-md flex items-center gap-2 whitespace-nowrap text-sm md:text-base" data-target="cse-department" href="#cse-department">
      Computer Science Engineering
    </a>
    <a class="dept-nav-tab px-6 py-3 rounded-full font-bold flex items-center gap-2 whitespace-nowrap text-sm md:text-base" data-target="ece-department" href="#ece-department">
      Electronic and Communication Engineering
    </a>
    <a class="dept-nav-tab px-6 py-3 rounded-full font-bold flex items-center gap-2 whitespace-nowrap text-sm md:text-base" data-target="ee-department" href="#ee-department">
      Electrical Engineering
    </a>
  </div>

  <div class="space-y-32">
    <section class="space-y-12 reveal-on-scroll" id="cse-department">
      <div class="flex items-center justify-between border-b-2 border-brand-gold pb-4">
        <h2 class="serif-title text-4xl text-brand-maroon">Computer Science &amp; Engineering (CSE)</h2>
        <span class="text-brand-gold font-bold tracking-widest uppercase text-sm">Est. 2023</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[650px]">
        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-slate-900 text-white p-8 flex flex-col justify-end">
          <img alt="Artificial Intelligence and Machine Learning" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgeOGldU06gQEnU-pE0V11zmiOCsfw-p_bINu33yy0ysKnN7eykA-hShNfFsIZO98Yvs6lt8BLDBKhboeHHBCFgvoizCDyfqGGPSNOIJJX-cYX2102A8DaBqgLyzMNIigq6sTo4XmS9UcPwIXgWDnX1c63Oqagdf2Vs7PYIZPJ_1sMkCHnyn_T1IIF79XuP29R0W9nw_3PUwpvIrdS_KVvdH5MPyyxcxhvDP47lMQ_rU9OF3Vb9r-uRLPo_Nj1rHp0ImdOSNVCyvc8" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-2">Artificial Intelligence &amp; ML</h3>
            <p class="text-red-100/80 mb-6">Deep Learning, Neural Networks, and Advanced Predictive Analytics at scale.</p>
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
              <div>
                <h4 class="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">Career Paths</h4>
                <ul class="text-xs space-y-1 text-slate-200">
                  <li>• Machine Learning Engineer</li>
                  <li>• AI Research Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 relative group overflow-hidden rounded-xl bg-slate-900 text-white p-8 flex flex-col justify-end hover:shadow-xl transition-all">
          <img alt="Cyber Security Interface" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqSC940Obaq2kAzPR9t10d2T1Fpy44zIN6dsQ-HCSfu7rjKg45B2N9JENPEBJTJbUdaTH7wcud4LUl9lBqPRb6wW1rXW92ejMWvEqTxkdjNNMy2mMQT7XtpZApVhMT9btqNC8JLVHwQF4uZsLutiIbNx3t7rXacCtAN1xVqvuKFmSiPi3rnHjz2xUlw2BUZ-NkcBZWfmW9gE17bL2dKAlMv0y6HLjxLB83fz5NhnVFutsWSGGfVyMBNx_q_aV_aX86IOy4a54TLGzT" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-maroon/95 via-slate-900/40 to-transparent"></div>
          <div class="relative z-10">
            <div class="mb-4">
              <span class="px-3 py-1 bg-brand-gold text-brand-maroon rounded-full text-xs font-bold uppercase tracking-widest">Cryptography</span>
            </div>
            <h3 class="text-3xl font-bold mb-2 text-white">Cyber Security &amp; Blockchain</h3>
            <p class="text-slate-200 text-sm max-w-md mb-4">Forensics and network defense protocols for enterprise systems.</p>
            <div class="grid grid-cols-2 gap-4 pt-3 border-t border-white/20">
              <div>
                <h4 class="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Career Paths</h4>
                <ul class="text-[11px] space-y-0.5 text-slate-100">
                  <li>• Cybersecurity Engineer</li>
                  <li>• Blockchain Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 relative group overflow-hidden rounded-xl bg-slate-800 text-white p-6 flex flex-col justify-end">
          <img alt="Data Science Visuals" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-E1FcpJeIqjn73NkBzoH53ryjZEY46aRgWpuA-05jq_noIv_S0dQHQBHjzxyKui8djsC_1DLjX9WlnzBpjejLkmBYqzCVT4bFyOgNt0pk1ANmphDtiEHjwjPkLA9tGFo7HMibPH15PgZu-bZxu3A_bXP8dumuwBMgfDzAH03W5WecBy4ois06lyW9oA0eMCYNwIj_CAGiMKDlP60xAqJDgfSWuA31szKe4vXdKkDajpmd-xHL22qGdUJtpf-th4Joq0GYZoJLwH3" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-maroon/90 to-transparent"></div>
          <div class="relative z-10">
            <div class="flex flex-col items-center text-center mb-4">
              <span class="material-symbols-outlined text-brand-gold text-2xl mb-1">database</span>
              <h4 class="font-bold">Data Science</h4>
            </div>
            <div class="pt-2 border-t border-white/20">
              <h5 class="text-brand-gold text-[10px] font-bold uppercase mb-1">Roles</h5>
              <ul class="text-[10px] space-y-0.5 text-slate-100">
                <li>• Data Scientist</li>
                <li>• Data Analyst</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 relative group overflow-hidden rounded-xl bg-slate-900 text-white p-6 flex flex-col justify-end">
          <img alt="Modern Code Editor" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOc7395HAXfOnHXZecKQgX298FAG0u5j1jC9XoHwD1OFhk8RVySZ4Box5zCZRMUVGPzpF-qmYQMY2xBA5BPI53SLRtfksqly-TJ2Ffyr7uRq405CGHJ546JO_R2pGK0lpqotLK9jLVLAsa_6s_7EjUtBc05yA43LC6m8QnMR_oJEXb0UG4FLAtxN-_n0JhBD2NQRaf6YQgpYIrshwHNy8fT1VmeR4T-cLBfVP3QdGfVHB-tBwW4Vw9mrmf-zi2ODzwfkJsde9Lq2NZ" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div class="relative z-10">
            <div class="flex flex-col items-center text-center mb-4">
              <span class="material-symbols-outlined text-brand-gold text-2xl mb-1">code</span>
              <h4 class="font-bold">Software Eng.</h4>
            </div>
            <div class="pt-2 border-t border-white/20">
              <h5 class="text-brand-gold text-[10px] font-bold uppercase mb-1">Roles</h5>
              <ul class="text-[10px] space-y-0.5 text-slate-100">
                <li>• Software Developer</li>
                <li>• Backend Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="flex items-end justify-between">
          <h3 class="serif-title text-3xl text-brand-maroon">CSE Faculty</h3>
          <a class="text-brand-maroon font-bold hover:underline" href="#">View All</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <img alt="Dr. Juhi Jain" class="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md group-hover:border-brand-gold transition-colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuR1GOxOwL0OqCV6BHHSRhJJ5F_Fnfue87aRlbqmN-l34fd8OvJsfW7UaxYlN8qmw3NatY4wwFqlAKN26wMhdfsAq7rq5eg0ceYmaAJMcNRAuEpNtiQ402zFKpLAg4ttdribk1EdyBCihIt3yVzMshYM4b8lpHgc0ccMDWrscPyR6v0pdFKsdXSLP-E6LTpf13PZW7fvLnuTXHxS2Drl79DiZJvA3TKRdU98p-zzfWKXXUiHH-4R7uG2HY55rpMQ9kNBWZF2fOAFW2" />
            <h4 class="mt-4 font-bold text-lg text-brand-maroon">Dr. Juhi Jain</h4>
            <p class="text-slate-500 text-sm">Assistant Professor (CSE)</p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-12 reveal-on-scroll" id="ece-department">
      <div class="flex items-center justify-between border-b-2 border-brand-gold pb-4">
        <h2 class="serif-title text-4xl text-brand-maroon">Electronics &amp; Communication (ECE)</h2>
        <span class="text-brand-gold font-bold tracking-widest uppercase text-sm">Est. 2023</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[650px]">
        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-brand-maroon text-white p-8 flex flex-col justify-end">
          <img alt="VLSI Semiconductor Circuit Board" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-moJ1YoVLTYwGuANRQUdhsUlSRBdd8fpfdPbbecUpwAw6qvi4TjPzIgz2YO2qgjE9bcAMsC55lC2J9QfAM8dscT_DQvXxh_P498-tV9JmsRZPefl-4kFEllNWtj52Aezb1N0q05ErKSxw2tPsoF2PFVbsHTxTmVlAnxdVjWlZxBiS-IvRN81cYDCtRwgbuvtTrlMq7Qh3ZfMFRVIP2_zSGxqix8vI5NY0BFRQeULG_xNDnPIZslO4rPng_-e4D1YjOykv5-FS5kJh" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-maroon/95 via-brand-maroon/20 to-transparent"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-2">VLSI Technology</h3>
            <p class="text-red-100/80 mb-6">Next-generation silicon architecture and high-performance semiconductor systems.</p>
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
              <div>
                <h4 class="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">Career Paths</h4>
                <ul class="text-xs space-y-1 text-slate-200">
                  <li>• VLSI Design Engineer</li>
                  <li>• Chip Design Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 relative group overflow-hidden rounded-xl bg-white border border-slate-200 p-8 flex flex-col justify-end hover:shadow-xl transition-shadow">
          <img alt="5G Telecommunication Towers" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPrl8CNq9cXNDpnIYm7Gqd6up_1ym68qh-j-xu7dytXvg1w0xn-V71TdzlfU01U-sDC_Ye6RiBO6cQEAl1fEj8elXOycjJGCcLQ7SzZ-U8qiZP1n0hgsHIM_LEh-f_vmX_0C21kOUHLIe-usfxd11AInIODat7-nikAkKsKLBVb-XtkmmcgqcuUOWPEJvML3iafEtwJjLH04zmanoYfoAh-dgU58aYsPNuyp-Zl2Qv4AtmmOJICPSIJvGwCWWojgrbfccjE3Z8t7rN" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"></div>
          <div class="relative z-10 text-white">
            <h3 class="text-3xl font-bold mb-2">Telecommunication Networks</h3>
            <p class="text-slate-200 text-sm max-w-md mb-4">Ultra-wideband communication and advanced signal processing for future mobility.</p>
            <div class="flex items-center gap-6 pt-4 border-t border-white/20">
              <div>
                <h4 class="text-brand-gold text-xs font-bold uppercase mb-2">Roles Prepared For</h4>
                <ul class="text-xs flex gap-4 text-slate-100">
                  <li>• Network Engineer</li>
                  <li>• Wireless Systems Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 relative group overflow-hidden rounded-xl bg-slate-100 p-6 flex flex-col justify-end">
          <img alt="IoT Smart Home Connectivity" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbtrm5lvZFSpG53NTOCyER2r1mEEMRs0mrDGN49IWQxxaJ5K85FpmejXWVrd8VjNTAoZOnm0yRhgwK5TUgTbQzqUZFXx-33cqgAOiC6h2Pd2JmffH6UMm2imI3MVenDhnT-w4pBqCP-pXlxfCvQkOSXPIgrCNz8wI_lVfWiJKUqBFOQ4_2hW3ZCY9ZUmB6giLjuKHN7_-VxwykUYk8slrC6-Gsi7f6a1UkMeow6zHqaQmzmHZL1RewrAD26Jq20nXGg4rB0z7DF5UT" />
          <div class="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent"></div>
          <div class="relative z-10 text-center">
            <div class="flex flex-col items-center mb-4">
              <span class="material-symbols-outlined text-brand-maroon text-2xl mb-1">router</span>
              <h4 class="font-bold text-slate-900">IoT Systems</h4>
            </div>
            <div class="pt-2 border-t border-slate-200">
              <h5 class="text-brand-maroon text-[10px] font-bold uppercase mb-1">Roles</h5>
              <ul class="text-[10px] space-y-0.5 text-slate-700 font-medium">
                <li>• Embedded Systems Engineer</li>
                <li>• IoT Developer</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 relative group overflow-hidden rounded-xl bg-slate-900 text-white p-6 flex flex-col justify-end">
          <img alt="Computer Vision Processing" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6hSglkOIh0zQOJk6OI-wLqZUqNTiZOOUak_yWk8vZjbwxr_4aMiGQGBdxEFA-V5y78XK_Qkor5DOAcbsLUbhGzma9qEm8vMDk-K9PuRuG06idLifjAbQeBSWI1GKzXlwLorjCcxtyUvrpceuyUAKTB2RNCxBl1jglED7fKKjtwcyKxtuQD3ulQ6SWqNfLs19PhkiPGPm4mkIZaUszAgNSE7e9R6IOO9dLCRL-z-KP1wzCztV33hFgdhv8qAitckdOhpGT8kY7-jeS" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 to-transparent"></div>
          <div class="relative z-10 text-center">
            <div class="flex flex-col items-center mb-4">
              <span class="material-symbols-outlined text-brand-gold text-2xl mb-1">microchip</span>
              <h4 class="font-bold">Computer Vision</h4>
            </div>
            <div class="pt-2 border-t border-white/20">
              <h5 class="text-brand-gold text-[10px] font-bold uppercase mb-1">Roles</h5>
              <ul class="text-[10px] space-y-0.5 text-slate-100">
                <li>• Vision AI Engineer</li>
                <li>• Image Processing Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="flex items-end justify-between">
          <h3 class="serif-title text-3xl text-brand-maroon">ECE Faculty</h3>
          <a class="text-brand-maroon font-bold hover:underline" href="#">View All</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center text-slate-400 group-hover:border-brand-gold transition-colors">
              <span class="material-symbols-outlined text-4xl">person</span>
            </div>
            <h4 class="mt-4 font-bold text-lg text-brand-maroon">Dr. Khuswant Sehra</h4>
            <p class="text-slate-500 text-sm">Associate Professor (ECE)</p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-12 reveal-on-scroll" id="ee-department">
      <div class="flex items-center justify-between border-b-2 border-brand-gold pb-4">
        <h2 class="serif-title text-4xl text-brand-maroon">Electrical Engineering (EE)</h2>
        <span class="text-brand-gold font-bold tracking-widest uppercase text-sm">Est. 2023</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[650px]">
        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-slate-900 text-white p-8 flex flex-col justify-end">
          <img alt="Robotics And Automation Interface" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAty6zx5R50gYo_9phBHjjvhYwkAfLhSss343cQuihopzm3iuQrtTjRCbwLG3EutYpAeZ_jq-b3Kh_wjM_V6KjUOv74kb6AENiWpPi7J0h5nUK_5dyzKcki2Dx-B4uGV4Dpd1HLkcwkFP6x20MtjUS0EJdEKwGOxcHceX3tQHI5830oqhAHmRB6a9brx6d7Nv-pAJLrwpUvzNWcdMFHTYV4O1-r8xceGYNP23wWtcXa2WHWgBv9-N5ugwMbfNxr_WR8mPAstu2EdO9R" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-maroon/95 via-black/30 to-transparent"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-2">Robotics &amp; Automation</h3>
            <p class="text-red-100/80 mb-6">Intelligent power distribution and automation using real-time sensor integration.</p>
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
              <div>
                <h4 class="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">Career Paths</h4>
                <ul class="text-xs space-y-1 text-slate-200">
                  <li>• Robotics Engineer</li>
                  <li>• Automation Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 relative group overflow-hidden rounded-xl bg-white border border-slate-200 p-8 flex flex-col justify-end hover:shadow-xl transition-shadow">
          <img alt="Electric Vehicle Battery Technology" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrVnATb8LQPsBDz_XIoQmNG2D-ilJ31TqnOQoPK0SGunLySc4ZIodAV_iw_MJ3Nq-b7OcxDKbD7f8nI8w--hhu90oanwVKYGVECx63jvHc_NQTblWnvsQA0blifeFdoTUU49VjyNWT8LDYZT9LcvtWpjz1NGRAt-0iT8WUkyCEFgwu6JPz1lsppkkiVQOTkgkHY48HhRMvd29WHoDXLfoL6eJzeiMkZD2Fp75n9PH2rTa40e1vBlTDMD3jbDx__cacHOCB5KRaLivy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"></div>
          <div class="relative z-10 text-white">
            <h3 class="text-3xl font-bold mb-2">EV Technology</h3>
            <p class="text-slate-200 text-sm max-w-md mb-4">Advanced battery management and propulsion systems for electric mobility.</p>
            <div class="flex items-center gap-6 pt-4 border-t border-white/20">
              <div>
                <h4 class="text-brand-gold text-xs font-bold uppercase mb-2">Career Paths</h4>
                <ul class="text-xs flex gap-4 text-slate-100">
                  <li>• EV Systems Engineer</li>
                  <li>• Power Electronics Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 relative group overflow-hidden rounded-xl bg-slate-800 text-white p-6 flex flex-col justify-end">
          <img alt="Renewable Wind Turbines" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD0IHOJkewSMWJXSffuNx8PwbdqaF8bwxz3mjIHZio-_wu2DRI4vQ7IgyAVUA3jLnHgR61J-LInW8sBGYM3f9SrCXktPPNz4P5gi00o_nCW7eKsw2WLcrUDkttpgP_FeTjXNNS5HB5w6Vd5y3TeELwIzoVV-_GQyTfzdJM-hL4jszA3feZREj3P7f7kgMzM4zS8hidg_dmiaNc0PRqQfTAkUxSJohliKwWDnz1zTXzTFd4rD4tLf3JQuvUBmWavmT9BJNYAkQbahHS" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-maroon/95 to-transparent"></div>
          <div class="relative z-10 text-center">
            <div class="flex flex-col items-center mb-4">
              <span class="material-symbols-outlined text-brand-gold text-2xl mb-1">energy_savings_leaf</span>
              <h4 class="font-bold text-sm">Sustainable Energy</h4>
            </div>
            <div class="pt-2 border-t border-white/20">
              <h5 class="text-brand-gold text-[10px] font-bold uppercase mb-1">Roles</h5>
              <ul class="text-[10px] space-y-0.5 text-slate-100 leading-tight">
                <li>• Energy Systems Engineer</li>
                <li>• Power Systems Engineer</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 relative group overflow-hidden rounded-xl bg-slate-900 text-white p-6 flex flex-col justify-end">
          <img alt="Industrial Automation Interface" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVpG9RfybOyrAAD0o4bnsQzcfq1p31vQQNIL6IM8Ez-sPsktBHvYesHrFBlDRMVBnhIsPCRRUI2UrvTgRpAshSwXHH4SoYp8Gh4t3cKe0BMDVX9t3mZ2RYI01AMIvXPxlDcGYkKgBGY6lz6qgW_QUx4gZX5kq1eqprVIAXnR8XFxY2ncYHz5b8s5x5UcFhCM-kU1Xw0BZ5C2alVwMEXJdkDty8PWZ_isFNru1jx1kxfoXHvAr2iCQTVSCy9DJ_qgQInWan336RsMbY" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent"></div>
          <div class="relative z-10 text-center">
            <div class="flex flex-col items-center mb-4">
              <span class="material-symbols-outlined text-brand-gold text-2xl mb-1">precision_manufacturing</span>
              <h4 class="font-bold">Control Systems</h4>
            </div>
            <div class="pt-2 border-t border-white/20">
              <h5 class="text-brand-gold text-[10px] font-bold uppercase mb-1">Roles</h5>
              <ul class="text-[10px] space-y-0.5 text-slate-100 leading-tight">
                <li>• Control Systems Eng.</li>
                <li>• Industrial Technologist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="flex items-end justify-between">
          <h3 class="serif-title text-3xl text-brand-maroon">EE Faculty</h3>
          <a class="text-brand-maroon font-bold hover:underline" href="#">View All</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center text-slate-400 group-hover:border-brand-gold transition-colors">
              <span class="material-symbols-outlined text-4xl">person</span>
            </div>
            <h4 class="mt-4 font-bold text-lg text-brand-maroon">Dr. Utkarsh</h4>
            <p class="text-slate-500 text-sm">Assistant Professor (EE)</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<footer class="bg-brand-maroon border-t-8 border-brand-gold">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8 py-12 max-w-7xl mx-auto">
    <div class="space-y-4">
      <div class="text-lg font-bold text-white uppercase tracking-widest">Faculty of Technology</div>
      <p class="text-slate-300 font-sans text-sm leading-relaxed">
        University of Delhi, North Campus,<br />
        Delhi - 110007, India
      </p>
      <div class="flex gap-4">
        <a class="text-brand-gold hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">mail</span></a>
        <a class="text-brand-gold hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">call</span></a>
        <a class="text-brand-gold hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
      </div>
    </div>

    <div class="space-y-4">
      <h4 class="text-brand-gold font-bold uppercase text-xs tracking-widest">Navigation</h4>
      <ul class="space-y-2 text-sm">
        <li><a class="text-slate-300 hover:text-white transition-colors" href="#">Quick Links</a></li>
        <li><a class="text-slate-300 hover:text-white transition-colors" href="#">Campus Info</a></li>
        <li><a class="text-slate-300 hover:text-white transition-colors" href="#">Contact Us</a></li>
        <li><a class="text-slate-300 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
      </ul>
    </div>

    <div class="space-y-4">
      <h4 class="text-brand-gold font-bold uppercase text-xs tracking-widest">For Recruiters</h4>
      <p class="text-slate-300 text-sm">Download the placement brochure for the batch of 2024-25.</p>
      <button class="w-full bg-brand-gold text-brand-maroon font-bold py-2 rounded hover:bg-yellow-500 transition-colors">
        Download Placement Brochure
      </button>
    </div>
  </div>
  <div class="border-t border-red-900/50 py-6 text-center">
    <p class="text-slate-400 text-xs">© 2024 Faculty of Technology, University of Delhi. All rights reserved.</p>
  </div>
</footer>
`;

export function DepartmentsReferenceContent() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = rootRef.current.querySelectorAll(".reveal-on-scroll");
    sections.forEach((section) => observer.observe(section));

    const navTabs = Array.from(rootRef.current.querySelectorAll<HTMLAnchorElement>(".dept-nav-tab"));
    const deptSections = Array.from(rootRef.current.querySelectorAll<HTMLElement>("#cse-department, #ece-department, #ee-department"));
    const dynamicCards = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>(
        "#cse-department .grid > div, #ece-department .grid > div, #ee-department .grid > div"
      )
    );
    const uploadableImages = Array.from(rootRef.current.querySelectorAll<HTMLImageElement>("img"));

    dynamicCards.forEach((card, index) => {
      card.classList.add("dept-dynamic-card");
      card.style.setProperty("--card-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    dynamicCards.forEach((card) => cardObserver.observe(card));

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handlePointerMove = (event: Event) => {
      if (reducedMotionQuery.matches) {
        return;
      }

      const pointerEvent = event as PointerEvent;
      const card = pointerEvent.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = pointerEvent.clientX - rect.left;
      const y = pointerEvent.clientY - rect.top;
      const rotateX = ((rect.height / 2 - y) / rect.height) * 8;
      const rotateY = ((x - rect.width / 2) / rect.width) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    };

    const handlePointerLeave = (event: Event) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = "";
    };

    dynamicCards.forEach((card) => {
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    const imageStorageKeyPrefix = "dept-upload-image-";
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    let activeImage: HTMLImageElement | null = null;

    const applyUploadedImage = (imageEl: HTMLImageElement, dataUrl: string) => {
      imageEl.src = dataUrl;
      imageEl.classList.add("user-uploaded-image");
    };

    const handleImageClick = (event: Event) => {
      activeImage = event.currentTarget as HTMLImageElement;
      fileInput.click();
    };

    const handleImageKeyDown = (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
        keyboardEvent.preventDefault();
        activeImage = keyboardEvent.currentTarget as HTMLImageElement;
        fileInput.click();
      }
    };

    uploadableImages.forEach((imageEl, index) => {
      const imageKey = imageEl.getAttribute("data-upload-key") ?? `image-${index}`;
      imageEl.setAttribute("data-upload-key", imageKey);
      imageEl.classList.add("uploadable-image");
      imageEl.title = "Click to upload a replacement image";
      imageEl.setAttribute("tabindex", "0");

      const savedImage = window.localStorage.getItem(`${imageStorageKeyPrefix}${imageKey}`);
      if (savedImage) {
        applyUploadedImage(imageEl, savedImage);
      }

      imageEl.addEventListener("click", handleImageClick);
      imageEl.addEventListener("keydown", handleImageKeyDown);
    });

    const handleFileChange = () => {
      const selectedFile = fileInput.files?.[0];
      if (!activeImage || !selectedFile || !selectedFile.type.startsWith("image/")) {
        fileInput.value = "";
        return;
      }

      const imageKey = activeImage.getAttribute("data-upload-key");
      if (!imageKey) {
        fileInput.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result !== "string") {
          return;
        }

        applyUploadedImage(activeImage as HTMLImageElement, reader.result);
        try {
          window.localStorage.setItem(`${imageStorageKeyPrefix}${imageKey}`, reader.result);
        } catch {
          // Ignore storage quota errors and still apply the uploaded image for this session.
        }
      };
      reader.readAsDataURL(selectedFile);
      fileInput.value = "";
    };

    fileInput.addEventListener("change", handleFileChange);

    const setActiveTab = (targetId: string) => {
      navTabs.forEach((tab) => {
        const tabTarget = tab.getAttribute("data-target");
        if (tabTarget === targetId) {
          tab.classList.add("dept-nav-tab-active");
        } else {
          tab.classList.remove("dept-nav-tab-active");
        }
      });
    };

    const handleTabClick = (event: MouseEvent) => {
      event.preventDefault();
      const tab = event.currentTarget as HTMLAnchorElement;
      const targetId = tab.getAttribute("data-target");
      if (!targetId) {
        return;
      }

      const targetSection = rootRef.current?.querySelector<HTMLElement>(`#${targetId}`);
      if (!targetSection) {
        return;
      }

      const yOffset = 110;
      const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
      setActiveTab(targetId);
    };

    navTabs.forEach((tab) => tab.addEventListener("click", handleTabClick));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveTab(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    deptSections.forEach((section) => sectionObserver.observe(section));

    return () => {
      navTabs.forEach((tab) => tab.removeEventListener("click", handleTabClick));
      deptSections.forEach((section) => sectionObserver.unobserve(section));
      sectionObserver.disconnect();
      dynamicCards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
      dynamicCards.forEach((card) => cardObserver.unobserve(card));
      cardObserver.disconnect();
      uploadableImages.forEach((imageEl) => {
        imageEl.removeEventListener("click", handleImageClick);
        imageEl.removeEventListener("keydown", handleImageKeyDown);
      });
      fileInput.removeEventListener("change", handleFileChange);
      fileInput.remove();
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: departmentsHtml }} />;
}
