import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../images/colorLogo.png"
import styled from 'styled-components'
import { BsFillTelephoneForwardFill } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <marquee style={{color: 'green', fontWeight:'600'}}>APES Technology |  Electric & Home Appliances Repair| Best and Fast  Repair  Service | Emergency Service </marquee>
      <hr />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1 }}
                className="h-14 w-auto sm:h-20 md:h-20 lg:h-20"
                src={Logo}
                alt="QuickFix Appliances"
              />
            </Link>
            <NameDiv>
              <span className=''>APES</span> <br/>Technology
            </NameDiv>
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
              href="tel:9472167198" 
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
      <div className="md:hidden flex justify-center items-center py-2 absolute  top-7 absolute left-3/4 transform -translate-x-1/2">
        <a
          href="tel:94721 67198" // Replace with your mobile number
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          <span className="text-md md:text-xl text-white"><BsFillTelephoneForwardFill  className='text-white'/></span>
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


const NameDiv = styled.div`
margin: 0;
padding: 0;
font-size: 25px;
line-height: .8;
color: #020c4a;
font-weight: 600;
span {
   font-family: "Spicy Rice", serif;
  font-size: 45px;
  font-weight: 700;
  color: green;
}

@media  (max-width: 600px){
font-size: 18px;
margin: 0 0 2px 0; 
  span {
  font-size: 35px;
  font-weight: 700;
  color: green;
}
}
`