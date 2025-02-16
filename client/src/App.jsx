import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import ProtectedRoute from './layout/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import LayoutPage from './layout/LayoutPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path='/login' element={<Login/> }/>
        <Route path='/register' element={<Register/>}  />
        <Route path='/dashboard' element={
         <LayoutPage/>
         
          } />
         {/*  <Route path='/dashboard' element={
          <ProtectedRoute> <LayoutPage/>
          </ProtectedRoute>
          } /> */}
        </Routes>
        </Router>
      </main>
      <Footer />
      
    </div>
  )
}

export default App