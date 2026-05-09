import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/signin'
import SignUp from '../pages/signup'
import StudentDashboard from '../pages/StudentDashboard'
import DailyLogs from '../pages/DailyLogs'
import SupervisorDashboard from '../pages/SupervisorDashboard'
import CoordinatorDashboard from '../pages/CoordinatorDashboard'
import AdminPanel from '../pages/AdminPanel'
import OtpVerification from '../pages/OtpVerification'
import SupervisionLogin from '../pages/SupervisionLogin'
import CoordinatorLogin from '../pages/CoordinatorLogin'
import Support from '../pages/Support'
import SchoolPage from '../pages/SchoolPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/student-dashboard" element={<StudentDashboard/>}/>
        <Route path="/student-dashboard/daily-logs" element={<DailyLogs/>}/>
        <Route path="/supervisor-dashboard" element={<SupervisorDashboard/>}/>
        <Route path="/coordinator-dashboard" element={<CoordinatorDashboard/>}/>
        <Route path="/AdminPanel" element={<AdminPanel/>}/>
        <Route path="/OTP-Verification" element={<OtpVerification/>} />
        <Route path="/Supervisor-Login" element={<SupervisionLogin/>} />
        <Route path="/Coordinator-Login" element={<CoordinatorLogin/>} />
        <Route path="/Support" element={<Support/>} />
        <Route path="/School" element={<SchoolPage/>} />







      </Routes>
    </BrowserRouter>
  )
}

export default App