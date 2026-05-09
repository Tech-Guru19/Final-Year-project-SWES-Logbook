const SupervisionAcctRequest = () => {
  return (
    <>
      <body className="bg-background text-on-background min-h-screen flex flex-col">
        <header className="flex justify-between items-center w-full h-16 px-lg bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline docked full-width top-0 z-50">
          <div className="flex items-center gap-md">
            <span className="text-h3 font-h3 font-bold text-primary dark:text-primary-fixed-dim">
              SIWES Management
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-lg">
            <div className="relative group">
              <div className="flex items-center bg-surface-container-low px-md py-xs rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-on-surface-variant mr-sm">
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-body-md w-48"
                  placeholder="Search resources..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm rounded-full hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">
                notifications
              </span>
            </button>
            <button className="p-sm rounded-full hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">
                help
              </span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary-container"
                data-weight="fill"
              >
                account_circle
              </span>
            </div>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center p-gutter lg:p-xl">
          <div className="w-full max-w-2xl">
            <div className="mb-lg text-center">
              <div className="inline-flex items-center justify-center p-md bg-white border border-outline-variant rounded-xl mb-md shadow-sm">
                <img
                  alt="Institution Logo"
                  className="h-12 w-12 object-contain"
                  data-alt="A clean and professional institutional heraldry logo or emblem representing a university, designed in deep navy blue and crisp white. The visual style is minimalist and corporate, emphasizing academic authority and administrative precision. The lighting is bright and even, suited for a high-end educational portal."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBUq_iC1SIcGpH05XT3k12T_ad9TASnk5h2sZD092hft7-qRFMzOo4w5S5bYTkUtL52NyTHLajdzCbauI8zOFkSjhwZTuiO-7EYfrxN5kJGd1VGAImOIfKvWUT1uI2nzWELgWD1qvhRjYLfbd7Afgu8uu4ep2G_mJM3PD6ljYktmGpMOFUplMTtuaNkLnqc3RaddhJyyIhQpXxleshxH35owRNcqdaYlJui5JMXLdlVTfNun74pnH02nyBOqZqomzazCM9Bu09bS6r"
                />
              </div>
              <h1 className="font-h1 text-h1 text-primary mb-xs">
                Request Supervisor Access
              </h1>
              <p className="font-body-md text-on-surface-variant">
                Complete the registration form to join the institutional SIWES
                platform.
              </p>
            </div>
            <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
              <div className="p-gutter lg:p-xl">
                <div className="mb-lg flex items-start gap-md bg-surface-container-low p-md rounded-lg border-l-4 border-secondary">
                  <span className="material-symbols-outlined text-secondary">
                    info
                  </span>
                  <p className="font-body-md text-on-surface-variant">
                    Registration requests are manually reviewed by the
                    Institutional SIWES Coordinator. You will receive an email
                    confirmation once your access is approved.
                  </p>
                </div>
                <form className="space-y-lg">
                  <div className="space-y-xs">
                    <label className="block font-label-md text-primary uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      className="w-full h-10 px-md border border-outline-variant rounded-lg focus:border-2 focus:border-primary focus:ring-0 text-body-md transition-all"
                      placeholder="Dr. Jane Smith"
                      type="text"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="block font-label-md text-primary uppercase tracking-wider">
                      Institutional Email
                    </label>
                    <input
                      className="w-full h-10 px-md border border-outline-variant rounded-lg focus:border-2 focus:border-primary focus:ring-0 text-body-md transition-all"
                      placeholder="j.smith@university.edu.ng"
                      type="email"
                    />
                    <p className="font-caption text-on-surface-variant flex items-center gap-xs mt-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        verified_user
                      </span>
                      Must be a valid @university.edu.ng address.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-xs">
                      <label className="block font-label-md text-primary uppercase tracking-wider">
                        Department/Faculty
                      </label>
                      <select className="w-full h-10 px-md border border-outline-variant rounded-lg focus:border-2 focus:border-primary focus:ring-0 text-body-md transition-all bg-white">
                        <option disabled="" selected="" value="">
                          Select Department
                        </option>
                        <option>Computer Science</option>
                        <option>Mechanical Engineering</option>
                        <option>Biological Sciences</option>
                        <option>Architecture</option>
                      </select>
                    </div>
                    <div className="space-y-xs">
                      <label className="block font-label-md text-primary uppercase tracking-wider">
                        Staff ID Number
                      </label>
                      <input
                        className="w-full h-10 px-md border border-outline-variant rounded-lg focus:border-2 focus:border-primary focus:ring-0 text-body-md transition-all"
                        placeholder="STF/2023/048"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="block font-label-md text-primary uppercase tracking-wider">
                      Role
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-sm">
                      <label className="relative flex items-center p-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                        <input
                          className="w-4 h-4 text-primary border-outline-variant focus:ring-0"
                          name="role"
                          type="radio"
                        />
                        <span className="ml-md font-body-md text-on-surface">
                          Departmental Coordinator
                        </span>
                      </label>
                      <label className="relative flex items-center p-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                        <input
                          className="w-4 h-4 text-primary border-outline-variant focus:ring-0"
                          name="role"
                          type="radio"
                        />
                        <span className="ml-md font-body-md text-on-surface">
                          Industry Liaison
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="pt-md border-t border-outline-variant">
                    <button
                      className="w-full h-10 bg-primary text-white font-label-md uppercase tracking-widest rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm"
                      type="submit"
                    >
                      Submit Request
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </button>
                    <div className="mt-lg text-center">
                      <a
                        className="font-body-md text-secondary hover:underline transition-all"
                        href="#"
                      >
                        Already have an account? Sign in
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-lg flex justify-center items-center gap-xl opacity-60 grayscale hover:grayscale-0 transition-all">
              <img
                alt="ITF Nigeria"
                className="h-8"
                data-alt="Logo of the Industrial Training Fund of Nigeria, rendered in a professional, monochrome navy style for a corporate educational dashboard. The environment is clean and modern, suggesting institutional collaboration and government compliance."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfHDpB4UDBdDtQMbt8fpXTTdpgUKR3fli1BC1sY_u9YPNZG9yE66sE2LXFjJEtDC7014ygc6nspWU_1PgulDC1Zas74t8N84AuEO0Y-D3ssvTTD8U4BLq8Fnxamdw9a_fIxZsIGS_1GsUYCU5VnaIE6SyKHF05QVqR15Z2oFHri2epjCLZ7GuikIM7BhzurELy_8ZXU17fX_2R_isq2B4rrsOcSRB2IoIIXz3V7BMrv_aAtHzEGG1SndGiJKBg2sBvf7LXS-hK2AKI"
              />
              <img
                alt="Academic Council"
                className="h-8"
                data-alt="A professional logo for a national academic regulatory council, displayed as a supporting institution in a clean, high-contrast navy and white color scheme. The lighting is flat and professional, matching a minimalist digital government interface."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk-aTycsiLQzPD0ggBOP49YIXbxS_t4fL2W5JQRo9LpTJIkADpEiQYAtShhoD4DYnjr4Wx4wxV_4aADabuFxff809sbuxV9OGLXMh5zKD3VCr9bVOw-pFRXo3sLzatcL7pVW1p2zCTRILGGERaGqlcHj4oI5H39zsm7PKwE5nMD9ZM0lF2_4mgOhTTs44bjMGhF9VcA9T60ME7sixkfErh3LXyPDCAiQqISnW9Kssu8rHooTvwecaA3pzEGOM1WUUmEDA2FHmRFwpz"
              />
            </div>
          </div>
        </main>
        <footer className="flex flex-col md:flex-row justify-between items-center px-lg py-md w-full bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline mt-auto">
          <div className="text-caption font-caption text-on-surface-variant dark:text-surface-variant text-center md:text-left mb-md md:mb-0">
            © 2024 SIWES Management System. Institutional Reliability &amp;
            Administrative Efficiency.
          </div>
          <div className="flex flex-wrap justify-center gap-lg">
            <a
              className="text-caption font-caption text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-caption font-caption text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-caption font-caption text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Support Desk
            </a>
          </div>
        </footer>
      </body>
    </>
  );
};

export default SupervisionAcctRequest;
