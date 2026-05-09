import { Link } from 'react-router-dom'

const SupervisionLogin = () => {
  return (
    <>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-surface border-b border-outline-variant">
          <div className="flex items-center gap-md">
            <span className="font-h2 text-h2 font-bold text-primary">
              SIWES Management
            </span>
          </div>
          <div className="hidden md:flex items-center gap-xl">
            <nav className="flex gap-lg">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Portals
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Resources
              </a>
            </nav>
            <div className="flex items-center gap-md border-l border-outline-variant pl-lg">
              <span
                className="material-symbols-outlined text-on-surface-variant cursor-pointer"
                data-icon="help_outline"
              >
                help_outline
              </span>
            </div>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center pt-16 px-md mt-40">
          <div className="w-full max-w-[1000px] grid md:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-sm">
            <div className="relative hidden md:flex flex-col justify-end p-xl bg-primary overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  alt="Academic Building"
                  className="w-full h-full object-cover"
                  data-alt="A grand, neoclassical university administration building with large stone columns under a clear, bright blue sky. The lighting is crisp and professional, emphasizing the architectural details of the educational institution. The overall aesthetic is one of prestige, authority, and academic history, using a palette of cool greys and warm stone tones."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfjK2_r5CJrUMHCrV5DyUmAh3CfFgEuOMIcIRkDvTOP-j5t3GLbKbYE3CERGgk4FnBEB7dIM3qXRkhkpJDBls7oBGI9-2IKY291h6--p2TXgyl5852q24zHaoN6Zkv6_09el4GnSLkMOwfQWmeVgIiZSm51nUqc31WD_C7hiXa4796tgy4bUt5jWrYA7JC82hsu26AE0ptMElR7upVfrLjDrjgF9rvKBZ0HBQKRwwNwruT5laNPbSh4o8MlS0GeGyo-fri5hX0bOrS"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="font-h1 text-h1 text-on-primary mb-sm">
                  Academic Staff Portal
                </h2>
                <p className="font-body-lg text-body-lg text-primary-fixed opacity-90">
                  Secure access for institutional supervisors to manage
                  logbooks, verify placements, and monitor student progress
                  through the SIWES program.
                </p>
              </div>
            </div>
            <div className="p-xl flex flex-col justify-center">
              <div className="mb-xl">
                <div className="flex items-center gap-sm text-secondary mb-xs">
                  <span
                    className="material-symbols-outlined"
                    data-icon="shield"
                  >
                    shield
                  </span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">
                    Secure Access
                  </span>
                </div>
                <h1 className="font-h2 text-h2 text-primary mb-xs">
                  Supervisor Portal Login
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Please enter your institutional credentials to continue.
                </p>
              </div>
              <form className="space-y-lg" onsubmit="return false;">
                <div className="space-y-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface block"
                    for="email"
                  >
                    Institutional Email
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline"
                      data-icon="mail"
                    >
                      mail
                    </span>
                    <input
                      className="w-full h-10 pl-11 pr-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md outline-none"
                      id="email"
                      placeholder="supervisor@university.edu"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-xs">
                  <div className="flex justify-between items-center">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      for="password"
                    >
                      Password
                    </label>
                    <a
                      className="font-label-md text-label-md text-secondary hover:underline"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline"
                      data-icon="lock"
                    >
                      lock
                    </span>
                    <input
                      className="w-full h-10 pl-11 pr-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md outline-none"
                      id="password"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
                <div className="pt-sm">
                  <button
                    className="w-full h-10 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-sm"
                    type="submit"
                  >
                    <span>Sign In</span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
              <div className="mt-xl pt-xl border-t border-outline-variant">
                <div className="bg-surface-container-low p-md rounded-xl flex items-center justify-between gap-md border border-outline-variant">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                      Are you a student?
                    </p>
                    <p className="font-caption text-caption text-on-surface-variant opacity-75">
                      Click here to access the Student Portal instead.
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-xs font-label-md text-label-md text-secondary border border-secondary px-md py-sm rounded-lg hover:bg-secondary hover:text-on-secondary transition-all"
                    href="signup"
                  >
                    <span>Student Portal</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      data-icon="open_in_new"
                    >
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full flex justify-between items-center px-lg py-md mt-36 bg-surface border-t border-outline-variant">
          <div className="flex flex-col gap-xs">
            <span className="font-label-md text-label-md font-bold text-on-surface">
              Institutional SIWES Portal
            </span>
            <span className="font-caption text-caption text-on-surface-variant opacity-80">
              © 2026 Institutional SIWES Portal. All rights reserved.
            </span>
          </div>
          <div className="flex gap-lg">
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
          </div>
        </footer>
      </body>
    </>
  );
};

export default SupervisionLogin;
