import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../images/cropedlogo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <marquee style={{color: 'green', fontWeight:'600'}}>A P Electric & Home Appliances, Best and Fast  Repair  Shop </marquee>
      <hr />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="h-16 w-auto sm:h-24 md:h-24 lg:h-24"
                src={Logo}
                alt="QuickFix Appliances"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary font-bold">Home</Link>
            <Link to="/contact" className="text-gray-900 hover:text-primary font-bold">Contact</Link>
            <Link to="/appointment" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-secondary">
              Book Appointment
            </Link>
            <div className="">
            <a
              href="tel:+1234567890" // Replace with your mobile number
              className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
            >
              Call Now
            </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Call Now Button (Centered) */}
      <div className="md:hidden flex justify-center items-center py-2 absolute  top-7 absolute left-1/2 transform -translate-x-1/2">
        <a
          href="tel:94721 67198" // Replace with your mobile number
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
        >
          Call Now
        </a>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
            Home
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
            Contact
          </Link>
          <Link to="/appointment" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-secondary">
            Book Appointment
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
