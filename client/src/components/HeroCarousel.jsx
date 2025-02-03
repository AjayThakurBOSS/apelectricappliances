import Slider from 'react-slick'
import { motion } from 'framer-motion'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3',
    title: 'Expert Appliance Repair',
    description: 'Professional repair services for all your home appliances',
    highlight: 'Same Day Service Available'
  },
  {
    image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3',
    title: 'AC & Refrigeration',
    description: 'Keep your cool with our expert repair services',
    highlight: '24/7 Emergency Service'
  },
  {
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3',
    title: 'Washing Machine Repair',
    description: 'Get your laundry back on track',
    highlight: 'Certified Technicians'
  }
]

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  }

  return (
<div className="relative  min-h-[300px] md:h-[80vh]">
  <Slider {...settings}>
    {slides.map((slide, index) => (
      <div key={index} className="relative  min-h-[300px] md:h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl text-left md:text-left"
            >
              {/* Highlight Label */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold mb-3 md:mb-4"
              >
                {slide.highlight}
              </motion.span>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-sm md:text-xl text-white/90 mb-6 md:mb-8">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-row sm:flex-row gap-3 md:gap-4">
                <motion.a
                  href="/appointment"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-2 md:py-4 md:px-8 rounded-lg text-sm md:text-lg inline-flex items-center justify-center gap-2"
                >
                  <span className="text-lg md:text-2xl">🔧</span> Book Now
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-white/90 text-primary font-bold py-2 px-2 md:py-4 md:px-8 rounded-lg text-sm md:text-lg inline-flex items-center justify-center gap-2"
                >
                  <span className="text-lg md:text-2xl">📞</span> Call Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

  )
}

export default HeroCarousel