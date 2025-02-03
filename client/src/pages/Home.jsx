import { motion } from 'framer-motion'
import HeroCarousel from '../components/HeroCarousel'
import ServiceCards from '../components/ServiceCards'
import Testimonials from '../components/Testimonials'
import BeforeAfter from '../components/BeforeAfter'
import Services from '../components/Services'
import TestService from '../components/TestService'
import QuickBreaf from '../components/QuickBreaf'
import AllIconCard from '../components/AllIconnCard'

function Home() {
  return (
    <div className="overflow-hidden">

      <HeroCarousel />
      <QuickBreaf/>
      <AllIconCard/>
      <BeforeAfter />
      <Services />

     

      <TestService/>

      {/* Services Section */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-700 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to routine maintenance, our certified technicians are here to keep your appliances running smoothly.
            </p>
          </motion.div>
          <ServiceCards />
        </div>
      </section>

      {/* Before/After Transformation */}


      {/* Testimonials */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Need Emergency Repair?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our technicians are available 24/7 for urgent repairs. Don't let a broken appliance disrupt your life.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center gap-2"
              >
                <span className="text-2xl">📞</span> Call Now
              </motion.a>
              <motion.a
                href="/appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center gap-2"
              >
                <span className="text-2xl">📅</span> Book Online
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home