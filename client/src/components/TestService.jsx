import React, { useState } from 'react';
import { RefrigeratorIcon, CookingPot, WashingMachine, Fan, Coffee, Plug, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Fridge from '../images/fridge.jpg';
import Freedger from '../images/freedger.png';
import Icemaker from '../images/icemaker.jpg';
import WineCooler from '../images/winecoolear.jpg';
import Oven from '../images/oven.avif';
import Stove from '../images/stoves.avif';
import Microwwave from '../images/microwave.jpg';
import Kitchenhimney from '../images/kitchenchimney.jpg';
import WashingMachinee from '../images/washigmachine.jpg';
import Driare from '../images/driar.webp';
import Dishwasher from '../images/dishwasher.jpg';
import SplitAC from '../images/splitAC.webp';
import Heater from '../images/heater.webp';
import CeilingFan from '../images/ceilinfan.webp';
import Cooler from '../images/cooler.webp';
import Blender from '../images/blender.jpg';
import FoodProcessor from '../images/foodProcessor.webp';
import Toaster from '../images/toaster.webp';

function Services() {
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected card
  const navigate = useNavigate(); // Initialize useNavigate

  const services = [
    {
      title: "Refrigeration Appliances",
      background: "bg-blue-100",
      items: [
        {
          name: "Refrigerators",
          image: Fridge,
          description: "Professional refrigerator repair services, including cooling issues and maintenance.",
        },
        {
          name: "Freezers",
          image: Freedger,
          description: "Efficient freezer repairs to keep your frozen goods safe and preserved.",
        },
        {
          name: "Ice Makers",
          image: Icemaker,
          description: "Repair services for ice makers ensuring a steady supply of ice.",
        },
        {
          name: "Wine Coolers",
          image: WineCooler,
          description: "Maintain ideal temperatures for your wine collection with expert repairs.",
        },
      ],
      icon: <RefrigeratorIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Cooking Appliances",
      background: "bg-yellow-50",
      items: [
        {
          name: "Ovens",
          image: Oven,
          description: "Repair and maintenance services for all oven types, ensuring even cooking.",
        },
        {
          name: "Stoves",
          image: Stove,
          description: "Quick and efficient stove repairs for gas, induction, and electric models.",
        },
        {
          name: "Microwaves",
          image: Microwwave,
          description: "Microwave repair services for faster and easier cooking.",
        },
        {
          name: "Range Hoods",
          image: Kitchenhimney,
          description: "Keep your kitchen fresh with expert range hood repairs.",
        },
      ],
      icon: <CookingPot className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Washing & Drying Appliances",
      background: "bg-green-50",
      items: [
        {
          name: "Washing Machines",
          image: WashingMachinee,
          description: "Repair services for all washing machine brands, types, and models.",
        },
        {
          name: "Dryers",
          image: Driare,
          description: "Quick dryer repairs to keep your laundry routine running smoothly.",
        },
        {
          name: "Dishwashers",
          image: Dishwasher,
          description: "Efficient dishwasher repair and performance optimization.",
        },
      ],
      icon: <WashingMachine className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Heating & Cooling Appliances",
      background: "bg-red-50",
      items: [
        {
          name: "Air Conditioners",
          image: SplitAC,
          description: "Expert AC repair to keep your home cool and comfortable.",
        },
        {
          name: "Heaters",
          image: Heater,
          description: "Comprehensive heater repairs for a warm and cozy home.",
        },
        {
          name: "Fans",
          image: CeilingFan,
          description: "Repair services for ceiling, table, and wall-mounted fans.",
        },
        {
          name: "Dehumidifiers",
          image: Cooler,
          description: "Dehumidifier repairs to maintain perfect indoor humidity levels.",
        },
      ],
      icon: <Fan className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Kitchen Appliances",
      background: "bg-orange-50",
      items: [
        {
          name: "Coffee Makers",
          image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3",
          description: "Coffee maker repairs for all brands and models.",
        },
        {
          name: "Blenders",
          image: Blender,
          description: "Blender repairs for smooth and efficient operation.",
        },
        {
          name: "Food Processors",
          image: FoodProcessor,
          description: "Keep your food processor running with expert repairs.",
        },
        {
          name: "Toasters",
          image: Toaster,
          description: "Toaster repairs to ensure evenly toasted bread every time.",
        },
      ],
      icon: <Coffee className="w-8 h-8 text-orange-500" />,
    },
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item); // Set the selected card
  };

  const handleCloseModal = () => {
    setSelectedItem(null); // Close the modal
  };

  const handleBookNow = (title) => {
    navigate('/appointment', { state: { selectedAppliance: title } }); // Navigate to Appointment component
  };

  return (
    <div className="min-h-screen">
      <section className="py-2 md:py-16 sm:py-16">
        <div className="max-w-6xl mx-auto px-2">
          {services.map((service, index) => (
            <div key={index} className={`py-6 ${service.background} rounded-lg mb-2 pl-2 pr-3`}>
              {/* Service Title & Icon */}
              <div className="flex items-center space-x-3 mb-6">
                {service.icon}
                <h3 className="text-2xl md:text-2xl font-semibold text-green-700">
                  {service.title}
                </h3>
              </div>

              {/* Service Cards - 2 Per Row on Mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-3 md:gap-3">
                {service.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => handleCardClick(item)} // Open modal on card click
                  >
                    {/* Image with Overlay */}
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" sm:h-48 w-full h-auto object-cover rounded-lg mb-4 "
                      />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                        <p className="text-center text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-1 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {item.name}
                      </h4>
                      <div className="flex justify-between">
                        <button
                          className="bg-green-500 text-white py-2 px-2 rounded-lg hover:bg-green-600 text-[12px] "
                          onClick={() => handleBookNow(selectedItem.name)} // Navigate to Appointment
                        >
                          Book Now
                        </button>
                        <button
                          className="bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 text-[12px]"
                          onClick={() => alert(`Calling for ${selectedItem.name}`)} // Placeholder for Call Now
                        >
                          Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Selected Card */}
      {selectedItem && (
        <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <button className='absolute top-10 right-10 bg-white rounded-md w-10 h-10' onClick={() =>handleCloseModal()}>X</button>
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-auto object-cover rounded-lg mb-4 "
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {selectedItem.name}
            </h2>
            <p className="text-gray-600 mb-6">{selectedItem.description}</p>
            <div className="flex justify-between">
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
                onClick={() => handleBookNow(selectedItem.name)} // Navigate to Appointment
              >
                Book Now
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
               
              >
               <a href="tel:94721 67198">Call Now</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;