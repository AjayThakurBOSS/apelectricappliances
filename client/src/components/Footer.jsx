import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import FooterLogo from '../images/colorLogo.png'

function Footer() {
  const position = [25.5970354,85.1487114] // Replace with your actual coordinates

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={FooterLogo} alt='logo ' width='300' className='bg-white rounded-lg' />
            <h3 className="text-xl font-bold mb-4">A.P. Electric Appliances services</h3>
            <p className="mb-4">Your trusted partner for all home appliance repairs since 20 Yrs.</p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="https://facebook.com" className="hover:text-primary border border-white border-solid p-2 rounded-md">Facebook</a>
              <a href="https://x.com" className="hover:text-primary border border-white border-solid p-2 rounded-md">Twitter</a>
              <a href="https://instagram.com" className="hover:text-primary border border-white border-solid p-2 rounded-md">Instagram</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p>U-462 Lohiya nagar,</p>   Bihar 800020
            <p>Opposit panchshiv mandir,</p>
            <p>kankarbagh patna 20,</p>
            <p>Phone: 094721 67198</p>
            <p>Email: service@aptac.in</p>
          </div>

          <div className="h-64 rounded-lg overflow-hidden">
            <MapContainer center={position} zoom={13} className="h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  QuickFix Appliances <br /> We are here!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer