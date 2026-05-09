const CoordinatorLogin = () => {
  return (
    <>
      <body className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
          <section className="hidden md:flex md:w-1/2 lg:w-3/5 bg-primary relative items-center justify-center p-xl">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <img
                alt="Institutional Architecture"
                className="w-full h-full object-cover"
                data-alt="A grand, modern university library hallway with floor-to-ceiling windows, polished stone floors, and clean architectural lines. The lighting is bright and natural, reflecting a sense of academic precision and institutional reliability. The color palette is dominated by deep navy blues and crisp whites, echoing a professional and authoritative atmosphere suitable for educational management."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS6Xp-oSzvL7Jrl6wo9EsNpkhpIV5WpljgHB9pRcjfFXpkjp9qKkv6LsEkAL7e1BInt9J5BVM3eS8iSOWpV3hKWtOWnWXW79xCLYtA-8-AJ_3K8wISRCxZKT1nvz2UlIypWWbzQ6aJ4oEvf3z1_WcT_prqyNmKXix8nrh6-0mNdPsAjm28j1yLAncAaefqje8-ISU-jqxVe10V3AlUolxWN5fwhvvLl7i8cWj04NpRVvbtigEefyEpB-PIhEvrborCkj9liUtoeyJv"
              />
            </div>
            <div className="relative z-10 max-w-lg text-on-primary">
              <h1 className="font-h1 text-h1 mb-md">SIWES Management</h1>
              <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
                The centralized portal for institutional oversight, ensuring the
                integrity and quality of industrial training across all
                departments.
              </p>
              <div className="mt-xl grid grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <span className="font-h3 text-h3">1,200+</span>
                  <span className="font-label-md text-label-md opacity-70 uppercase tracking-wider">
                    Active Placements
                  </span>
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="font-h3 text-h3">45</span>
                  <span className="font-label-md text-label-md opacity-70 uppercase tracking-wider">
                    Partner Industries
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="flex-1 flex items-center justify-center p-lg bg-surface-container-lowest">
            <div className="w-full max-w-md flex flex-col gap-xl">
              <div className="flex flex-col gap-sm">
                <div className="flex items-center gap-sm md:hidden mb-md">
                  <span className="font-h2 text-h2 font-bold text-primary">
                    SIWES Management
                  </span>
                </div>
                <h2 className="font-h2 text-h2 text-primary">
                  Coordinator Portal
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Sign in to manage institutional records and supervise academic
                  staff.
                </p>
              </div>
              <form className="flex flex-col gap-lg">
                <div className="flex flex-col gap-md">
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface-variant px-xs"
                      for="id-email"
                    >
                      Institutional ID / Email
                    </label>
                    <input
                      className="w-full px-md py-sm bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none text-on-surface"
                      id="id-email"
                      placeholder="e.g. admin.smith@uni.edu"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface-variant px-xs"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-md py-sm bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none text-on-surface"
                      id="password"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between px-xs">
                  <label className="flex items-center gap-sm cursor-pointer group">
                    <input
                      className="rounded-sm border-outline text-primary focus:ring-primary w-4 h-4"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Remember me
                    </span>
                  </label>
                  <a
                    className="font-label-md text-label-md text-primary hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  className="w-full h-[40px] bg-primary text-on-primary font-label-md text-label-md rounded-xl hover:bg-primary-container transition-colors active:scale-[0.98] transform flex items-center justify-center gap-sm shadow-sm"
                  type="submit"
                >
                  Sign In
                  <span
                    className="material-symbols-outlined text-[18px]"
                    data-icon="login"
                  >
                    login
                  </span>
                </button>
              </form>
              <div className="pt-md border-t border-outline-variant flex flex-col gap-md">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase text-center tracking-widest">
                  Switch Portal
                </p>
                <div className="flex gap-sm">
                  <a
                    className="flex-1 flex items-center justify-center gap-sm h-[40px] border border-secondary text-secondary font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors"
                    href="signIn"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="school"
                    >
                      school
                    </span>
                    Student
                  </a>
                  <a
                    className="flex-1 flex items-center justify-center gap-sm h-[40px] border border-secondary text-secondary font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors"
                    href="Supervisor-Login"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="supervisor_account"
                    >
                      supervisor_account
                    </span>
                    Supervisor
                  </a>
                </div>
              </div>
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant flex gap-md items-start">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="support_agent"
                >
                  support_agent
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-primary">
                    Administrative Support
                  </span>
                  <p className="font-caption text-caption text-on-surface-variant mt-xs leading-snug">
                    Technical issues or ID recovery? Contact the ICT Department
                    at{" "}
                    <a
                      className="text-primary font-bold"
                      href="mailto:support@siwesportal.edu"
                    >
                      support@siwesportal.edu
                    </a>{" "}
                    or call Ext: 4022.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full flex flex-col md:flex-row justify-between items-center px-lg py-md mt-auto bg-surface border-t border-outline-variant">
          <div className="flex items-center gap-lg">
            <span className="font-label-md text-label-md font-bold text-on-surface">
              SIWES Management
            </span>
            <span className="font-caption text-caption text-on-surface-variant">
              © 2024 Institutional SIWES Portal. All rights reserved.
            </span>
          </div>
          <nav className="flex gap-lg mt-md md:mt-0">
            <a
              className="font-caption text-caption text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-caption text-caption text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-caption text-caption text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Contact Support
            </a>
          </nav>
        </footer>
      </body>
    </>
  );
};

export default CoordinatorLogin;
