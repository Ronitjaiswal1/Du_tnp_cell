import { RecruiterContactCard } from "../../components/recruiters/recruiter-contact-card";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/shared/site-nav";

export const metadata = {
  title: "Recruiters | Faculty of Technology, University of Delhi",
  description: "Partner with the Faculty of Technology, University of Delhi. Recruit top talent from India's premier engineering institute.",
};

export default function RecruitersPage() {
  return (
    <main className="bg-antique-white">
      <SiteNav activePage="recruiters" recruitersSubPage="contact" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-maroon/5 to-antique-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-serif mt-8 mb-6 text-maroon">
            Connect with Excellence
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Recruit talented engineers from the Faculty of Technology, University of Delhi. 
            Our graduates are industry-ready innovators equipped with cutting-edge skills.
          </p>
          <a
            href="#company-contact-form"
            className="inline-block px-8 py-3 bg-maroon text-antique-white text-lg font-semibold rounded-lg hover:bg-black transition-all shadow-lg"
          >
            Register as Recruiter
          </a>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 px-6 bg-antique-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-white border border-maroon/10 hover:border-maroon/30 transition-colors">
              <div className="text-4xl font-bold text-maroon mb-2">95%+</div>
              <p className="text-slate-600 font-semibold">Placement Rate</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border border-maroon/10 hover:border-maroon/30 transition-colors">
              <div className="text-4xl font-bold text-maroon mb-2">500+</div>
              <p className="text-slate-600 font-semibold">Corporate Partners</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border border-maroon/10 hover:border-maroon/30 transition-colors">
              <div className="text-4xl font-bold text-maroon mb-2">1000+</div>
              <p className="text-slate-600 font-semibold">Alumni Employed</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border border-maroon/10 hover:border-maroon/30 transition-colors">
              <div className="text-4xl font-bold text-maroon mb-2">4 LPA+</div>
              <p className="text-slate-600 font-semibold">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Recruit Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif text-maroon mb-12 text-center">Why Recruit from FoT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Ready Talent",
                description: "Students trained with latest technologies and real-world projects"
              },
              {
                title: "Multiple Specializations",
                description: "CS, ECE, IT departments with diverse skill sets"
              },
              {
                title: "Strong Placement Record",
                description: "Consistent 95%+ placement rate across all batches"
              },
              {
                title: "Dedicated Support",
                description: "Comprehensive recruitment support and placement assistance"
              },
              {
                title: "Top Performers",
                description: "Access to rank holders and competitive achievers"
              },
              {
                title: "Flexible Recruitment",
                description: "Customizable recruitment processes and batch sizes"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-maroon/5 to-gold/5 border border-maroon/20 hover:border-maroon/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-maroon mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-20 px-6 bg-antique-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif text-maroon mb-12 text-center">Our Recruitment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Registration", description: "Register your company and recruitment needs" },
              { step: "2", title: "JD Submission", description: "Submit job descriptions and requirements" },
              { step: "3", title: "Selection", description: "Access student profiles and conduct interviews" },
              { step: "4", title: "Onboarding", description: "Complete placement and onboarding process" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-maroon text-antique-white flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-1 bg-gradient-to-r from-maroon/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-maroon to-maroon/80 rounded-lg p-12 text-center text-antique-white">
          <h2 className="text-4xl font-serif mb-4">Ready to Recruit?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with our placement cell to discuss your recruitment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-antique-white text-maroon font-semibold rounded-lg hover:bg-gold transition-all">
              Contact Placement Cell
            </button>
            <button className="px-8 py-3 border-2 border-antique-white text-antique-white font-semibold rounded-lg hover:bg-maroon/80 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Recruiter Enquiry Card */}
      <section className="py-20 px-6 bg-antique-white/60" id="company-contact-form">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-maroon/70 mb-4">Placement Connect</p>
              <h2 className="text-4xl md:text-5xl font-serif text-maroon mb-5">Reach Our Placement Cell</h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                If you represent a company and would like to connect with our placement cell, submit your details using this form.
                Our admin team will review your request and contact you directly.
              </p>
            </div>
            <RecruiterContactCard />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
