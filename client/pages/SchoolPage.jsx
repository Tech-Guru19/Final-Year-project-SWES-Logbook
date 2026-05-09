const SchoolPage = () => {
  return (
    <>
      <body className="bg-background">
        <nav className="bg-white dark:bg-slate-900 fixed top-0 left-0 w-full z-50 border-b border-slate-200 dark:border-slate-800 transition-all duration-200 ease-in-out">
          <div className="flex justify-between items-center px-6 md:px-12 h-16 max-w-7xl mx-auto">
            <div className="text-xl font-bold tracking-tight text-blue-900 dark:text-blue-100 font-h1">
              SIWES Logbook
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                className="font-inter text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-800 transition-all"
                href="/"
              >
                Features
              </a>
              <a
                className="font-inter text-sm font-medium tracking-tight text-blue-900 dark:text-blue-400 border-b-2 border-blue-900 dark:border-blue-400 pb-1"
                href="School"
              >
                For Schools
              </a>
              <a
                className="font-inter text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-800 transition-all"
                href="SignUp"
              >
                For Students
              </a>
              <a
                className="font-inter text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-800 transition-all"
                href="Support"
              >
                Support
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="SignIn">
              <button className="font-inter text-sm font-medium tracking-tight text-primary hover:opacity-70 transition-all">
                Login
              </button>
              </a>
              <a href="SignUp">
              <button className="bg-primary text-white font-inter text-sm font-medium tracking-tight px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                Get Started
              </button>
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-label-md uppercase tracking-widest mb-6">
                  Institutional Solutions
                </span>
                <h1 className="font-h1 text-4xl lg:text-6xl text-primary leading-tight mb-6">
                  Streamline SIWES Management Across Your Institution.
                </h1>
                <p className="font-body-lg text-on-surface-variant mb-8 max-w-xl">
                  A centralized platform for Nigerian higher institutions to
                  oversee student industrial placements, monitor supervisor
                  compliance, and generate real-time reports with absolute
                  precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 h-[40px] bg-primary text-white font-medium rounded shadow-lg hover:bg-primary-container transition-all flex items-center gap-2">
                    Partner with Us
                  </button>
                  <button className="px-8 h-[40px] border border-secondary text-secondary font-medium rounded hover:bg-secondary-container/10 transition-all">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-fixed/30 blur-3xl rounded-full"></div>
                <img
                  alt="Institutional Dashboard Preview"
                  className="relative rounded-xl border border-outline-variant shadow-2xl object-cover aspect-video"
                  data-alt="A professional university administrator in a modern office, analyzing student data on a sleek, large monitor. The environment is bright and high-key with soft morning light, featuring clean lines and a minimalist corporate aesthetic. The overall mood is focused and efficient, emphasizing the reliable technology and data-driven nature of institutional oversight in an academic setting."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkYfUyU_ja_n7XoJEp05FzM5uucVJVu6LedsEBfbhrSknlQARbcNpzzwzansvPHqy8EVBkmO1ac0YUHGU3ZHhdhq2lusssARB030HFTVKLim1m3yer0vfmYn_xHPO6TGaSaRJ3Ly12nujAV_aOMdrqQHQTCKtlblL6u0qk1CUHKRxAVUKkuO8BJ4JOpSL82yPe5wexoOcg4-grIE7Lvkmf1zfN_cUC27iIfjUn5__OCUdjLsHaxALc8y9kwgks1yi0dv4OdDeKQreT"
                />
              </div>
            </div>
          </section>
          <section className="bg-surface-container-low py-12 border-y border-outline-variant">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <p className="text-center font-label-md text-on-surface-variant uppercase tracking-widest mb-8">
                Trusted by leading Nigerian Institutions
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    school
                  </span>
                  <span className="font-h3 text-primary">UNILAG</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    account_balance
                  </span>
                  <span className="font-h3 text-primary">ABU ZARIA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    auto_stories
                  </span>
                  <span className="font-h3 text-primary">UI IBADAN</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    workspace_premium
                  </span>
                  <span className="font-h3 text-primary">COVENANT</span>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-3xl text-primary mb-4">
                Empowering Institutional Coordinators
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Digitize the entire internship lifecycle with tools designed for
                administrative rigor.
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-white border border-outline-variant rounded-xl p-8 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      hub
                    </span>
                  </div>
                  <h3 className="font-h3 text-2xl mb-4">
                    Centralized Student Tracking
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-6">
                    Gain a bird's-eye view of all students on industrial
                    attachment. Filter by department, location, or industry
                    partner in real-time. No more chasing manual paper logs.
                  </p>
                </div>
                <img
                  alt="Dashboard Feature"
                  className="rounded-lg border border-surface-variant w-full h-48 object-cover"
                  data-alt="A clean, high-fidelity UI mockup of a student tracking dashboard on a white laptop screen. The interface shows vibrant data visualizations, maps of student locations, and organized status badges in greens and blues. The lighting is crisp and airy, following a professional light-mode aesthetic that conveys clarity and organizational efficiency."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgT02wXQBgPHMandKbLZ6xDDJPK7rriEs9Cre6pqwX6dJwgiiIZdYgz-m9GfbmaCN9l2Fsx-SNnK7FwTbdM9JqDqPvlJWDSVwH_4xV0k0z0GzjShu6GIL_WUxTYPy3Mjnv4geuk-FNLst8gGnecZuyK7bjkjXXUy-NoiP-8GM4abyV2iwM44UDFgcNjMAas2Cmyng9iadnEJyE4gR06ckGUDB--TqGB2Tg08EuQHg4aE-8V7b0QVWuLgLNdsoVAXag5hIxRtcSrm2Y"
                />
              </div>
              <div className="md:col-span-4 bg-secondary-container/10 border border-outline-variant rounded-xl p-8 hover:border-secondary/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">
                    analytics
                  </span>
                </div>
                <h3 className="font-h3 text-xl mb-4">
                  Supervisor Performance Metrics
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Monitor industry and academic supervisor engagement. Track
                  visitation frequencies and response times to ensure quality
                  mentorship for every student.
                </p>
              </div>
              <div className="md:col-span-4 bg-tertiary-fixed/10 border border-outline-variant rounded-xl p-8 hover:border-tertiary/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-3xl">
                    assignment_turned_in
                  </span>
                </div>
                <h3 className="font-h3 text-xl mb-4">
                  Automated Compliance Reporting
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Generate ITF-compliant reports with a single click. Our system
                  validates data integrity automatically, ensuring your
                  institution is always audit-ready.
                </p>
              </div>
              <div className="md:col-span-8 bg-white border border-outline-variant rounded-xl p-8 hover:border-primary/30 transition-all flex items-center gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      notifications_active
                    </span>
                  </div>
                  <h3 className="font-h3 text-xl mb-4">Instant Alert System</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Automatically flag students who are falling behind on
                    logbook entries or supervisors who have missed evaluation
                    deadlines.
                  </p>
                </div>
                <div className="hidden sm:block w-1/3 bg-surface-container rounded-lg p-4 space-y-3">
                  <div className="h-2 bg-error-container rounded w-3/4"></div>
                  <div className="h-2 bg-surface-variant rounded w-1/2"></div>
                  <div className="h-2 bg-surface-variant rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-primary py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-h1 mb-2">40%</div>
                <p className="font-body-md text-on-primary-container">
                  Reduction in manual grading time
                </p>
              </div>
              <div>
                <div className="text-5xl font-h1 mb-2">100%</div>
                <p className="font-body-md text-on-primary-container">
                  Data integrity &amp; logbook authenticity
                </p>
              </div>
              <div>
                <div className="text-5xl font-h1 mb-2">24h</div>
                <p className="font-body-md text-on-primary-container">
                  Real-time oversight across departments
                </p>
              </div>
            </div>
          </section>
          <section className="py-24 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <h2 className="font-h2 text-3xl text-primary mb-6">
                    Fortified for Institutional Integrity
                  </h2>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        verified_user
                      </span>
                      <div>
                        <h4 className="font-h3 text-lg mb-1">
                          Data Integrity &amp; Anti-Fraud
                        </h4>
                        <p className="font-body-md text-on-surface-variant">
                          Cryptographic timestamps and geo-location tagging
                          prevent fraudulent logbook entries and ensure students
                          are actually present at work sites.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        vpn_key
                      </span>
                      <div>
                        <h4 className="font-h3 text-lg mb-1">
                          Institutional Login Integration
                        </h4>
                        <p className="font-body-md text-on-surface-variant">
                          Seamless SSO (Single Sign-On) integration with your
                          existing university portal (LMS or Student Information
                          System).
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        history_edu
                      </span>
                      <div>
                        <h4 className="font-h3 text-lg mb-1">
                          Immutable Audit Trails
                        </h4>
                        <p className="font-body-md text-on-surface-variant">
                          Every change, approval, and rejection is logged.
                          Maintain a complete historical record for
                          accreditation and internal audits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-outline-variant relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-8xl opacity-20">
                      shield_with_heart
                    </span>
                  </div>
                  <h4 className="font-h3 text-primary mb-4">
                    Security Standards
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 py-3 border-b border-surface-container">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        check_circle
                      </span>
                      <span className="font-body-md">
                        AES-256 Data Encryption at Rest
                      </span>
                    </li>
                    <li className="flex items-center gap-3 py-3 border-b border-surface-container">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        check_circle
                      </span>
                      <span className="font-body-md">
                        SOC2 Type II Compliant Infrastructure
                      </span>
                    </li>
                    <li className="flex items-center gap-3 py-3 border-b border-surface-container">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        check_circle
                      </span>
                      <span className="font-body-md">
                        Weekly Automated Security Backups
                      </span>
                    </li>
                    <li className="flex items-center gap-3 py-3">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        check_circle
                      </span>
                      <span className="font-body-md">
                        Role-Based Access Control (RBAC)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 bg-surface text-center px-6">
            <div className="max-w-4xl mx-auto bg-primary-container rounded-3xl p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 h-full w-full">
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                  <div className="border-r border-white/20"></div>
                </div>
              </div>
              <h2 className="font-h1 text-white text-3xl lg:text-5xl mb-6 relative">
                Ready to Modernize Your SIWES Department?
              </h2>
              <p className="font-body-lg text-on-primary-container mb-10 max-w-2xl mx-auto relative">
                Join forward-thinking institutions using SIWES Logbook to
                increase transparency and eliminate administrative bottlenecks.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative">
                <button className="px-10 h-[48px] bg-secondary-fixed text-on-secondary-fixed font-bold rounded-lg hover:bg-secondary-fixed-dim transition-all">
                  Schedule a Demo
                </button>
                <button className="px-10 h-[48px] border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                  Partner with Us
                </button>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-slate-50 dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-12 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="font-bold text-blue-900 dark:text-blue-100 font-h3">
                SIWES Logbook
              </div>
              <p className="font-inter text-xs text-slate-500 dark:text-slate-400">
                © 2024 SIWES Logbook Tracking System. Institutional Reliability
                Guaranteed.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:underline hover:text-blue-700 transition-opacity opacity-90 hover:opacity-100"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:underline hover:text-blue-700 transition-opacity opacity-90 hover:opacity-100"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:underline hover:text-blue-700 transition-opacity opacity-90 hover:opacity-100"
                href="#"
              >
                Contact Us
              </a>
              <a
                className="font-inter text-xs text-blue-900 dark:text-blue-400 font-semibold hover:underline transition-opacity opacity-90 hover:opacity-100"
                href="#"
              >
                Institutional Access
              </a>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default SchoolPage;
