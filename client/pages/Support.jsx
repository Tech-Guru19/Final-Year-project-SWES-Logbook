const Support = () => {
  return (
    <>
      <body className="bg-background text-on-background">
        <header className="fixed top-0 w-full border-b bg-white border-slate-200 z-50 flex justify-between items-center px-6 h-16 w-full flat no shadows">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold text-blue-900 font-inter">
              SIWES Logbook
            </span>
            <nav className="hidden md:flex gap-6 items-center">
              <a
                className="text-slate-600 font-inter text-sm font-medium hover:bg-slate-50 transition-colors px-3 py-2 rounded"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-slate-600 font-inter text-sm font-medium hover:bg-slate-50 transition-colors px-3 py-2 rounded"
                href="#"
              >
                Logbook
              </a>
              <a
                className="text-slate-600 font-inter text-sm font-medium hover:bg-slate-50 transition-colors px-3 py-2 rounded"
                href="#"
              >
                Placements
              </a>
              <a
                className="text-blue-900 font-bold border-b-2 border-blue-900 font-inter text-sm font-medium px-3 py-2"
                href="#"
              >
                Help
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-slate-600 hover:bg-slate-50 p-2 rounded-full">
              notifications
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
          </div>
        </header>
        <main className="pt-16 min-h-screen">
          <section className="relative bg-primary py-20 px-6">
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-container rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
              <h1 className="font-h1 text-h1 text-white mb-6">
                How can we help you today?
              </h1>
              <div className="relative max-w-2xl mx-auto">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-secondary text-on-surface text-body-lg shadow-lg"
                  placeholder="Search for guides, articles, or technical issues..."
                  type="text"
                />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="text-white/70 text-caption font-caption">
                  Popular:
                </span>
                <a
                  className="text-white/90 text-caption font-caption hover:underline"
                  href="#"
                >
                  Logbook submission
                </a>
                <a
                  className="text-white/90 text-caption font-caption hover:underline"
                  href="#"
                >
                  Supervisor Approval
                </a>
                <a
                  className="text-white/90 text-caption font-caption hover:underline"
                  href="#"
                >
                  ITF Forms
                </a>
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
              <div className="bg-white p-lg border border-outline-variant rounded-xl hover:border-secondary transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    engineering
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-sm">
                  Technical Support
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Troubleshoot login issues, app performance, and platform
                  errors.
                </p>
              </div>
              <div className="bg-white p-lg border border-outline-variant rounded-xl hover:border-secondary transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-primary">
                    manage_accounts
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-sm">
                  Account Management
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Update profile details, password security, and institution
                  linking.
                </p>
              </div>
              <div className="bg-white p-lg border border-outline-variant rounded-xl hover:border-secondary transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-tertiary">
                    supervised_user_circle
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-sm">
                  Supervisor Guidelines
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Resources for industry supervisors to grade and review
                  students.
                </p>
              </div>
              <div className="bg-white p-lg border border-outline-variant rounded-xl hover:border-secondary transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-on-secondary-fixed-variant">
                    menu_book
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-sm">
                  Student User Guide
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Step-by-step instructions on navigating the SIWES experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
              <div className="lg:col-span-2 space-y-gutter">
                <div className="bg-white border border-outline-variant rounded-xl p-lg">
                  <h2 className="font-h2 text-h2 text-primary mb-md flex items-center gap-2">
                    <span className="material-symbols-outlined">article</span>
                    Featured Articles
                  </h2>
                  <div className="divide-y divide-outline-variant">
                    <a
                      className="group py-md flex items-center justify-between hover:px-2 transition-all"
                      href="#"
                    >
                      <div className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">
                          description
                        </span>
                        <div>
                          <h4 className="font-body-lg text-body-lg text-primary group-hover:text-secondary font-semibold">
                            How to reset your password
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Secure steps to recover access if you've forgotten
                            your credentials.
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline">
                        chevron_right
                      </span>
                    </a>
                    <a
                      className="group py-md flex items-center justify-between hover:px-2 transition-all"
                      href="#"
                    >
                      <div className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">
                          upload_file
                        </span>
                        <div>
                          <h4 className="font-body-lg text-body-lg text-primary group-hover:text-secondary font-semibold">
                            Uploading your first log entry
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Master the logbook interface and learn how to attach
                            daily proof.
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline">
                        chevron_right
                      </span>
                    </a>
                    <a
                      className="group py-md flex items-center justify-between hover:px-2 transition-all"
                      href="#"
                    >
                      <div className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">
                          verified
                        </span>
                        <div>
                          <h4 className="font-body-lg text-body-lg text-primary group-hover:text-secondary font-semibold">
                            Verification process for ITF grants
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Essential documents and steps required for
                            industrial training funding.
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline">
                        chevron_right
                      </span>
                    </a>
                  </div>
                  <button className="mt-md font-label-md text-label-md text-secondary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View all 24 articles{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="relative overflow-hidden bg-on-primary-container rounded-xl p-lg text-white group">
                  <div className="relative z-10">
                    <h2 className="font-h2 text-h2 mb-sm">
                      Join the Community
                    </h2>
                    <p className="font-body-lg text-body-lg mb-md opacity-90 max-w-md">
                      Connect with thousands of students across the nation.
                      Share placement tips, ask for advice, and navigate your
                      SIWES journey together.
                    </p>
                    <button className="bg-white text-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
                      Enter Student Forum
                    </button>
                  </div>
                  <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                    forum
                  </span>
                </div>
              </div>
              <aside className="space-y-gutter">
                <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm">
                  <h3 className="font-h3 text-h3 text-primary mb-md">
                    Submit a Ticket
                  </h3>
                  <form className="space-y-md">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                        Issue Type
                      </label>
                      <select className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary font-body-md">
                        <option>Technical Issue</option>
                        <option>Account Access</option>
                        <option>Logbook Error</option>
                        <option>Institution Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                        Subject
                      </label>
                      <input
                        className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary font-body-md"
                        placeholder="Brief summary..."
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                        Description
                      </label>
                      <textarea
                        className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary font-body-md"
                        placeholder="Tell us more about the issue..."
                        rows="4"
                      ></textarea>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                      Submit Ticket
                    </button>
                  </form>
                </div>
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h3 className="font-h3 text-h3 text-primary mb-md">
                    Direct Contact
                  </h3>
                  <div className="space-y-sm">
                    <button className="w-full flex items-center justify-between p-md bg-white border border-outline-variant rounded-lg hover:border-secondary transition-all">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">
                          chat
                        </span>
                        <span className="font-body-md text-primary font-semibold">
                          Live Chat
                        </span>
                      </div>
                      <span className="text-caption font-caption text-secondary">
                        Online
                      </span>
                    </button>
                    <div className="p-md bg-white border border-outline-variant rounded-lg">
                      <div className="flex items-center gap-3 mb-sm">
                        <span className="material-symbols-outlined text-primary">
                          school
                        </span>
                        <span className="font-body-md text-primary font-semibold">
                          IT Helpdesk
                        </span>
                      </div>
                      <p className="text-caption font-caption text-on-surface-variant mb-base">
                        Federal University of Technology
                      </p>
                      <p className="text-body-md text-primary">
                        it-support@futo.edu.ng
                      </p>
                      <p className="text-body-md text-primary">
                        +234 800 123 4567
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
        <footer className="w-full py-8 border-t bg-slate-50 border-slate-200 dark:border-slate-800 mt-xl">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-slate-700 font-inter">
                SIWES Logbook
              </span>
              <p className="text-xs font-normal text-slate-500 font-inter">
                © 2024 SIWES Logbook Management System. All academic rights
                reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors duration-200 font-inter"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors duration-200 font-inter"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs font-bold text-blue-700 underline transition-colors duration-200 font-inter"
                href="#"
              >
                Support
              </a>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Support;
