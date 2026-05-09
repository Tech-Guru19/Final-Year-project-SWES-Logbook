import { Link } from "react-router-dom";

const signin = () => {
  return (
    <>
      <header className="fixed top-0 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full">
          <div className="text-xl font-bold text-blue-900 dark:text-blue-100 font-h2">
            SIWES Logbook
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" >
            <button className="bg-primary text-white font-inter text-sm font-medium tracking-tight px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out">
              Back
            </button>
            </Link>
            <span className="font-inter text-sm font-medium text-slate-600 dark:text-slate-400">
              Help
            </span>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-gutter py-xl mt-16">
        <div className="w-full max-w-md">
          <div className="bg-white border border-outline-variant p-xl shadow-[0px_4px_12px_rgba(26,54,93,0.08)] flex flex-col gap-lg">
            <div className="flex flex-col items-center text-center gap-sm">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-sm">
                <span className="material-symbols-outlined text-on-primary text-[32px]">
                  school
                </span>
              </div>
              <h1 className="font-h2 text-h2 text-primary">Welcome Back</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sign in to your SIWES logbook account
              </p>
            </div>
            <form action="#" className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label
                  className="font-label-md text-label-md text-on-surface-variant"
                  for="id-number"
                >
                  Matriculation Number / Email
                </label>
                <div className="relative">
                  <input
                    className="w-full h-10 px-md border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
                    id="id-number"
                    placeholder="e.g. 2024/ENG/001"
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant text-[20px]">
                    person
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant"
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
                  <input
                    className="w-full h-10 px-md border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant text-[20px]">
                    lock
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-sm mt-xs">
                <input
                  className="w-4 h-4 border-outline text-primary focus:ring-primary"
                  id="remember"
                  type="checkbox"
                />
                <label
                  className="font-caption text-caption text-on-surface-variant"
                  for="remember"
                >
                  Stay signed in for 30 days
                </label>
              </div>
              <button
                className="w-full h-10 bg-primary text-on-primary font-h3 text-body-lg flex items-center justify-center gap-sm hover:opacity-90 active:scale-95 transition-all mt-sm"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="relative flex py-sm items-center">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-4 font-caption text-caption text-on-surface-variant uppercase tracking-widest">
                Or
              </span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>
            <div className="text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                New student?
                <a
                  className="text-secondary font-semibold hover:underline"
                  href="/SignUp"
                >
                  Create an Account
                </a>
              </p>
            </div>
          </div>
          <div className="mt-lg flex flex-col gap-md">
            <div className="flex gap-md">
              <div className="flex-1 bg-white border border-outline-variant p-md flex items-center gap-md">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  verified_user
                </span>
                <div>
                  <p className="font-label-md text-label-md text-primary">
                    Secure Login
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    AES-256 encrypted access
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-white border border-outline-variant p-md flex items-center gap-md">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  support_agent
                </span>
                <div>
                  <p className="font-label-md text-label-md text-primary">
                    IT Support
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="A clean and bright university study area featuring a minimalist wooden desk with an open laptop, a stack of hardcover academic books, and a glass wall overlooking a modern campus courtyard. The scene is bathed in natural daylight, reflecting a professional and academic atmosphere with a focus on institutional reliability. The lighting is soft and neutral, emphasizing a productive educational environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEhxt2Mwc7Esi0iKL_3_fXqw7iSTri_Vuz73Og3CdY_VQJ6U5bgFKUzBgBBrrJ5eUJR_zaVcneAPBUP0bg_kqoTaFi3eOy7AR25JQEgTin3seKWgqFElO7h8ZAdHWcZ1EbEqeE3gzCclujtKka32u5ItwRFVoEbQEjHwqBcJiXPixAWFWenyNFvzG--JQPFH9dql_2cEft0r9wfSWNYg5XNYy2xIGXJmETi7hwQI2-6dfynjGRhGBUwsG8i_CtMZMYOLrSGqbPytHv"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-50 dark:bg-slate-950 w-full py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-screen-xl mx-auto">
          <div className="font-bold text-slate-700">
            SIWES Logbook Management
          </div>
          <div className="text-xs font-normal text-slate-500 dark:text-slate-400">
            © 2026 SIWES Logbook Management System. All academic rights
            reserved.
          </div>
          <div className="flex gap-6">
            <a
              className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default signin;









