import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-outline-variant bg-white/80 backdrop-blur-md transition-all duration-200 ease-in-out">
        <nav className="flex justify-between items-center px-6 md:px-12 h-16 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight text-primary font-h2 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg">
                school
              </span>
            </div>
            <span>SIWES Logbook</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="font-inter text-sm font-medium tracking-tight text-primary border-b-2 border-primary pb-1 transition-all duration-200"
              href="#"
            >
              Features
            </a>
            <a
              className="font-inter text-sm font-medium tracking-tight text-on-surface-variant hover:text-primary transition-all duration-200"
              href="#"
            >
              For Schools
            </a>
            <a
              className="font-inter text-sm font-medium tracking-tight text-on-surface-variant hover:text-primary transition-all duration-200"
              href="student-dashboard"
            >
              For Students
            </a>
            <a
              className="font-inter text-sm font-medium tracking-tight text-on-surface-variant hover:text-primary transition-all duration-200"
              href="#"
            >
              Support
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="SignIn">
              <button className="font-inter text-sm font-medium tracking-tight text-primary hover:opacity-70 transition-all">
                Login
              </button>
            </Link>
            <Link to="SignUp">
              <button className="bg-primary text-white font-inter text-sm font-medium tracking-tight px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="pt-16">
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 gradient-mesh">
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary font-label-md text-[11px] uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Digital Transformation for SIWES
              </div>
              <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
                Modernizing the SIWES Experience with{" "}
                <span className="text-secondary italic">
                  Digital Precision.
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                The institutional-grade platform for students, supervisors, and
                coordinators to track and evaluate industrial training with
                absolute transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="SignUp">
                  <button className="h-12 px-8 bg-primary text-white rounded-lg font-label-md flex items-center justify-center hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                    Get Started for Free
                  </button>
                </Link>
                <button className="h-12 px-8 bg-white border border-outline-variant text-primary rounded-lg font-label-md flex items-center justify-center hover:bg-surface-container-low transition-all shadow-sm">
                  Request a Demo
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4 opacity-70">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-tertiary-fixed border-2 border-white"></div>
                </div>
                <span className="text-xs font-medium text-on-surface-variant">
                  Trusted by 50+ Institutions Nationwide
                </span>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative z-20 bg-white p-2 rounded-2xl shadow-2xl shadow-primary/10 border border-outline-variant transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="Digital Logbook Dashboard"
                  className="rounded-xl w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn3j3M1fvoRGU2x4w4emlRIfoZclLYGbFSZBpWlI5m1-Q37eZuF_kbWIz7VdWnHNg0Hos3o5Iayc4Giz1J_NoEJjWQKjb905LE_NqrT7iFLwCrR2YdiZItm-MsN9SNTgVkBbkaAGeu4xxIu5S8ZRqPiKGhx4PjMsViBFaeJkvfgELrMLINUDHD31GnjRCZxQBjFd2AuaMv6AbWM7J6RF17-2cOnjUzUN655URk2a-Sft-A83VgQplhepP1p0-MYcNutP_A7MNJHDEP"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-8">
              Trusted by Top Engineering Faculties &amp; Partners
            </p>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  account_balance
                </span>{" "}
                ACME POLY
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  precision_manufacturing
                </span>{" "}
                GLOBAL TECH
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  engineering
                </span>{" "}
                METRO WORKS
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  science
                </span>{" "}
                R&amp;D CORP
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-h2 text-h2 text-primary mb-4">
                  Powerful Features for Institutional Excellence
                </h2>
                <p className="text-on-surface-variant font-body-md">
                  Engineered to handle the complexities of large-scale
                  industrial training programs with simplicity and scale.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary-fixed/30 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="edit_note"
                  >
                    edit_note
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-4">
                  Smart Daily Logging
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Students can capture high-fidelity logs with photo evidence
                  and location tagging. Automated reminders ensure entries are
                  never missed.
                </p>
              </div>
              <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="visibility"
                  >
                    visibility
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-4">
                  Real-time Supervision
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Remote supervisors can verify presence and progress via
                  GPS-stamped check-ins and instant feedback loops through
                  integrated messaging.
                </p>
              </div>
              <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl hover:border-tertiary-fixed-dim/40 hover:shadow-xl hover:shadow-tertiary/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center mb-8 text-tertiary group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="analytics"
                  >
                    analytics
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-4">
                  Advanced Analytics
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Generate comprehensive performance heatmaps and automated
                  grading reports. Export institutional data for academic
                  records in one click.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20 space-y-4">
              <span className="text-primary font-label-md uppercase tracking-widest text-[11px]">
                Streamlined Workflow
              </span>
              <h2 className="font-h2 text-3xl text-primary">
                A Seamless Journey for Every User
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    01
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center border-4 border-surface-container-low">
                    <span className="material-symbols-outlined text-[14px] text-on-secondary-container">
                      person_add
                    </span>
                  </div>
                </div>
                <h4 className="font-h3 text-h3 text-primary mb-3">
                  Institutional Setup
                </h4>
                <p className="font-body-md text-on-surface-variant px-4 leading-relaxed">
                  Create department hubs and invite students with secure
                  institutional single sign-on (SSO).
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    02
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-fixed flex items-center justify-center rounded-full border-4 border-surface-container-low">
                    <span className="material-symbols-outlined text-[14px] text-on-primary-fixed-variant">
                      history_edu
                    </span>
                  </div>
                </div>
                <h4 className="font-h3 text-h3 text-primary mb-3">
                  Active Engagement
                </h4>
                <p className="font-body-md text-on-surface-variant px-4 leading-relaxed">
                  Students document daily activities while supervisors monitor
                  engagement through live dashboard feeds.
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    03
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-tertiary-fixed flex items-center justify-center rounded-full border-4 border-surface-container-low">
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary-fixed-variant">
                      verified
                    </span>
                  </div>
                </div>
                <h4 className="font-h3 text-h3 text-primary mb-3">
                  Verified Outcomes
                </h4>
                <p className="font-body-md text-on-surface-variant px-4 leading-relaxed">
                  Final evaluations are automatically tabulated, verified by
                  industry mentors, and synced to academic portals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-h2 text-h2 text-on-background mb-12">
                  How it works
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-none w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900 border border-slate-200">
                      1
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md mb-2">
                        Register Your Profile
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Setup your account as a student, supervisor, or
                        institutional coordinator within minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-none w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900 border border-slate-200">
                      2
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md mb-2">
                        Log Daily Activities
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Capture photos, text, and technical notes from your
                        training. Get instant feedback from site managers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-none w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900 border border-slate-200">
                      3
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md mb-2">
                        Get Certified
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Automated final report generation and institutional
                        certification once criteria are met.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <img
                  alt="System Dashboard"
                  className="rounded-xl shadow-2xl border border-white"
                  data-alt="A detailed user interface screen of a tracking dashboard displayed on a modern laptop. The interface shows clean data visualizations, progress bars in emerald and slate, and a structured logbook entry feed. The setting is a bright, airy architect's studio with soft morning light, creating a focused and productive atmosphere. The overall aesthetic is professional, modern, and reliable, utilizing a palette of whites, light slates, and dark primary accents."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe4rzeTjtngE8YhT4XhOBsZSGdWbn232nrkdDCPokh1WuVYZIoJzSR8N3sdS37yQO-Xw8cyJt9ZPFORdRhvhVQL-ZZmTjdvl5a0GBKPtQlPWRIpN5VcXrnkO4disx8PD0NKQPrpIiyuQ9R0_qMFPEVTLanRFaTWxY0MrscnQEZ_ZOFILpugjg32cXy-st0DNu8vjzwdkX7sMlwumRnTjWOUfjvNFmVZD3E2Pv4aXPInwXx5K43LpVe-5o8jnMgPWBWBfCTkKpaRTQ"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 relative bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-h1 text-4xl md:text-5xl text-white mb-8 tracking-tight">
                  Ready to Digitalize Your Institution's SIWES Program?
                </h2>
                <p className="font-body-lg text-primary-fixed opacity-90 mb-12">
                  Join the growing network of universities and polytechnics
                  modernizing their technical education monitoring systems.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="SignUp">
                    <button className="bg-white text-primary px-10 py-4 rounded-xl font-h3 hover:shadow-2xl hover:shadow-white/10 transition-all transform hover:-translate-y-1">
                      Get Started Now
                    </button>
                  </Link>
                  <button className="bg-primary-container text-white px-10 py-4 rounded-xl font-h3 border border-white/20 hover:bg-white/10 transition-all">
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full  bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-lg">
                    school
                  </span>
                </div>
                SIWES Logbook
              </div>
              <p className="text-on-surface-variant font-body-md max-w-sm mb-6">
                Setting the standard for digital industrial training management
                in modern education.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    language
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    mail
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-primary mb-6">Platform</h5>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Security
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Institutional API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-primary mb-6">Support</h5>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-on-surface-variant/70">
            <p>© 2024 SIWES Logbook Tracking System. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">
                verified_user
              </span>
              <span>Institutional Reliability Guaranteed</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
