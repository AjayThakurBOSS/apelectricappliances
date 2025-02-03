import { motion } from 'framer-motion'

const benefits = [
  {
    before: 'Broken Appliances',
    after: 'Fully Functional Home',
    icon: '🏠'
  },
  {
    before: 'Stress & Frustration',
    after: 'Peace of Mind',
    icon: '😌'
  },
  {
    before: 'Wasted Time & Money',
    after: 'Cost-Effective Solutions',
    icon: '💰'
  },
  {
    before: 'Uncertain Quality',
    after: 'Professional Service',
    icon: '✅'
  }
]

function BeforeAfter() {
  return (
    <section className="py-5 bg-green my-5" style={{backgroundColor: '#17cf45'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <h2 className="text-2xl sm:text-4xl Md:text-4xl font-bold text-white mb-4">Transform Your Experience</h2>
          <p className="text-sm sm:text-xl md:text-xl text-white max-w-3xl mx-auto ">
            See how our professional repair service can transform your daily life from frustration to satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 sm:gap-8 gap-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-2 sm:p-8 md:p-8 text-center h-full shadow-lg border-solid border-2">
                <span className="text-4xl mb-6 block">{benefit.icon}</span>
                <div className="space-y-6">
                  <div className="bg-red-50 p-1 sm:p-4 md:p-4 rounded-lg">
                    <h3 className="text-red-600 font-semibold mb-2">Before</h3>
                    <p className=" text-gray-700 text-sm md:text-lg sm:text-lg ">{benefit.before}</p>
                  </div>
                  <div className="relative py-4">
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                      →
                    </div>
                  </div>
                  <div className="bg-green-50 p-1 sm:p-4 md:p-4 rounded-lg">
                    <h3 className="text-green-600 font-semibold mb-2">After</h3>
                    <p className="text-gray-700 text-sm md:text-lg sm:text-lg">{benefit.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter