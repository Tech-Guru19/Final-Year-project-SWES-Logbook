import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const OtpVerification = () => {
  const location = useLocation()
  const [otp, setOpt] = useState("")
  useEffect(() => {
    console.log(location);
    
  }, [])

  return (
    <>
      <div className="font-body-md text-on-surface min-h-screen flex flex-col">
        <header className="fixed top-0 w-full border-b bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex justify-between items-center px-6 h-16 w-full z-50">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-900 dark:text-blue-100 font-h2">
              SIWES Tracker
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" >
            <button className="bg-primary text-white font-inter text-sm font-medium tracking-tight px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out">
              Back
            </button>
            </Link>
            <button className="font-inter text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors px-3 py-2 rounded">
              Help
            </button>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center px-gutter pt-16 pb-8 mt-24 ">
          <div className="max-w-[480px] w-full">
            <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded-lg shadow-sm">
              <div className="flex flex-col items-center mb-xl">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-md">
                  <span
                    className="material-symbols-outlined text-primary text-[28px]"
                    data-icon="shield_person"
                  >
                    shield_person
                  </span>
                </div>
                <h1 className="font-h2 text-h2 text-primary-container mb-sm text-center">
                  Verify Your Identity
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-[340px]">
                  We've sent a 6-digit verification code to your institutional
                  email (j.doe@university.edu.ng).
                </p>
              </div>
              <form className="space-y-xl">
                <div
                  className="flex justify-between gap-2 md:gap-3 border border-2 border-primary"
                  id="otp-container"
                >
                  <input style={{width:"100%"}} value={otp} onChange={(e)=>{setOpt(e.target.value)}}
                    className="w-100 h-14 md:w-14 md:h-16 text-center text-h2 font-h2 border border-outline rounded bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
                    maxLength="4"
                    placeholder="••••"
                    type="number"
                  /> 
                </div>
                <button
                  className="w-full h-[40px] bg-primary-container text-white font-label-md text-label-md rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center uppercase tracking-wider"
                  type="button"
                >
                  Verify Code
                </button>
                <div className="flex flex-col items-center gap-sm">
                  <div className="flex items-center gap-2 font-caption text-caption text-on-surface-variant">
                    <span>Didn't receive the code?</span>
                    <button
                      className="text-secondary font-semibold hover:underline transition-colors"
                      disabled=""
                      type="button"
                    >
                      Resend Code
                    </button>
                  </div>
                  <div className="font-caption text-caption text-outline flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      data-icon="schedule"
                    >
                      schedule
                    </span>
                    <span>Resend code in 0:59</span>
                  </div>
                </div>
              </form>
              <div className="mt-xl pt-lg border-t border-outline-variant flex justify-center">
                <a
                  className="flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors group"
                  href="#"
                >
                  <span
                    className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform"
                    data-icon="arrow_back"
                  >
                    arrow_back
                  </span>
                  Back to Login
                </a>
              </div>
            </div>
            <div className="mt-lg px-md text-center">
              <p className="font-caption text-caption text-outline">
                Facing issues? Contact the institutional IT helpdesk at{" "}
                <span className="text-secondary">support@university.edu.ng</span>
              </p>
            </div>
          </div>
        </main>
        <footer className="w-full py-8 border-t bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center px-8 gap-4 mt-28">
          <div className="font-bold text-slate-700 dark:text-slate-300">
            SIWES Tracker
          </div>
          <div className="text-xs font-normal text-slate-500 dark:text-slate-400 text-center">
            © 2024 SIWES Logbook Management System. All academic rights
            reserved.
          </div>
          <div className="flex gap-6">
            <a
              className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors duration-200"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors duration-200"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs font-normal text-slate-500 hover:text-blue-700 transition-colors duration-200"
              href="#"
            >
              Support
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OtpVerification;
