import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const signup = () => {
  const [emailAdress, setEmailAdress] = useState("")
  const [fullName, setFullName] = useState("")
  const [Matriculation_No, setMatriculation_No] = useState("")
  const [Instituition_Mail, setInstituition_Mail] = useState("")
  const [department, setDepartment] = useState("")
  const [password, setPassword] = useState("")

  const signUp = () =>{
    axios.post("http://localhost:5687/auth/signup",{
      emailAdress,
      fullName,
      Matriculation_No,
      Instituition_Mail,
      department,
      password
    })
    .then((data)=>{
      console.log(data?.data?.message);
      
    })
    .catch((err)=>{
      console.log(err.response);
      
    })
  }
  return (
    <>Instituition_Mail
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
      <main className="min-h-screen pt-24 pb-12 flex items-center justify-center px-gutter">
        <div className="w-full max-container-max grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="hidden lg:flex lg:col-span-6 flex-col gap-lg">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
              <img
                className="object-cover w-full h-full"
                data-alt="A clean, high-angle shot of a modern university library desk featuring a sleek laptop, an organized digital tablet, and a classic leather-bound notebook. The scene is bathed in soft, natural daylight streaming through large windows, creating a bright and professional atmosphere. The color palette is dominated by professional navy blues and crisp whites, reflecting a sense of institutional reliability and administrative precision. The overall mood is focused and academic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdhUKz4xl4T1AE9iXDOlL6E6tjxE0_GdYxFq5_JUXi_USBkUsDVg-Gk7aHcpAS0RJ33TL1a_24FDe54wQMDNH3oa7YqvfYaBEuW0ME25Bulk_t5PH7vXHUiVO-s1ktOC2pg3hukwp47soC-pR5AO9eP5wYkxo6pw6j2hqf_4JwhkIaYMwQGP8Z3jvyO_nrwcPDShvf8_c9KGx_iltERitxBGwtO93UlJcKGQQHTrv7HyLY8qzA-a1M8WO_9o390pkSpj9GJjS_Nryw"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
            </div>
            <div>
              <h1 className="font-h1 text-h1 text-primary mb-sm">
                Streamline Your SIWES Journey
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Join thousands of students managing their industrial training
                logs with academic precision and administrative ease.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant p-xl rounded-lg">
              <div className="mb-lg">
                <h2 className="font-h2 text-h2 text-primary mb-xs">
                  Create Student Account
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Please provide your institutional details to begin.
                </p>
              </div>
              <div className="space-y-md">
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    for="full_name"
                  >
                    Full Name
                  </label>
                  <input
                    value={fullName} onChange={(e)=>{setFullName(e.target.value)}}
                    className="w-full h-[40px] px-md border border-outline focus:border-2 focus:border-primary outline-none transition-all rounded-lg bg-surface-bright"
                    id="full_name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    for="full_name"
                  >
                    Email Address
                  </label>
                  <input
                    value={emailAdress} onChange={(e)=>{setEmailAdress(e.target.value)}}
                    className="w-full h-[40px] px-md border border-outline focus:border-2 focus:border-primary outline-none transition-all rounded-lg bg-surface-bright"
                    id="full_name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    for="matric_no"
                  >
                    Matriculation Number
                  </label>
                  <input
                    value={Matriculation_No} onChange={(e)=>{setMatriculation_No(e.target.value)}}
                    className="w-full h-[40px] px-md border border-outline focus:border-2 focus:border-primary outline-none transition-all rounded-lg bg-surface-bright"
                    id="matric_no"
                    placeholder="U2018/1234567"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    for="department"
                  >
                    Department
                  </label>
                  <select
                    onChange={(e)=>{setDepartment(e.target.value)}}
                    className="w-full h-[40px] px-md border border-outline focus:border-2 focus:border-primary outline-none transition-all rounded-lg bg-surface-bright appearance-none"
                    id="department"
                  >
                    <option disabled="" selected="" value="">
                      Select your department
                    </option>
                    <option value="cs">Computer Science</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="me">Mechanical Engineering</option>
                    <option value="ce">Civil Engineering</option>
                    <option value="it">Information Technology</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    for="email"
                  >
                    Institutional Email
                  </label>
                  <div className="relative">
                    <input
                    value={Instituition_Mail} onChange={(e)=>{setInstituition_Mail(e.target.value)}}
                      className="w-full h-[40px] pl-md pr-xl border border-outline focus:border-2 focus:border-primary outline-none transition-all rounded-lg bg-surface-bright"
                      id="email"
                      placeholder="j.doe@university.edu.ng"
                      type="email"
                    />
                    <span
                      className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
                      data-icon="alternate_email"
                    >
                      alternate_email
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    for="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                      className="w-full h-[40px] pl-md pr-xl border border-outline focus:border-2 focus:border-primary outline-none transition-all rounded-lg bg-surface-bright"
                      id="password"
                      placeholder="••••••••"
                      type="password"
                    />
                    <span
                      className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
                      data-icon="visibility_off"
                    >
                      visibility_off
                    </span>
                  </div>
                  <p className="text-caption text-caption text-on-surface-variant mt-xs">
                    Must be at least 8 characters long.
                  </p>
                </div>
                <button
                  className="w-full h-[40px] bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 active:scale-[0.98] transition-all mt-lg flex items-center justify-center gap-sm"
                  onClick={signUp}
                >
                  Sign Up
                  <span
                    className="material-symbols-outlined text-[18px]"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="mt-xl pt-lg border-t border-outline-variant text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Already have an account?
                  <a
                    className="text-secondary font-bold hover:underline"
                    href="/SignIn"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4">
          <span className="font-bold text-slate-700">SIWES Tracker</span>
          <p className="text-xs font-normal text-slate-500 dark:text-slate-400">
            © 2026 SIWES Logbook Management System. All academic rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="text-slate-500 hover:text-blue-700 transition-colors duration-200 text-xs"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-500 hover:text-blue-700 transition-colors duration-200 text-xs"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-slate-500 hover:text-blue-700 transition-colors duration-200 text-xs"
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

export default signup;
