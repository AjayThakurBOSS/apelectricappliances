import {  Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import ProtectedRoute from './layout/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import LayoutPage from './layout/LayoutPage'
import ResetPassword from './pages/ResetPassword'
import HomePage from './pages/HomePage'
import OfflineAppointment from './pages/OfflineAppointment'
import LogoutPage from './pages/LogoutPage'
import Feedback from './pages/Feedback'
import SeeAppointmentRequests from './pages/SeeAppointmentRequests'
import Users from './pages/Users'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
  
      <main className="flex-grow">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path='/login' element={<Login/> }/>
        <Route path='/register' element={<Register/>}  />
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/logout' element={<LogoutPage/>}/>
        
       <Route path='/admin/feedbacks' element={
          <ProtectedRoute> <Feedback/>
          </ProtectedRoute>
          } />

          <Route path='/admin/appointment-requests' element={
          <ProtectedRoute> <SeeAppointmentRequests/>
          </ProtectedRoute>
          } /> 

<Route path='/admin/users' element={
          <ProtectedRoute> <Users/>
          </ProtectedRoute>
          } />
          
          <Route path='/dashboard' element={
          <ProtectedRoute> <LayoutPage/>
          </ProtectedRoute>
          } />
        
        <Route path='/admin/offline-appointment' element={
          <ProtectedRoute> <OfflineAppointment/>
          </ProtectedRoute>
          } />
        </Routes>
    
      </main>
      
      
    </div>
  )
}

export default App