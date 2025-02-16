import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaBackspace } from "react-icons/fa";


function Appointment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const location = useLocation();
  const selectedAppliance = location.state?.selectedAppliance;
  const [address, setAddress] = useState('');
  const applianceType = watch('applianceType'); // Watch the applianceType field
  const subSelection = watch('subSelection'); // Watch the subSelection field
  const [dependentOptions, setDependentOptions] = useState([]); // State for dependent options
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/v1/customer/requestAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit service request');
      }
  
      const result = await response.json();
      console.log('Service request submitted successfully:', result);
  
      // Show thank-you message
      setIsSubmitted(true);
  
      // Open WhatsApp with the booking details if the link is provided
      if (result.whatsappLink) {
        window.open(result.whatsappLink, '_blank'); // Open WhatsApp in a new tab
      } else {
        console.warn('No WhatsApp link provided in the response.');
      }
  
    } catch (error) {
      console.error('Error submitting service request:', error);
      alert('An error occurred while submitting your request. Please try again.');
    }
  };

  

  // Auto-fill the appliance type if it's passed
  useEffect(() => {
    if (selectedAppliance) {
      const transformedValue = selectedAppliance.toLowerCase().replace(/\s+/g, '-');
      setValue('applianceType', transformedValue);
    }
  }, [selectedAppliance, setValue]);

  // Function to fetch address from geolocation
  const fetchAddressFromGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            );
            const data = await response.json();
  
            if (data.address) {
              const { road, suburb, city, state, country, postcode } = data.address;
              const fetchedAddress = `${road || ''}, ${suburb || ''}, ${city || ''}, ${state || ''}, ${country || ''} - ${postcode || ''}`;
              setAddress(fetchedAddress);
            } else {
              console.error('No address found for the given coordinates.');
            }
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  // const onSubmit = (data) => {
    // console.log(data);
    // Handle form submission
  // };

  // Define sub-selections based on appliance type
  const getSubSelections = (type) => {
    switch (type) {
      case 'refrigerators':
        return ['Single Door', 'Double Door', 'Side-by-side'];
        
      case 'freezers':
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];

      case 'ice-makers':
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];

      case 'wine-coolers':
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];

      case 'ovens':
        return ['NO Power', 'Not Heating'];  

      case 'stoves':
        return ['Not Working', 'Low Flame', 'Broken', ];  

      case 'microwaves':
        return ['NO Power', 'Not Heating'];    

      case 'range-hoods':
          return ['Wallmount Chimney', 'Celling Chimney',];  

      case 'washing-machine':
          return ['Semi Automatic', 'Full Automatic (Top load)', 'Full Automatic (Front Load)']; 

      case 'dryers':
          return ['Power on Issue', 'No Power', 'Not Working', 'No Speed', 'Unwanted Noice',];  

      case 'dishwashers':
        return ['Power on Issue', 'No Power', 'Not Working', 'No Speed',];

      case 'air-conditioners':
        return ['AC Stabilizer', 'Low / No colling', 'Water Leakage', 'Servicing', 'Deep Cleaning', 'Gas Filling', 'Installation', 'Un-Installation'];

      case 'heaters':
        return ['Blower Room Heater', 'Oil Room Heater', 'Induction Room Heater', 'Water Heater' ];

      case 'fans':
        return ['No / Low Speed', 'Making Noice', 'Not Working', ];

      case 'dehumidifiers':
        return ['No / Low Speed', 'Making Noice', 'Not Working',];  

      case 'coffee-makers':
        return ['No Power', 'Not Heating',];  

      case 'blenders':
        return ['No / Low Speed', 'Making Noice', 'Not Working',];    

      case 'food-processors':
          return ['No Power', 'Not Heating',];  

      case 'toasters':
          return ['No Power', 'Not Heating',]; 

      case 'split-ac':
          return [ 'AC Stabilizer', 'Low / No colling', 'Water Leakage', 'Servicing', 'Deep Cleaning', 'Gas Filling', 'Installation', 'Un-Installation'];  

          case 'window-ac':
            return [ 'AC Stabilizer', 'Low / No colling', 'Water Leakage', 'Servicing', 'Deep Cleaning', 'Gas Filling', 'Installation', 'Un-Installation'];

          case 'fridge':
            return ['Single Door', 'Double Door', 'Side-by-side'];
            
          case 'washing-machines':
            return ['Semi Automatic', 'Full Automatic (Top load)', 'Full Automatic (Front Load)'];
          
           case 'microwave':
            return ['OTG', 'Oven'];

          case 'kitchen-chimney':
            return ['Wallmount Chimney', 'Celling Chimney', ];
            
            
          case 'water-purifier':
            return ['Minral RO', 'Alkaline RO',];  
          
            case 'gidger':
            return ['1 L to 5 L', '10 L to 15 L', '20 L to 30 L ', ' 30 L + ' ];    
          
            case 'tv':
              return ['LED TV', 'OLED TV', ];  
          
           case 'inverter':
              return ['Home Inverter', 'Office Inverter', 'Online Inverter', ]; 
          
          case 'mixer':
              return ['Mixer Grinder', 'Juice Mixer', 'Not working', 'Low / High Speed',];  

          case 'grinder':
            return ['Not working', 'Low / High Speed',];

          case 'induction':
            return ['No Power', 'No Heating', 'Broken', ];

          case 'ceiling-fan':
            return ['No / Low Speed', 'Making Noice', 'Not Working', ];

          case 'table-fan':
            return ['No / Low Speed', 'Making Noice', 'Not Working', ];

          case 'cooler':
            return ['No / Low Speed', 'Making Noice', 'Not Working', ];

          case 'speaker':
            return ['No Power', 'broken', 'Sound Problem',];  

          case 'home-theater':
            return ['No Power', 'broken', 'Sound Problem',];

          case 'vacuum-cleaner':
              return ['Power Issue', 'Not Sucking', 'Broken', ];  


              case 'stabilizer':
                return ['AC Stablizer', 'Home Stablizer', 'TV Stablizer',  ]; 

      case 'Installation & Un-installation':
        return ['Installation','Un-installation']

          case 'other':
              return []; 
           
      // Add more cases as needed
      default:
        return [];

    }
  };

  // Define dependent options based on sub-selection
  const getDependentOptions = (type, subSelection) => {
    switch (type) {
      case 'Installation & Un-installation':
        if (subSelection === 'Installation') {
          return ['Window AC', 'Split AC', 'Washing Machine', 'Gidger', 'TV', "RO", "Chimney", 'Inverter', 'Stablizer', 'Ceilling Fan', 'Stand Fan', 'Wall Fan', 'Room Heater'];
        } else if (subSelection === 'Un-installation') {
          return ['Window AC', 'Split AC', 'Washing Machine', 'Gidger', 'TV', "RO", "Chimney", 'Inverter', 'Stablizer', 'Ceilling Fan', 'Stand Fan', 'Wall Fan', 'Room Heater'];
        }
        return [];
        
      case 'range-hood':
        if(subSelection === 'Wallmount Chimney'){
          return ['Power on Issue', 'No Power', 'Not Working', 'servicing / normal cleaning', 'servicing / Deep Cleaning', 'Installation', 'Un-installation']
      } else if (subSelection === 'Celling Chimney'){
        return ['Power on Issue', 'No Power', 'Not Working', 'servicing / normal cleaning', 'servicing / Deep Cleaning', 'Installation', 'Un-installation']
      }
      return [];

      case 'kitchen-chimney':
        if(subSelection === 'Wallmount Chimney'){
          return ['Power on Issue', 'No Power', 'Not Working', 'servicing / normal cleaning', 'servicing / Deep Cleaning', 'Installation', 'Un-installation']
      } else if (subSelection === 'Celling Chimney'){
        return ['Power on Issue', 'No Power', 'Not Working', 'servicing / normal cleaning', 'servicing / Deep Cleaning', 'Installation', 'Un-installation']
      }
      return [];

      case 'water-purifier':
        if(subSelection === 'Minral RO'){
          return ['Power on Issue', 'No Power', 'Not Working', 'Water not Filtering','Not Good Water Quality', 'Servicing',  'Installation', 'Un-installation']
      } else if (subSelection === 'Alkaline RO'){
        return ['Power on Issue', 'No Power', 'Not Working', 'Water not Filtering', 'Servicing', 'Not Good Water Quality', 'Installation', 'Un-installation']
      }
      return []; 

      case 'gidger':
        if(subSelection === '1 L to 5 L'){
          return ['Power on Issue', 'No Power', 'Not Working', 'Wter Leakage','No Flow of Water', 'Servicing',  'Installation', 'Un-installation']
      } else if (subSelection === '10 L to 15 L'){
        return ['Power on Issue', 'No Power', 'Not Working', 'Wter Leakage','No Flow of Water', 'Servicing',  'Installation', 'Un-installation']
      }else if (subSelection === '20 L to 30 L'){
        return ['Power on Issue', 'No Power', 'Not Working', 'Wter Leakage','No Flow of Water', 'Servicing',  'Installation', 'Un-installation']
      }else if (subSelection === '30 L +'){
        return ['Power on Issue', 'No Power', 'Not Working', 'Wter Leakage','No Flow of Water', 'Servicing',  'Installation', 'Un-installation']
      }
      return []; 

      case 'tv':
        if(subSelection === 'LED TV'){
          return ['Power on Issue', 'No Power', 'Not Working', 'Sound Problem', 'Noice Problem',  'Installation', 'Un-installation']
      } else if (subSelection === 'OLED TV'){
        return ['Power on Issue', 'No Power', 'Not Working',  'Sound Problem', 'Noice Problem',  'Installation', 'Un-installation']
      }
      return []; 

      case 'microwave':
        if(subSelection === 'OTG'){
          return ['Power on Issue', 'No Power', 'Not Working', 'Not Heating', ]
      } else if (subSelection === 'oven'){
        return ['Power on Issue', 'No Power', 'Not Working',  'Not Heating']
      }
      return []; 

      case 'fridge':
        if(subSelection === 'Single Door'){
          return ['No Power', 'Low / No Cooling', 'Water Leakage',];
      } else if (subSelection === 'Double Door'){
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];
      }else if (subSelection === 'Side-by-side'){
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];      }
      return []; 

      case 'inverter':
        if(subSelection === 'Home Inverter'){
          return ['Backup Problem', 'Not Working',];
      } else if (subSelection === 'Office Inverter'){
        return ['Backup Problem', 'Not Working',];
      }else if (subSelection === 'Side-by-side'){
        return ['Backup Problem', 'Online Inverter',];    }
      return [];

      case 'stabilizer':
        if(subSelection === 'AC Stablizer'){
          return ['No Power', 'making noice', 'broken',];
      } else if (subSelection === 'Home Stablizer'){
        return ['No Power', 'making noice', 'broken',];
      }else if (subSelection === 'TV Stablizer'){
        return ['No Power', 'making noice', 'broken',];      }
      return [];

      case 'refrigerators':
        if(subSelection === 'Single Door'){
          return ['No Power', 'Low / No Cooling', 'Water Leakage',];
      } else if (subSelection === 'Double Door'){
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];
      }else if (subSelection === 'Side-by-side'){
        return ['No Power', 'Low / No Cooling', 'Water Leakage',];      }
      return []; 

      case 'washing-machine':
        if(subSelection === 'Semi Automatic'){
         return ['Power on Issue', 'No Power', 'Not Wash', 'Not Working', 'No Speed', 'Unwanted Noice', ]
      } else if (subSelection === 'Full Automatic (Top load)'){
        return ['Power on Issue', 'No Power', 'Not Wash', 'Not Working', 'No Speed', 'Unwanted Noice', ];
      }else if (subSelection === 'Full Automatic (Front Load)'){
        return ['Power on Issue', 'No Power', 'Not Wash', 'Not Working', 'No Speed', 'Unwanted Noice', ];      }
      return []; 

      case 'washing-machines':
        if(subSelection === 'Semi Automatic'){
         return ['Power on Issue', 'No Power', 'Not Wash', 'Not Working', 'No Speed', 'Unwanted Noice', ]
      } else if (subSelection === 'Full Automatic (Top load)'){
        return ['Power on Issue', 'No Power', 'Not Wash', 'Not Working', 'No Speed', 'Unwanted Noice', ];
      }else if (subSelection === 'Full Automatic (Front Load)'){
        return ['Power on Issue', 'No Power', 'Not Wash', 'Not Working', 'No Speed', 'Unwanted Noice', ];      }
      return []; 

      case 'heaters':
        if(subSelection === 'Blower Room Heater'){
          return ['No Power', 'Not Heating', 'broken' , 'Water Leakage'];
      } else if (subSelection === 'Oil Room Heater'){
        return ['No Power', 'Not Heating', 'broken','Water Leakage' ];
      }else if (subSelection === 'Induction Room Heater'){
        return ['No Power', 'Not Heating', 'broken' ,'Water Leakage'];    
        }
        else if (subSelection === 'Water Heater'){
          return ['No Power', 'Not Heating', 'broken' ,'Water Leakage'];    
          }
      return []; 
      // Add more cases for other appliance types
      default:
        return [];
    }
  };

  // Update dependent options when subSelection changes
  useEffect(() => {
    if (subSelection) {
      const options = getDependentOptions(applianceType, subSelection);
      setDependentOptions(options);
    } else {
      setDependentOptions([]);
    }
  }, [subSelection, applianceType]);

  const subSelections = getSubSelections(applianceType);

  return (
    <div className="py-16 bg-gray-50">
      <StyledLink to="/"> <FaBackspace/> </StyledLink>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Schedule a Service</h1>
          {
            isSubmitted ? (
              <ThankYouMessage>
              <h1 className="text-center m-3" style={{ color: "#1951F8" }}>
                Thank You!
              </h1>
              <p className="text-center">
                We have received your message and will get back to you soon.
              </p>
            </ThankYouMessage>
            ): (
              <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Appliance Type</label>
                  <select
                    {...register('applianceType', { required: 'Please select an appliance type' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  >
                    <option value="">Select an appliance</option>
                    <option value="Installation & Un-installation">Installation & Un-installation</option>
                    
                    <option value="refrigerators">Refrigerators</option>
                    <option value="freezers">Freezers</option>
                    <option value="ice-makers">Ice Makers</option>
                    <option value="wine-coolers">Wine Coolers</option>
                    <option value="ovens">Ovens</option>
                    <option value="stoves">Stoves</option>
                    <option value="microwaves">Microwaves</option>
                    <option value="range-hoods">Range Hoods</option>
                    <option value="washing-machines">Washing Machines</option>
                    <option value="dryers">Dryers</option>
                    <option value="dishwashers">Dishwashers</option>
                    <option value="air-conditioners">Air Conditioners</option>
                    <option value="heaters">Heaters</option>
                    <option value="fans">Fans</option>
                    <option value="dehumidifiers">Dehumidifiers</option>
                    <option value="coffee-makers">Coffee Makers</option>
                    <option value="blenders">Blenders</option>
                    <option value="food-processors">Food Processors</option>
                    <option value="toasters">Toasters</option>
                    <option value="split-ac">Split AC</option>
                    <option value="window-ac">Window AC</option>
                    <option value="fridge">Fridge</option>
                    <option value="washing-machine">Washing Machine</option>
                    <option value="microwave">Microwave</option>
                    <option value="kitchen-chimney">Kitchen Chimney</option>
                    <option value="water-purifier">Water Purifier</option>
                    <option value="dishwasher">Dishwasher</option>
                    <option value="gidger">Water Heater (Gidger)</option>
                    <option value="tv">TV</option>
                    <option value="inverter">Inverter</option>
                    <option value="mixer">Mixer</option>
                    <option value="grinder">Grinder</option>
                    <option value="induction">Induction</option>
                    <option value="ceiling-fan">Ceiling Fan</option>
                    <option value="table-fan">Table Fan</option>
                    <option value="cooler">Cooler</option>
                    <option value="speaker">Speaker</option>
                    <option value="home-theater">Home Theater</option>
                    <option value="vacuum-cleaner">Vacuum Cleaner</option>
                    <option value="stabilizer">Stabilizer</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.applianceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.applianceType.message}</p>
                  )}
                </div>
  
                {applianceType && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Sub Selection</label>
                    <select
                      {...register('subSelection', { required: 'Please select a sub selection' })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    >
                      <option value="">Select an option</option>
                      {subSelections.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.subSelection && (
                      <p className="mt-1 text-sm text-red-600">{errors.subSelection.message}</p>
                    )}
                  </div>
                )}
  
                {subSelection && dependentOptions.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Dependent Selection</label>
                    <select
                      {...register('dependentSelection', { required: 'Please select a dependent selection' })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    >
                      <option value="">Select a dependent option</option>
                      {dependentOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.dependentSelection && (
                      <p className="mt-1 text-sm text-red-600">{errors.dependentSelection.message}</p>
                    )}
                  </div>
                )}
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Flat/House Number</label>
                  <input
                    type="text"
                    {...register('flatHouseNumber', { required: 'Flat/House number is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {errors.flatHouseNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.flatHouseNumber.message}</p>
                  )}
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Landmark</label>
                  <input
                    type="text"
                    {...register('landmark')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Date and Time</label>
                  <input
                    type="datetime-local"
                    {...register('dateTime', { required: 'Please select a date and time' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {errors.dateTime && <p className="mt-1 text-sm text-red-600">{errors.dateTime.message}</p>}
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    {...register('address')}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {/* <button
                    type="button"
                    onClick={fetchAddressFromGeolocation}
                    className="mt-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                  >
                    Use My Current Location
                  </button> */}
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Issue Description</label>
                  <textarea
                    {...register('description', { required: 'Please describe the issue' })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>
  
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary transition-colors"
                >
                  Book Appointment
                </motion.button>
              </form>
            </div>
            )
          }
         
        </motion.div>
      </div>
    </div>
  );
}

export default Appointment;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: rgba(16, 23, 235, 0.52);
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 600px;
  color: white;
`;

const StyledLink = styled(Link)`
  font-size: 50px;
  position: fixed;
  top: 15%;
  right: 10%;

  @media (max-width: 500px){
  position: fixed;
    top: 10%;
    right: 7%;
    font-size: 30px;
  }
`

