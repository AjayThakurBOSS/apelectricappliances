import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Refrigerator Repair',
    icon: '❄️',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3',
    description: 'Expert repair for all refrigerator brands',
    features: [
      'Same day service',
      'All brands covered',
      'Warranty on parts',
      'Free diagnostic with repair'
    ]
  },
  {
    title: 'AC Repair & Service',
    icon: '🌡️',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3',
    description: 'Complete AC maintenance and repair',
    features: [
      '24/7 emergency service',
      'Preventive maintenance',
      'Energy efficiency tune-up',
      'Filter replacement'
    ]
  },
  {
    title: 'Washing Machine Repair',
    icon: '🧺',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3',
    description: 'Professional washer repair services',
    features: [
      'All types of washers',
      'Quick turnaround',
      'Genuine parts',
      'Expert technicians'
    ]
  },
  {
    title: 'Dishwasher Repair',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3',
    description: 'Efficient dishwasher repair solutions',
    features: [
      'Leak repair',
      'Performance tuning',
      'Parts replacement',
      'Installation service'
    ]
  }
]

function ServiceCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/90 mb-4">{service.description}</p>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, height: hoveredIndex === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-white/90 flex items-center gap-2">
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <Link
                to="/appointment"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Book Service
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ServiceCards