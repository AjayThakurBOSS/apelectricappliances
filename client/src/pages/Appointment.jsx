import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.display_name) {
              const fetchedAddress = data.display_name;
              setAddress(fetchedAddress);
              setValue('address', fetchedAddress);
            } else {
              console.error('No address found for the given coordinates.');
            }
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  // Define sub-selections based on appliance type
  const getSubSelections = (type) => {
    switch (type) {
      case 'refrigerators':
        return ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
      case 'freezers':
        return ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];
      case 'ice-makers':
        return ['Option X', 'Option Y', 'Option Z', 'Option W', 'Option V'];
      // Add more cases as needed
      default:
        return [];
    }
  };

  const subSelections = getSubSelections(applianceType);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Schedule a Service</h1>

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
                  <option value="water-heater">Water Heater</option>
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
                  {...register('address', { required: 'Address is required' })}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={fetchAddressFromGeolocation}
                  className="mt-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                >
                  Use My Current Location
                </button>
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
        </motion.div>
      </div>
    </div>
  );
}

export default Appointment;