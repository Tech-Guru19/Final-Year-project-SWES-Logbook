const SupervisorDashboard = () => {
  return (
    <>
      <body className="bg-background text-on-surface">
        <div className="flex min-h-screen">
          <aside className="h-screen w-64 border-r sticky left-0 top-0 bg-slate-50 flex flex-col py-6 border-slate-200">
            <div className="px-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-white"
                    data-icon="school"
                  >
                    school
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-blue-900">
                    SIWES Portal
                  </span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Academic Management
                  </span>
                </div>
              </div>
            </div>
            <nav className="flex-1 px-4 space-y-1">
              <a
                className="flex items-center gap-3 px-4 py-3 text-blue-900 font-bold bg-white border-r-4 border-blue-900 transition-all duration-200"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="dashboard"
                >
                  dashboard
                </span>
                <span className="font-body-md">Dashboard</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="edit_note"
                >
                  edit_note
                </span>
                <span className="font-body-md">Daily Logs</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="supervisor_account"
                >
                  supervisor_account
                </span>
                <span className="font-body-md">Supervision</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="settings"
                >
                  settings
                </span>
                <span className="font-body-md">Settings</span>
              </a>
            </nav>
            <div className="px-4 mt-auto space-y-1">
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200"
                href="#"
              >
                <span className="material-symbols-outlined" data-icon="help">
                  help
                </span>
                <span className="font-body-md">Help Center</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200"
                href="#"
              >
                <span className="material-symbols-outlined" data-icon="logout">
                  logout
                </span>
                <span className="font-body-md">Sign Out</span>
              </a>
            </div>
          </aside>
          <main className="flex-1 flex flex-col">
            <header className="w-full h-16 border-b sticky top-0 z-40 bg-white border-slate-200 flex justify-between items-center px-6">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-96">
                  <span
                    className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                    data-icon="search"
                  >
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                    placeholder="Search for students by name or matric..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <button className="text-slate-500 hover:bg-slate-50 p-2 transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="notifications"
                    >
                      notifications
                    </span>
                  </button>
                  <button className="text-slate-500 hover:bg-slate-50 p-2 transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="help"
                    >
                      help
                    </span>
                  </button>
                  <span className="text-sm font-medium text-blue-900 cursor-pointer">
                    Support
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-slate-200"></div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-bold text-blue-900 leading-none">
                      Dr. Sarah Jenkins
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter mt-1">
                      SIWES Supervisor
                    </p>
                  </div>
                  <img
                    alt="User profile avatar"
                    className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100 object-cover"
                    data-alt="A professional headshot of a middle-aged female academic professional with short brown hair. She is wearing a dark navy blazer and a light blue collared shirt. The background is a clean, out-of-focus academic office with books and a window. The lighting is bright and soft, creating an atmosphere of reliability and expertise in a modern institutional setting."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC97-1S91-fUVlzeMumw0HaRL2XCVKIXCY2iTJq8O7fzcg88JqgbJLssVIhUy_y4-_1TK2v-AFMXnsXSaomhRwRS2naLYpcqQ_DAQBvcEaczm7bTLicEE9Tj72N9Ou3lb14AlOdxRWxVoq-UutC8gpe9LYkrsHI7eYsLn-Y7MOoyNqUHTLAx3ibpeIkcOTtTzE_KDqwotiU1tBaDOz3xd2BEi3hT2NbFsUDZ215Z_qVA0bnSqQglGjEzNTxQx2eTLWruv1Kfr2CgYoZ"
                  />
                </div>
              </div>
            </header>
            <div className="p-lg space-y-lg max-w-container-max mx-auto w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="font-h1 text-h1 text-primary">
                    Student Supervision Dashboard
                  </h1>
                  <p className="font-body-lg text-on-surface-variant mt-2">
                    Overseeing 24 students across 3 departments for the 2024
                    SIWES Session.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white border border-outline-variant px-md py-sm rounded font-body-md flex items-center gap-2 text-on-surface-variant hover:bg-slate-50 transition-colors">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="file_download"
                    >
                      file_download
                    </span>
                    Export Reports
                  </button>
                  <button className="bg-primary text-on-primary px-md py-sm rounded font-body-md flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="add"
                    >
                      add
                    </span>
                    Schedule Review
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                <div className="bg-white border border-slate-200 p-lg rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-blue-900"
                        data-icon="group"
                      >
                        group
                      </span>
                    </div>
                    <span className="text-caption font-label-md text-secondary bg-secondary-container px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <p className="text-h2 font-h2 text-primary">24</p>
                  <p className="text-caption font-body-md text-slate-500">
                    Assigned Students
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-lg rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-on-tertiary-fixed-variant"
                        data-icon="pending_actions"
                      >
                        pending_actions
                      </span>
                    </div>
                    <span className="text-caption font-label-md text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-1 rounded">
                      Action Required
                    </span>
                  </div>
                  <p className="text-h2 font-h2 text-primary">12</p>
                  <p className="text-caption font-body-md text-slate-500">
                    Pending Log Reviews
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-lg rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-on-secondary-container"
                        data-icon="task_alt"
                      >
                        task_alt
                      </span>
                    </div>
                    <span className="text-caption font-label-md text-on-secondary-container bg-secondary-container px-2 py-1 rounded">
                      Compliant
                    </span>
                  </div>
                  <p className="text-h2 font-h2 text-primary">82%</p>
                  <p className="text-caption font-body-md text-slate-500">
                    Average Log Completion
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-lg rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-error-container flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-error"
                        data-icon="warning"
                      >
                        warning
                      </span>
                    </div>
                    <span className="text-caption font-label-md text-on-error-container bg-error-container px-2 py-1 rounded">
                      Critical
                    </span>
                  </div>
                  <p className="text-h2 font-h2 text-primary">3</p>
                  <p className="text-caption font-body-md text-slate-500">
                    Students Not Reporting
                  </p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <div className="p-lg border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm text-slate-600">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="filter_list"
                      >
                        filter_list
                      </span>
                      <span className="font-medium">Filter by Department:</span>
                      <select className="bg-transparent border-none p-0 text-sm focus:ring-0 cursor-pointer text-blue-900 font-bold">
                        <option>All Departments</option>
                        <option>Computer Science</option>
                        <option>Mechanical Engineering</option>
                        <option>Architecture</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm text-slate-600">
                      <span className="font-medium">Status:</span>
                      <select className="bg-transparent border-none p-0 text-sm focus:ring-0 cursor-pointer text-blue-900 font-bold">
                        <option>All Statuses</option>
                        <option>On Track</option>
                        <option>Pending Action</option>
                        <option>At Risk</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    Showing{" "}
                    <span className="font-bold text-on-surface">10</span> of 24
                    students
                  </div>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-lg py-md text-caption font-label-md text-on-surface-variant border-b border-slate-100 uppercase">
                        Student Name
                      </th>
                      <th className="px-lg py-md text-caption font-label-md text-on-surface-variant border-b border-slate-100 uppercase">
                        Department
                      </th>
                      <th className="px-lg py-md text-caption font-label-md text-on-surface-variant border-b border-slate-100 uppercase">
                        Organization
                      </th>
                      <th className="px-lg py-md text-caption font-label-md text-on-surface-variant border-b border-slate-100 uppercase">
                        Progress Summary
                      </th>
                      <th className="px-lg py-md text-caption font-label-md text-on-surface-variant border-b border-slate-100 uppercase text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs">
                            AA
                          </div>
                          <div>
                            <p className="font-body-md font-bold text-blue-900">
                              Adebayo, Ayomide
                            </p>
                            <p className="text-caption text-slate-500">
                              CSC/2021/043
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Computer Science
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Mainframe Solutions Ltd.
                      </td>
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded bg-error-container text-on-error-container text-[10px] font-bold flex items-center gap-1">
                            <span
                              className="material-symbols-outlined text-[12px]"
                              data-icon="priority_high"
                            >
                              priority_high
                            </span>
                            3 PENDING LOGS
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-right">
                        <button className="text-blue-900 hover:underline text-sm font-bold">
                          Review Logs
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-slate-50/20 hover:bg-slate-50 transition-colors group">
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs">
                            BT
                          </div>
                          <div>
                            <p className="font-body-md font-bold text-blue-900">
                              Benson, Tamara
                            </p>
                            <p className="text-caption text-slate-500">
                              MEE/2021/112
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Mechanical Engineering
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Dangote Refinery
                      </td>
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded bg-green-100 text-green-800 text-[10px] font-bold flex items-center gap-1">
                            <span
                              className="material-symbols-outlined text-[12px]"
                              data-icon="check"
                            >
                              check
                            </span>
                            ON TRACK
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-right">
                        <button className="text-blue-900 hover:underline text-sm font-bold">
                          Review Logs
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs">
                            CI
                          </div>
                          <div>
                            <p className="font-body-md font-bold text-blue-900">
                              Chukwu, Ikechukwu
                            </p>
                            <p className="text-caption text-slate-500">
                              ARC/2021/015
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Architecture
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Urban Designs Studio
                      </td>
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold flex items-center gap-1">
                            <span
                              className="material-symbols-outlined text-[12px]"
                              data-icon="schedule"
                            >
                              schedule
                            </span>
                            1 PENDING LOG
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-right">
                        <button className="text-blue-900 hover:underline text-sm font-bold">
                          Review Logs
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-slate-50/20 hover:bg-slate-50 transition-colors group">
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs">
                            DL
                          </div>
                          <div>
                            <p className="font-body-md font-bold text-blue-900">
                              David, Lawal
                            </p>
                            <p className="text-caption text-slate-500">
                              CSC/2021/098
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Computer Science
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Interswitch Group
                      </td>
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded bg-green-100 text-green-800 text-[10px] font-bold flex items-center gap-1">
                            <span
                              className="material-symbols-outlined text-[12px]"
                              data-icon="check"
                            >
                              check
                            </span>
                            ON TRACK
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-right">
                        <button className="text-blue-900 hover:underline text-sm font-bold">
                          Review Logs
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold text-xs">
                            ES
                          </div>
                          <div>
                            <p className="font-body-md font-bold text-blue-900">
                              Eze, Somto
                            </p>
                            <p className="text-caption text-slate-500">
                              MEE/2021/022
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Mechanical Engineering
                      </td>
                      <td className="px-lg py-md text-body-md text-on-surface">
                        Shell Nigeria
                      </td>
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded bg-error-container text-on-error-container text-[10px] font-bold flex items-center gap-1">
                            <span
                              className="material-symbols-outlined text-[12px]"
                              data-icon="warning"
                            >
                              warning
                            </span>
                            7 DAYS NO LOG
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md text-right">
                        <button className="text-blue-900 hover:underline text-sm font-bold">
                          Review Logs
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-lg flex items-center justify-between bg-slate-50/30">
                  <p className="text-caption text-slate-500">
                    Showing page 1 of 3
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-400 bg-white cursor-not-allowed">
                      Previous
                    </button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-sm text-blue-900 font-bold bg-white hover:bg-slate-50 transition-colors">
                      1
                    </button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 bg-white hover:bg-slate-50 transition-colors">
                      2
                    </button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 bg-white hover:bg-slate-50 transition-colors">
                      3
                    </button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-sm text-blue-900 font-bold bg-white hover:bg-slate-50 transition-colors">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
          <span className="material-symbols-outlined" data-icon="add_comment">
            add_comment
          </span>
        </button>
      </body>
    </>
  );
};

export default SupervisorDashboard;
