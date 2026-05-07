const AdminPanel = () => {
  return (
    <>
      <body className="bg-background font-body-md text-on-surface">
        <div className="flex h-screen overflow-hidden">
          <aside className="h-screen w-64 border-r sticky left-0 top-0 bg-slate-50 flex flex-col py-6 border-slate-200">
            <div className="px-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-container flex items-center justify-center rounded-xl">
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    account_balance
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-blue-900">
                    SIWES Portal
                  </h2>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Academic Management
                  </p>
                </div>
              </div>
            </div>
            <nav className="flex-1 space-y-1 px-4">
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-blue-50 transition-all rounded-xl duration-200 ease-in-out"
                href="#"
              >
                <span className="material-symbols-outlined">dashboard</span>
                Dashboard
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-blue-50 transition-all rounded-xl duration-200 ease-in-out"
                href="#"
              >
                <span className="material-symbols-outlined">edit_note</span>
                Daily Logs
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-blue-900 font-bold bg-white border-r-4 border-blue-900 rounded-xl shadow-sm transition-all duration-200 ease-in-out"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  supervisor_account
                </span>
                Supervision
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-blue-50 transition-all rounded-xl duration-200 ease-in-out"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>
                Settings
              </a>
            </nav>
            <div className="mt-auto px-4 space-y-1">
              <a
                className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-blue-50 transition-all rounded-xl"
                href="#"
              >
                <span className="material-symbols-outlined">help</span>
                Help Center
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-error font-medium hover:bg-error-container transition-all rounded-xl"
                href="#"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </a>
            </div>
          </aside>
          <div className="flex-1 flex flex-col min-w-0">
            <header className="w-full h-16 border-b sticky top-0 z-40 bg-white border-slate-200 flex justify-between items-center px-6">
              <div className="flex items-center flex-1">
                <div className="relative w-full max-w-md">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-sm"
                    placeholder="Search students, supervisors..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 px-4 py-2 text-primary border border-primary rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors">
                  Support
                </button>
                <div className="flex items-center gap-4 text-slate-500">
                  <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                    notifications
                  </span>
                  <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                    help
                  </span>
                </div>
                <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                  <div className="text-right">
                    <p className="text-sm font-bold text-blue-900">
                      Dr. Sarah Chen
                    </p>
                    <p className="text-xs text-slate-500">Chief Coordinator</p>
                  </div>
                  <img
                    alt="User profile avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                    data-alt="A professional portrait of a female university administrator with a confident smile, wearing a professional blazer. The background is a clean, modern academic office with soft daylight and high-contrast professional lighting."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHsfp6g11ER7_H38m92r6UUbdHIsVB5EUmn26w-ovW33e-rOySa1SQiOMTsDfsH7YUUBu5JUu2jkvPh4SfezSGbSX3ie4QaNz61h8pTIGQovdbiQdIB57fANosufFW0rGojubv4P2dUVhkyGPBUuYfSGfWAnZu_BtdB4_Btig5aMXY1_eJs_K8UuOKJAT5waivY5URR5F1S8dsDhPtajNzwU7eg8M8MN3zKVs-vUUf8o3mQbDhIZ7GP9Ts8X66_oW3j40gavcpql6I"
                  />
                </div>
              </div>
            </header>
            <main className="flex-1 overflow-y-auto p-gutter space-y-lg custom-scrollbar">
              <div className="flex justify-between items-end">
                <div>
                  <nav className="flex mb-2 gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    <span>Admin</span>
                    <span>/</span>
                    <span className="text-secondary">
                      Supervision Management
                    </span>
                  </nav>
                  <h1 className="font-h1 text-h1 text-primary">
                    Student Placement Workspace
                  </h1>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-primary font-bold rounded-xl border border-slate-200 hover:bg-slate-200 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      upload_file
                    </span>
                    Bulk Student Upload
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-blue-900 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      add
                    </span>
                    New Assignment
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-gutter h-[calc(100vh-220px)]">
                <div className="col-span-12 lg:col-span-5 flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <div className="p-md border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div>
                      <h3 className="font-h3 text-h3 text-primary flex items-center gap-2">
                        Pending Students
                        <span className="bg-primary-container text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                          124
                        </span>
                      </h3>
                      <p className="text-caption text-slate-500">
                        Unassigned to supervisors or organizations
                      </p>
                    </div>
                    <button className="text-secondary hover:underline font-bold text-sm">
                      Select All
                    </button>
                  </div>
                  <div className="px-md py-sm border-b border-slate-100 flex gap-2 overflow-x-auto custom-scrollbar">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full cursor-pointer">
                      All Departments
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full cursor-pointer hover:bg-slate-50">
                      Engineering
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full cursor-pointer hover:bg-slate-50">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full cursor-pointer hover:bg-slate-50">
                      Design
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    <div className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-primary-container hover:shadow-md transition-all duration-200 relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="drag-handle text-slate-300 group-hover:text-primary-container">
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">
                            JD
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">
                              Johnathan Doe
                            </h4>
                            <p className="text-xs text-slate-500">
                              B.Eng Mechanical Engineering • Year 4
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase">
                          No Placement
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="flex-1 bg-slate-50 px-3 py-2 rounded-lg text-[11px]">
                          <p className="text-slate-400 font-bold uppercase">
                            CGPA
                          </p>
                          <p className="text-primary font-bold">4.25 / 5.0</p>
                        </div>
                        <div className="flex-1 bg-slate-50 px-3 py-2 rounded-lg text-[11px]">
                          <p className="text-slate-400 font-bold uppercase">
                            Preference
                          </p>
                          <p className="text-primary font-bold">
                            Manufacturing, Robotics
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-primary-container hover:shadow-md transition-all duration-200 relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="drag-handle text-slate-300 group-hover:text-primary-container">
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                          </div>
                          <img
                            className="w-10 h-10 rounded-full object-cover"
                            data-alt="A professional studio headshot of a young female engineering student, with a bright, focused expression. The lighting is soft and even, highlighting a clean-cut academic look in a modern university setting with subtle teal and blue background tones."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL7jcAnOi0hF2Ye48dO-QD_u1aOtm1p8D1HAB0DUUKh_u0qGvYiCb_niIoUL-Y8BV2-t_hjwhzVYcdRSrxMNjlwA1JIGgmLE6kuRqfc7q2DHJ7Zmw00rFatCX-MPgd8W5Y-MWqKBkm4LNV_ulhNTOcymo-G4qWcyn9HnzVrmv5LdV74MWbvJkTXehkUkVDkL8ZC1VjY_hdL3SzmSwjFPPbMZn9rFKZyB4G7WBu75k6kaHRM6tjih6M3NXOwVjAILmdGrQEW7TBZZ6h"
                          />
                          <div>
                            <h4 className="font-bold text-primary">
                              Amina Yusuf
                            </h4>
                            <p className="text-xs text-slate-500">
                              B.Sc Computer Science • Year 3
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded uppercase">
                          Pending Org
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="flex-1 bg-slate-50 px-3 py-2 rounded-lg text-[11px]">
                          <p className="text-slate-400 font-bold uppercase">
                            CGPA
                          </p>
                          <p className="text-primary font-bold">4.88 / 5.0</p>
                        </div>
                        <div className="flex-1 bg-slate-50 px-3 py-2 rounded-lg text-[11px]">
                          <p className="text-slate-400 font-bold uppercase">
                            Location
                          </p>
                          <p className="text-primary font-bold">
                            Lagos Metropolis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-primary-container hover:shadow-md transition-all duration-200 relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="drag-handle text-slate-300 group-hover:text-primary-container">
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold">
                            ML
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">
                              Marcus Ling
                            </h4>
                            <p className="text-xs text-slate-500">
                              B.Tech Civil Engineering • Year 4
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase">
                          No Placement
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="flex-1 bg-slate-50 px-3 py-2 rounded-lg text-[11px]">
                          <p className="text-slate-400 font-bold uppercase">
                            CGPA
                          </p>
                          <p className="text-primary font-bold">3.95 / 5.0</p>
                        </div>
                        <div className="flex-1 bg-slate-50 px-3 py-2 rounded-lg text-[11px]">
                          <p className="text-slate-400 font-bold uppercase">
                            Preference
                          </p>
                          <p className="text-primary font-bold">
                            Infrastructure, Roads
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <div className="p-md border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <div className="flex gap-6">
                      <button className="pb-2 border-b-2 border-primary font-bold text-primary text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">
                          person_check
                        </span>
                        Supervisors
                      </button>
                      <button className="pb-2 border-b-2 border-transparent font-medium text-slate-500 text-sm flex items-center gap-2 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          business
                        </span>
                        Partner Organizations
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase">
                        Sort by:
                      </span>
                      <select className="text-xs border-none bg-transparent font-bold text-primary focus:ring-0 cursor-pointer">
                        <option>Available Capacity</option>
                        <option>Department</option>
                        <option>A-Z</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-md custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-slate-100 rounded-xl bg-background hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-3">
                            <img
                              className="w-12 h-12 rounded-lg object-cover"
                              data-alt="A close-up portrait of a middle-aged male university professor with glasses, looking approachable and knowledgeable. The setting is a minimalist library with soft, warm lighting that emphasizes professional expertise and institutional trust, following a modern academic aesthetic."
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3wxuYJq-158lYMfHUsgub6wZq5owMwrwzTXKWyLpNefOFBU9UUYy838UVVc8xz8Bpca7JezgyOgbeeqx_ggH--hf-IAIHVlfsVu_U3DCK5GfOHzwtcmpd2xLnbjcy2n6g1r8GU17zksPfo8gPs9Bl9LuMXcSN1TaG_yfqwXIUUnp_-rGCuumd0vnMD2F_qoVNwOoLJGML79DlXQ3KKWlRTTkaeKTatZ-ArFJova27g-RjKDin89swybRaxlHuhss25z1C7AdNZbSt"
                            />
                            <div>
                              <h4 className="font-bold text-primary">
                                Prof. Robert Smith
                              </h4>
                              <p className="text-xs text-slate-500">
                                Industrial Engineering
                              </p>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-slate-200 rounded">
                            <span className="material-symbols-outlined text-[18px]">
                              more_vert
                            </span>
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[11px] font-bold mb-1">
                              <span className="text-slate-400 uppercase">
                                Current Capacity
                              </span>
                              <span className="text-primary">
                                8 / 12 Students
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-secondary w-[66%]"></div>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">
                              Assigned Students
                            </p>
                            <div className="flex -space-x-2">
                              <div className="w-7 h-7 rounded-full bg-primary-container border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
                                AS
                              </div>
                              <div className="w-7 h-7 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
                                BT
                              </div>
                              <div className="w-7 h-7 rounded-full bg-tertiary-fixed-dim border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
                                CM
                              </div>
                              <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] text-slate-500 font-bold">
                                +5
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="mt-4 w-full py-2 bg-white border border-slate-200 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                          Drop Student Here
                        </button>
                      </div>
                      <div className="p-4 border border-slate-100 rounded-xl bg-background hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary-container">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-white font-bold">
                              OL
                            </div>
                            <div>
                              <h4 className="font-bold text-primary">
                                Dr. Olumide Lawson
                              </h4>
                              <p className="text-xs text-slate-500">
                                Computer Engineering
                              </p>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-slate-200 rounded">
                            <span className="material-symbols-outlined text-[18px]">
                              more_vert
                            </span>
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[11px] font-bold mb-1">
                              <span className="text-slate-400 uppercase">
                                Current Capacity
                              </span>
                              <span className="text-primary">
                                12 / 15 Students
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-primary-container w-[80%]"></div>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">
                              Current Students
                            </p>
                            <div className="flex -space-x-2">
                              <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"></div>
                              <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"></div>
                              <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"></div>
                              <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] text-slate-500 font-bold">
                                +9
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="mt-4 w-full py-2 bg-white border border-slate-200 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                          Drop Student Here
                        </button>
                      </div>
                      <div className="p-4 border border-slate-100 rounded-xl bg-background hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-error">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-3">
                            <img
                              className="w-12 h-12 rounded-lg object-cover"
                              data-alt="A professional portrait of a senior female university professor with silver hair and a sophisticated, friendly demeanor. She is wearing a professional suit jacket. The background is a brightly lit, high-end academic conference room with clean white walls and navy blue accents."
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiPmumWOFfmI9oCDuizjdh0mCWe4YKMPpWKVW-Fznf78sPRmRg8JHgZk5T1fy9uu0824tkPx5RsmBp3u6L5YtT9gsD0O_FJfb7bG2LHXrLVc_tS4apNNlMB7Cyrb8Go0KIT451Ao-kmeBompbUpiFlF1No1ZjnciWWa08imW8j0M2_niNjgSQ6vD045mlzD_MwKMBD4X03Mrwxlgh9sohF1jBuk7ucy8SfICPeYjozovALpgCUgzAqaov0HibGY2ovbI5Wyfz_3PmC"
                            />
                            <div>
                              <h4 className="font-bold text-primary">
                                Dr. Elena Rodriguez
                              </h4>
                              <p className="text-xs text-slate-500">
                                Information Tech.
                              </p>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-slate-200 rounded">
                            <span className="material-symbols-outlined text-[18px]">
                              more_vert
                            </span>
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[11px] font-bold mb-1">
                              <span className="text-error uppercase">
                                Maximum Capacity
                              </span>
                              <span className="text-error">
                                10 / 10 Students
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-error w-[100%]"></div>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">
                              Specialization
                            </p>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold">
                                Cybersecurity
                              </span>
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold">
                                Cloud Computing
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          className="mt-4 w-full py-2 bg-slate-100 border border-slate-200 text-slate-400 text-xs font-bold rounded-lg cursor-not-allowed"
                          disabled=""
                        >
                          Capacity Reached
                        </button>
                      </div>
                      <div className="p-4 border border-slate-100 rounded-xl bg-background hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-white font-bold">
                              AM
                            </div>
                            <div>
                              <h4 className="font-bold text-primary">
                                Prof. Alice Morgan
                              </h4>
                              <p className="text-xs text-slate-500">
                                Electrical Engineering
                              </p>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-slate-200 rounded">
                            <span className="material-symbols-outlined text-[18px]">
                              more_vert
                            </span>
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[11px] font-bold mb-1">
                              <span className="text-slate-400 uppercase">
                                Current Capacity
                              </span>
                              <span className="text-primary">
                                2 / 12 Students
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-secondary w-[16%]"></div>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">
                              Available Focus Areas
                            </p>
                            <p className="text-[11px] text-primary">
                              Power Systems, Renewable Energy
                            </p>
                          </div>
                        </div>
                        <button className="mt-4 w-full py-2 bg-white border border-slate-200 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                          Drop Student Here
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-container p-lg rounded-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="font-h2 text-h2 text-white mb-2">
                    Streamline Your Data Import
                  </h2>
                  <p className="text-on-primary-container font-body-md">
                    Upload student registration lists directly from institution
                    portals. Our system automatically parses Excel and CSV
                    formats to match students with their respective departments
                    and levels.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex flex-col items-center">
                    <span className="material-symbols-outlined text-4xl mb-2 text-on-primary-container">
                      description
                    </span>
                    <span className="text-[10px] font-bold uppercase text-white/60">
                      Download Template
                    </span>
                  </div>
                  <div className="bg-white text-primary p-4 rounded-xl flex flex-col items-center cursor-pointer hover:bg-slate-100 transition-colors">
                    <span className="material-symbols-outlined text-4xl mb-2">
                      cloud_upload
                    </span>
                    <span className="text-[10px] font-bold uppercase">
                      Upload Student File
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="fixed bottom-lg right-lg bg-white border border-slate-200 shadow-2xl rounded-2xl p-md hidden">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <p className="font-bold text-primary">Students Selected</p>
              <p className="text-caption text-slate-500">
                Drag to a supervisor to assign
              </p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full">
              <span className="material-symbols-outlined text-primary">
                close
              </span>
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminPanel;
