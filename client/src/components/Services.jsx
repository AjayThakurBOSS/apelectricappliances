import React from 'react';
import { User, Star, Wrench, RefrigeratorIcon, CookingPot, WashingMachine, Fan, Coffee, Plug, Lightbulb } from 'lucide-react';

function Services() {
  const services = [
    {
      title: "Refrigeration Appliances",
      items: ["Refrigerators", "Freezers", "Ice Makers", "Wine Coolers"],
      icon: <RefrigeratorIcon className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Cooking Appliances",
      items: ["Ovens", "Stoves", "Microwaves", "Range Hoods"],
      icon: <CookingPot className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Washing & Drying Appliances",
      items: ["Washing Machines", "Dryers", "Dishwashers"],
      icon: <WashingMachine className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Heating & Cooling Appliances",
      items: ["Air Conditioners", "Heaters", "Fans", "Dehumidifiers"],
      icon: <Fan className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Kitchen Appliances",
      items: ["Coffee Makers", "Blenders", "Food Processors", "Toasters"],
      icon: <Coffee className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Other Home Appliances",
      items: ["Vacuum Cleaners", "Water Heaters", "Garbage Disposals"],
      icon: <Plug className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Miscellaneous Appliances",
      items: ["Smart Home Devices", "Security Systems", "Doorbells"],
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Head Electrician Section */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl  sm:text-4xl font-bold text-green-600">Meet Our Head Electrician</h2>
              <div className="flex items-center space-x-2">
                <User className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-semibold">Kanhaiya Kumar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-lg">20+ Years of Experience</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over two decades of hands-on experience in electrical repairs and maintenance,
                Kanhaiya Kumar leads our team of skilled technicians. His expertise spans across all types
                of home appliances, ensuring your electrical systems and appliances are in the most
                capable hands.
              </p>
              <div className="flex items-center space-x-2">
                <Wrench className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-medium">Master Certified Electrician</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="Professional Electrician"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 bg-green-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-5">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-green-700">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;