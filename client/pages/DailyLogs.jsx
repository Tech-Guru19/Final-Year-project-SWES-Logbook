import { Link } from "react-router-dom";

const DailyLogs = () => {
  return (
    <>
      <body className="bg-surface text-on-surface">
        <aside className="flex flex-col fixed left-0 top-0 h-full py-4 px-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 h-screen w-64 border-r border-slate-200 dark:border-slate-800 transition-all duration-200 ease-in-out hidden md:flex z-50">
          <div className="flex items-center gap-3 px-3 mb-8">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
              <span
                className="material-symbols-outlined text-white"
                data-icon="school"
              >
                school
              </span>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-slate-50 leading-tight">
                SIWES Portal
              </h2>
              <p className="text-xs text-on-secondary-container">
                Academic Management
              </p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="student-dashboard"
            >
              {/* <Link to="/student-dashboard"> */}
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              Dashboard
              {/* </Link> */}
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-md transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="edit_note">
                edit_note
              </span>
              Daily Log
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="visibility"
              >
                visibility
              </span>
              Supervision
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="bar_chart">
                bar_chart
              </span>
              Analytics
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="assignment"
              >
                assignment
              </span>
              Assignments
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="description"
              >
                description
              </span>
              Reports
            </a>
          </nav>
          <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md mb-4 text-sm font-bold flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="file_upload"
              >
                file_upload
              </span>
              Export Data
            </button>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
              Settings
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium font-inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="logout">
                logout
              </span>
              Logout
            </a>
          </div>
        </aside>
        <div className="md:ml-64 min-h-screen flex flex-col">
          <header className="flex items-center justify-between px-6 sticky top-0 z-50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 w-full h-16 border-b border-slate-200 dark:border-slate-800 font-inter antialiased">
            <div className="flex items-center gap-4">
              <button className="md:hidden p-2 text-slate-900">
                <span className="material-symbols-outlined" data-icon="menu">
                  menu
                </span>
              </button>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                SIWES Logbook
              </span>
            </div>
            <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <span
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="w-full bg-slate-50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-slate-200"
                  placeholder="Search entries, reports..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Link to="/">
                  <button className="bg-primary text-white font-inter text-sm font-medium tracking-tight px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out">
                    Back
                  </button>
                </Link>
                <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer active:opacity-80 transition-opacity rounded-full">
                  <span
                    className="material-symbols-outlined"
                    data-icon="notifications"
                  >
                    notifications
                  </span>
                </button>
                <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer active:opacity-80 transition-opacity rounded-full">
                  <span
                    className="material-symbols-outlined"
                    data-icon="help_outline"
                  >
                    help_outline
                  </span>
                </button>
              </div>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold leading-none">
                    Olayinka Jones
                  </p>
                  <p className="text-xs text-on-secondary-container">
                    Engineering Intern
                  </p>
                </div>
                <img
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                  data-alt="professional headshot of a young male engineering student with a warm smile in a studio setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYd6EzmJ8MqQT_yxcfgeJXrAl99lJN1Gjmt_fRmdPQOJ9Uk_Yj7B1rcMfeorQFOBol0AEL2IWgHnrsB0F1qPtPbf5dYZep5NKJQDMJKvBRX3AWJnCYTXQqQ75MSnf06Gk3dhSWCf2HOnoyXXfmCM3BNpb5moq1y171QchpoBpfcHTY0xRZCjSBP-LkyRRQ2gwjvjdcZto4zGKEioQHMJitRd_pWtzCIG5zWoiqWXUokA6MChELfQFIU7YmtDlsIN9D80M6Owf6tpY"
                />
              </div>
            </div>
          </header>
          <main className="p-margin-page flex-1 overflow-auto">
            <div className="max-w-container-max mx-auto space-y-stack-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="font-h1 text-h1 text-on-surface">
                    Daily Logbook
                  </h1>
                  <p className="font-body-md text-body-md text-on-secondary-container mt-1">
                    Track your daily activities and industry learnings.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      alt="Supervisor"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      data-alt="female professional supervisor smiling with glasses in an office background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJxtppBprN3QhaHWyiwk41H7p_r6pcytPg2q0MfyvOf5olpmUmAMD9te27aVWE4_6DWyghOf84taPx2Pz38ryVm77BxuKXzTKfZ0EaGCGukw1gecPMMio0777uhw6ZgDsHzlytquqpdvr2cpTyc3Z9mPpKV39ubKd71vFzgzKMzAvgFkzMMm2IcZnPHiqbiAWbEkt-HSNNGLGmfkGNFykTC5R4ZrjQT_hpXSMkoZM-QQp-x28DX4AeaESrBVsGYi0jdjbWoPQfW4s"
                    />
                    <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                      +2
                    </div>
                  </div>
                  <p className="text-xs font-medium text-on-secondary-container">
                    Under supervision of{" "}
                    <span className="text-on-surface">Dr. Sarah Cole</span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="material-symbols-outlined text-primary p-2 bg-slate-100 rounded-lg"
                      data-icon="fact_check"
                    >
                      fact_check
                    </span>
                    <span className="text-emerald-600 bg-emerald-50 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      APPROVED
                    </span>
                  </div>
                  <div>
                    <p className="text-h2 font-h2">42</p>
                    <p className="text-label-sm font-label-sm text-on-secondary-container uppercase tracking-wider">
                      Entries Approved
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="material-symbols-outlined text-amber-600 p-2 bg-amber-50 rounded-lg"
                      data-icon="pending_actions"
                    >
                      pending_actions
                    </span>
                    <span className="text-amber-600 bg-amber-50 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      PENDING
                    </span>
                  </div>
                  <div>
                    <p className="text-h2 font-h2">08</p>
                    <p className="text-label-sm font-label-sm text-on-secondary-container uppercase tracking-wider">
                      Awaiting Review
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="material-symbols-outlined text-blue-600 p-2 bg-blue-50 rounded-lg"
                      data-icon="event_available"
                    >
                      event_available
                    </span>
                  </div>
                  <div>
                    <p className="text-h2 font-h2">84%</p>
                    <p className="text-label-sm font-label-sm text-on-secondary-container uppercase tracking-wider">
                      Attendance Rate
                    </p>
                  </div>
                  <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[84%]"></div>
                  </div>
                </div>
                <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="material-symbols-outlined text-white p-2 bg-white/10 rounded-lg"
                      data-icon="timer"
                    >
                      timer
                    </span>
                  </div>
                  <div>
                    <p className="text-h2 font-h2">12</p>
                    <p className="text-label-sm font-label-sm text-white/70 uppercase tracking-wider">
                      Weeks Remaining
                    </p>
                  </div>
                  <p className="text-[10px] text-white/50 mt-2 italic">
                    Phase 1 of 2 Complete
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                <div className="lg:col-span-5 space-y-gutter">
                  <section className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <div className="h-12 px-6 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                      <h3 className="font-label-md text-label-md text-on-surface">
                        NEW LOG ENTRY
                      </h3>
                      <span className="text-[10px] font-bold text-on-secondary-container">
                        WEEK 12 - DAY 4
                      </span>
                    </div>
                    <div className="p-6 space-y-stack-md">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-label-sm font-label-sm text-on-secondary-container">
                            LOG DATE
                          </label>
                          <input
                            className="w-full border-slate-200 rounded-lg text-body-sm focus:ring-primary focus:border-primary"
                            type="date"
                            value="2023-11-23"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-label-sm font-label-sm text-on-secondary-container">
                            DEPARTMENT
                          </label>
                          <select className="w-full border-slate-200 rounded-lg text-body-sm focus:ring-primary focus:border-primary">
                            <option>Mechanical Maintenance</option>
                            <option>Quality Control</option>
                            <option>HSE Division</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-label-sm font-label-sm text-on-secondary-container">
                          ACTIVITY DESCRIPTION
                        </label>
                        <textarea
                          className="w-full border-slate-200 rounded-lg text-body-sm focus:ring-primary focus:border-primary placeholder:text-slate-300"
                          placeholder="Describe the technical tasks performed, tools used, and challenges encountered..."
                          rows="5"
                        ></textarea>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-label-sm font-label-sm text-on-secondary-container">
                          ATTACHMENTS
                        </label>
                        <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                          <span
                            className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors"
                            data-icon="cloud_upload"
                          >
                            cloud_upload
                          </span>
                          <p className="text-body-sm text-slate-500 mt-2">
                            Click to upload or drag &amp; drop
                          </p>
                          <p className="text-[10px] text-slate-400">
                            PDF, JPG, PNG (Max 5MB)
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 flex gap-3">
                        <button className="flex-1 bg-primary text-white py-2.5 rounded-lg font-bold text-label-md hover:bg-slate-800 transition-colors">
                          SUBMIT LOG
                        </button>
                        <button className="px-4 py-2.5 border border-slate-200 rounded-lg font-bold text-label-md text-on-surface hover:bg-slate-50 transition-colors">
                          SAVE DRAFT
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="lg:col-span-7 space-y-gutter">
                  <section className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <div className="h-12 px-6 flex items-center justify-between border-b border-slate-100">
                      <h3 className="font-label-md text-label-md text-on-surface">
                        RECENT LOG ENTRIES
                      </h3>
                      <button className="text-label-sm font-label-sm text-primary hover:underline">
                        View Archive
                      </button>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="p-6 hover:bg-slate-50 transition-colors group">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-on-secondary-container leading-none uppercase">
                                Nov
                              </span>
                              <span className="text-lg font-bold text-on-surface">
                                22
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-body-md text-on-surface">
                                Hydraulic Pump System Calibration
                              </h4>
                              <p className="text-body-sm text-on-secondary-container line-clamp-2 mt-1">
                                Assisted the senior engineer in calibrating the
                                main hydraulic pumps for the assembly line. Used
                                a digital manometer to verify pressure
                                outputs...
                              </p>
                              <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase">
                                  <span
                                    className="material-symbols-outlined text-xs"
                                    data-icon="check_circle"
                                  >
                                    check_circle
                                  </span>
                                  Approved
                                </div>
                                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                                  <span
                                    className="material-symbols-outlined text-xs"
                                    data-icon="attach_file"
                                  >
                                    attach_file
                                  </span>
                                  2 Files
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span
                              className="material-symbols-outlined"
                              data-icon="chevron_right"
                            >
                              chevron_right
                            </span>
                          </button>
                        </div>
                        <div className="mt-4 ml-16 bg-emerald-50/50 p-4 rounded-lg border-l-4 border-emerald-500">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="material-symbols-outlined text-emerald-600 text-sm"
                              data-icon="chat_bubble"
                            >
                              chat_bubble
                            </span>
                            <span className="text-[10px] font-bold text-emerald-800 uppercase">
                              Supervisor Comment
                            </span>
                          </div>
                          <p className="text-body-sm text-emerald-900 italic">
                            "Good technical detail on the manometer readings.
                            Ensure you mention the safety lock-out procedures
                            followed next time."
                          </p>
                        </div>
                      </div>
                      <div className="p-6 hover:bg-slate-50 transition-colors group">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-on-secondary-container leading-none uppercase">
                                Nov
                              </span>
                              <span className="text-lg font-bold text-on-surface">
                                21
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-body-md text-on-surface">
                                Inventory Management System Update
                              </h4>
                              <p className="text-body-sm text-on-secondary-container line-clamp-2 mt-1">
                                Cross-referenced physical stock of spare parts
                                with the digital warehouse management system.
                                Identified 12 discrepancies in bearing
                                quantities...
                              </p>
                              <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 uppercase">
                                  <span
                                    className="material-symbols-outlined text-xs"
                                    data-icon="schedule"
                                  >
                                    schedule
                                  </span>
                                  Pending Review
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span
                              className="material-symbols-outlined"
                              data-icon="chevron_right"
                            >
                              chevron_right
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-6 hover:bg-slate-50 transition-colors group">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-on-secondary-container leading-none uppercase">
                                Nov
                              </span>
                              <span className="text-lg font-bold text-on-surface">
                                20
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-body-md text-on-surface">
                                Safety Workshop: Fire Prevention
                              </h4>
                              <p className="text-body-sm text-on-secondary-container line-clamp-2 mt-1">
                                Attended a 4-hour mandatory safety workshop
                                conducted by the HSE department. Learned about
                                class-specific extinguishers and emergency
                                evacuation routes...
                              </p>
                              <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase">
                                  <span
                                    className="material-symbols-outlined text-xs"
                                    data-icon="check_circle"
                                  >
                                    check_circle
                                  </span>
                                  Approved
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span
                              className="material-symbols-outlined"
                              data-icon="chevron_right"
                            >
                              chevron_right
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-2 flex justify-between items-center z-50">
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span className="text-[10px] font-bold">DASHBOARD</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-900 border-t-2 border-slate-900 pt-1 -mt-2">
            <span className="material-symbols-outlined" data-icon="edit_note">
              edit_note
            </span>
            <span className="text-[10px] font-bold">LOGBOOK</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined" data-icon="bar_chart">
              bar_chart
            </span>
            <span className="text-[10px] font-bold">ANALYTICS</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span className="text-[10px] font-bold">PROFILE</span>
          </button>
        </nav>
      </body>
    </>
  );
};

export default DailyLogs;
