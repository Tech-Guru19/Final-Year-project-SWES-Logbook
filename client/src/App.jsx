import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/signin'
import SignUp from '../pages/signup'
import StudentDashboard from '../pages/StudentDashboard'
import DailyLogs from '../pages/DailyLogs'
import SupervisorDashboard from '../pages/SupervisorDashboard'
import CoordinatorDashboard from '../pages/CoordinatorDashboard'
import AdminPanel from '../pages/AdminPanel'

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




      </Routes>
    </BrowserRouter>
  )
}

export default App