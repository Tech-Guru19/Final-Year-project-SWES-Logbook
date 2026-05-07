import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <>
      <div className="flex">
        <aside className="h-screen w-64 border-r sticky left-0 top-0 bg-slate-50 flex flex-col py-6 border-slate-200">
          <div className="px-6 mb-10">
            <h1 className="text-lg font-black text-blue-900">SIWES Portal</h1>
            <p className="text-slate-600 font-sans text-sm font-medium">
              Academic Management
            </p>
          </div>
          <nav className="flex-grow flex flex-col gap-1 px-3">
            <a
              className="flex items-center gap-3 px-3 py-2 text-blue-900 font-bold bg-white border-r-4 border-blue-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              <span className="font-sans text-sm">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 ease-in-out"
              href="student-dashboard/daily-logs"
            >
              <span className="material-symbols-outlined" data-icon="edit_note">
                edit_note
              </span>
              {/* <Link to="daily-logs"> */}
              <span className="font-sans text-sm">Daily Logs</span>
              {/* </Link> */}
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="supervisor_account"
              >
                supervisor_account
              </span>
              <span className="font-sans text-sm">Supervision</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
              <span className="font-sans text-sm">Settings</span>
            </a>
          </nav>
          <div className="mt-auto px-3 flex flex-col gap-1">
            <a
              className="flex items-centere gap-3 px-3 py-2 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="help">
                help
              </span>
              <span className="font-sans text-sm">Help Center</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="logout">
                logout
              </span>
              <span className="font-sans text-sm">Sign Out</span>
            </a>
          </div>
        </aside>
        <main className="flex-grow">
          <header className="w-full h-16 border-b sticky top-0 z-40 bg-white border-slate-200 flex justify-between items-center px-6">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-blue-900">
                SIWES Logbook
              </span>
              <div className="relative ml-4">
                <span
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="pl-10 pr-4 py-1.5 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Search logbook entries..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/">
                <button className="bg-primary text-white font-inter text-sm font-medium tracking-tight px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out">
                  Back
                </button>
              </Link>
              <button className="text-slate-500 hover:bg-slate-50 p-2 transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="notifications"
                >
                  notifications
                </span>
              </button>
              <button className="text-slate-500 hover:bg-slate-50 p-2 transition-colors">
                <span className="material-symbols-outlined" data-icon="help">
                  help
                </span>
              </button>
              <span className="text-sm font-medium text-blue-900 border-l border-slate-200 pl-4 h-6 flex items-center">
                Support
              </span>
              <img
                alt="User profile avatar"
                className="w-8 h-8 rounded-full border border-slate-200"
                data-alt="A professional headshot of a smiling female student, set against a blurred office background with natural lighting. She is wearing a smart-casual blazer, representing an intern profile. The lighting is bright and even, reinforcing the academic and professional atmosphere of the dashboard."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALs6hNDrmcI0b7qz81cl8EgV_fBs71gfbeF81M7VkQczDi1bF4D0orhGNFR1dRwlr1YHsrB9tBpwcJrqt3oubyEtaSv-QjP-JjxmuOd9rUQMjZvz8evAu_D_UCEGtniypHOl4jigWwfPYLBYKKFMtylpmAE5nWKY9ELesWDqv3IsF857MFp7mOdeKGHNp2V63WM6yERlfaJdXfesCxP5ALmTA-Pab99T2kGc6uh73ejRrP3q3f6GwqX1kumW5-mE6IHzt4w8mCpBlr"
              />
            </div>
          </header>
          <div className="p-gutter max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-lg">
              <div>
                <h2 className="font-h1 text-h1 text-primary">
                  Student Dashboard
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Welcome back, Sarah. Here is your internship progress
                  overview.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-primary text-on-primary px-lg py-md font-label-md text-label-md rounded shadow-sm hover:opacity-90 active:opacity-80 transition-all">
                <span
                  className="material-symbols-outlined"
                  data-icon="add"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  add
                </span>
                Submit New Log
              </button>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg rounded">
                <div className="flex justify-between items-center mb-md">
                  <h3 className="font-h2 text-h2 text-primary">
                    Internship Journey
                  </h3>
                  <span className="font-label-md text-label-md text-secondary">
                    50% Completed
                  </span>
                </div>
                <div className="relative w-full h-4 bg-surface-container-high rounded-full overflow-hidden mb-sm">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div className="flex justify-between font-caption text-caption text-on-surface-variant">
                  <span>Week 12</span>
                  <span className="font-bold text-primary">Week 12 of 24</span>
                  <span>Week 24</span>
                </div>
                <div className="mt-lg grid grid-cols-3 gap-md">
                  <div className="p-md bg-background rounded border border-outline-variant">
                    <p className="font-caption text-caption text-on-surface-variant mb-xs">
                      Industry Partner
                    </p>
                    <p className="font-h3 text-h3 text-primary">
                      TechLink Systems Ltd
                    </p>
                  </div>
                  <div className="p-md bg-background rounded border border-outline-variant">
                    <p className="font-caption text-caption text-on-surface-variant mb-xs">
                      Internal Supervisor
                    </p>
                    <p className="font-h3 text-h3 text-primary">
                      Dr. Alabi James
                    </p>
                  </div>
                  <div className="p-md bg-background rounded border border-outline-variant">
                    <p className="font-caption text-caption text-on-surface-variant mb-xs">
                      Completion Date
                    </p>
                    <p className="font-h3 text-h3 text-primary">Aug 14, 2024</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg rounded flex flex-col justify-between">
                <h3 className="font-h3 text-h3 text-primary mb-md">
                  Logbook Summary
                </h3>
                <div className="space-y-md">
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface">
                      Total Entries
                    </span>
                    <span className="font-h3 text-h3 text-primary">45</span>
                  </div>
                  <hr className="border-outline-variant" />
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary"></span>
                      <span className="font-body-md text-body-md text-on-surface">
                        Approved
                      </span>
                    </span>
                    <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-caption font-bold rounded">
                      38
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-surface-tint"></span>
                      <span className="font-body-md text-body-md text-on-surface">
                        Pending
                      </span>
                    </span>
                    <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant text-caption font-bold rounded">
                      5
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-error"></span>
                      <span className="font-body-md text-body-md text-on-surface">
                        Revision Required
                      </span>
                    </span>
                    <span className="px-2 py-0.5 bg-error-container text-on-error-container text-caption font-bold rounded">
                      2
                    </span>
                  </div>
                </div>
                <button className="w-full mt-lg py-md border border-secondary text-secondary font-label-md text-label-md rounded hover:bg-secondary-container transition-colors">
                  View Detailed Logbook
                </button>
              </div>
              <div className="col-span-12 lg:col-span-12 bg-surface-container-lowest border border-outline-variant p-lg rounded">
                <div className="flex items-center justify-between mb-lg">
                  <h3 className="font-h3 text-h3 text-primary flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-secondary"
                      data-icon="forum"
                    >
                      forum
                    </span>
                    Supervisor Feedback
                  </h3>
                  <a
                    className="text-primary font-label-md text-label-md hover:underline"
                    href="#"
                  >
                    See all feedback
                  </a>
                </div>
                <div className="space-y-md">
                  <div className="p-md bg-background rounded-xl border border-outline-variant flex gap-lg">
                    <div className="flex-shrink-0">
                      <img
                        alt="Supervisor avatar"
                        className="w-12 h-12 rounded-full object-cover grayscale"
                        data-alt="A professional middle-aged male supervisor with a kind expression, wearing spectacles and a business formal shirt. The photo is high-quality with a corporate aesthetic, utilizing soft office lighting and a neutral grey background to match the administrative design system."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnEuV0ZczAPedR91V2qboB8Q7JDO7xpXhmXqKeVprEFBtzBUO8qMmHKPc1tTgrD42GksLtJ1UjjR0Oe_2BCbc3bZgSqlARj0Be5l-5Zxim_Jod45LOWMpvB8q2vKsVlY8_SVIuZHDl5sA0QoWsLZ-CC5B-zBEyWS2o99adyQSn-fgQckPEc9MTweVkEj8knfwvV7OpytrXEBv0YuA50RZlTruCxX5pQJAkAJUw879zd99ozJDyYwui5JL9YT5cWUmySGLisZmBdfWb"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-xs">
                        <h4 className="font-body-lg text-body-lg font-bold text-primary">
                          Dr. Alabi James
                        </h4>
                        <span className="font-caption text-caption text-on-surface-variant">
                          Yesterday, 4:15 PM
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-md">
                        "Excellent work on the network configuration logs for
                        Week 11. Your documentation of the VLAN setup was very
                        thorough. Please ensure you include the screenshots of
                        the routing tables in the next submission for clarity."
                      </p>
                      <div className="flex gap-md">
                        <span className="flex items-center gap-1 text-secondary font-label-md text-label-md">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="check_circle"
                          >
                            check_circle
                          </span>
                          Log #42 Approved
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-md bg-error-container/20 rounded-xl border border-error/20 flex gap-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error">
                        <span
                          className="material-symbols-outlined text-3xl"
                          data-icon="account_circle"
                        >
                          account_circle
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-xs">
                        <h4 className="font-body-lg text-body-lg font-bold text-primary">
                          Engr. Sarah Connor (Industry)
                        </h4>
                        <span className="font-caption text-caption text-on-surface-variant">
                          Oct 24, 2023
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-md">
                        "Log #39 requires more detail regarding the safety
                        protocols followed during the server room maintenance.
                        Please update the entry and resubmit for approval."
                      </p>
                      <button className="px-md py-xs bg-error text-on-error font-label-md text-label-md rounded hover:opacity-90">
                        Edit Log #39
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-gutter mt-md">
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded shadow-sm text-center">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl mb-sm"
                    data-icon="calendar_today"
                  >
                    calendar_today
                  </span>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Attendance Rate
                  </p>
                  <p className="font-h3 text-h3 text-primary">98%</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded shadow-sm text-center">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl mb-sm"
                    data-icon="rate_review"
                  >
                    rate_review
                  </span>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Avg. Grade
                  </p>
                  <p className="font-h3 text-h3 text-primary">A-</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded shadow-sm text-center">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl mb-sm"
                    data-icon="timer"
                  >
                    timer
                  </span>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Hours Logged
                  </p>
                  <p className="font-h3 text-h3 text-primary">480h</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded shadow-sm text-center">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl mb-sm"
                    data-icon="task_alt"
                  >
                    task_alt
                  </span>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Skills Acquired
                  </p>
                  <p className="font-h3 text-h3 text-primary">12</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default StudentDashboard;
