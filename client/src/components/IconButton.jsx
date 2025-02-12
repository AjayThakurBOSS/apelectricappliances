import React, { useState } from 'react';
import '../css/iconcardcss.css';
import ACIcon from '../images/air-conditioner.png';
import FridgeIcon from '../images/refrigerator.png';
import HeaterIcon from '../images/water-boiler.png';
import ROIcon from '../images/water-filter.png';
import WashIcon from '../images/laundry.png';
import TVIcon from '../images/tvi.png';
import ChimniIcon from '../images/extractor.png';
import OvenIcon from '../images/baking.png';
import { useNavigate } from 'react-router-dom';
import SplitAC from '../images/splitAC.webp';
import WindowAC from '../images/windowAC.jpg';
import Fridge from '../images/fridge.jpg';
import WashingMachine from '../images/washigmachine.jpg';
import Microwwave from '../images/microwave.jpg';
import Kitchenhimney from '../images/kitchenchimney.jpg';
import RO from '../images/RO.webp';
import Gidger from '../images/gidger.jpg';
import TV from '../images/tv.jpg';
import DoubleDoor from '../images/doubledoor.svg'
import SidebySide from '../images/fidgesidebyside.png'
import Semiautomatic from '../images/semiautomatic.webp'
import AutomaticTopLoad from '../images/automaticTopLoad.jpeg'
import CeillingMount from '../images/ceillingMount.webp'
import WallMount from '../images/wallMount.webp'
import Alkaline from '../images/alkaline.webp'
import Minaral from '../images/minaral.jpg'
import OTG from '../images/OTG.webp'
import Gidger22 from '../images/gidger22.jpg'
import Oled from '../images/oled.webp'




const IconButton = () => {
  const [openModule, setOpenModule] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCardClick = (item) => {
        setSelectedItem(item);
      };

      const handleBookNow = (title) => {
        navigate('/appointment', { state: { selectedAppliance: title } }); // Pass selected title to Appointment component
      };

  // Define unique content and buttons for each icon
  const iconData = [
    {
      id: 1,
      icon: ACIcon,
      buttons: ['Split AC', 'Window AC'],
      contents: {
        'Split AC': [
          {
            image: SplitAC,
            text: 'Servcing',
          },
          {
            image: SplitAC,
            text: 'Water Leakage',
          }, 
          {
            image: SplitAC,
            text: 'Deep Cleaning',
          },
          {
            image: SplitAC,
            text: 'No / Low Cooling',
          },
          {
            image: SplitAC,
            text: 'Gas Filling',
          },
          {
            image: SplitAC,
            text: 'AC Steblizer',
          },
          {
            image: SplitAC,
            text: 'Installation',
          },
          {
            image: SplitAC,
            text: 'Un-installation',
          },
        ],
        'Window AC': [
          {
            image: WindowAC,
            text: 'Servcing',
          },
          {
            image: WindowAC,
            text: 'Water Leakage',
          }, 
          {
            image: WindowAC,
            text: 'Deep Cleaning',
          },
          {
            image: WindowAC,
            text: 'No / Low Cooling',
          },
          {
            image: WindowAC,
            text: 'Gas Filling',
          },
          {
            image: WindowAC,
            text: 'AC Steblizer',
          },
          {
            image: WindowAC,
            text: 'Installation',
          },
          {
            image: WindowAC,
            text: 'Un-installation',
          },
        ],
      },
    },

    {
      id: 6,
      icon: FridgeIcon,
      buttons: ['Single Door', 'Double Door', 'Side-by-side'],
      contents: {
        'Single Door': [
          {
            image: Fridge,
            text: 'Power On Issue / No Power',
          },
          {
            image: Fridge,
            text: 'Not Working',
          },
          {
            image: Fridge,
            text: 'Low / No Cooling',
          },
          {
            image: Fridge,
            text: 'Water Leakage',
          },
         
        ],
        'Double Door': [
          {
            image: DoubleDoor,
            text: 'Power On Issue / No Power',
          },
          {
            image: DoubleDoor,
            text: 'Not Working',
          },
          {
            image: DoubleDoor,
            text: 'Low / No Cooling',
          },
          {
            image: DoubleDoor,
            text: 'Water Leakage',
          },
        ],
        'Side-by-side': [
          {
            image: SidebySide,
            text: 'Power On Issue / No Power',
          },
          {
            image: SidebySide,
            text: 'Not Working',
          },
          {
            image: SidebySide,
            text: 'Low / No Cooling',
          },
          {
            image: SidebySide,
            text: 'Water Leakage',
          },  
        ],
      },
    },

    {
      id: 2,
      icon: WashIcon,
      buttons: ['Semi Automatic', 'Automatic Front Load', 'Automatic Top Load'],
      contents: {
        'Semi Automatic': [
          {
            image: Semiautomatic,
            text: 'Power on Issue / No Power',
          },
          {
            image: Semiautomatic,
            text: 'Not Wash',
          },
          {
            image: Semiautomatic,
            text: 'No Speed',
          },
          {
            image: Semiautomatic,
            text:'Unwanted Noice',
          },
        ],
        'Automatic Front Load': [
          {
            image: WashingMachine,
            text: 'Power on Issue / No Power',
          },
          {
            image: WashingMachine,
            text: 'Not Wash',
          },
          {
            image: WashingMachine,
            text: 'No Speed',
          },
          {
            image: WashingMachine,
            text:'Unwanted Noice',
          },
        ],

        'Automatic Top Load': [
          {
            image: AutomaticTopLoad,
            text: 'Power on Issue / No Power',
          },
          {
            image: AutomaticTopLoad,
            text: 'Not Wash',
          },
          {
            image: AutomaticTopLoad,
            text: 'No Speed',
          },
          {
            image: AutomaticTopLoad,
            text:'Unwanted Noice',
          },
        ],
       
      },
    },

    {
      id: 3,
      icon: ChimniIcon,
      buttons: ['Wall Mount', 'Ceilling Mount'],
      contents: {
        'Wall Mount': [
          {
            image: WallMount,
            text: 'Power on Issue / No Power',
          },
          {
            image: WallMount,
            text: 'Not Working',
          },
          {
            image: WallMount,
            text: 'servicing / normal cleaning',
          },
          {
            image: WallMount,
            text: 'servicing / Deep Cleaning',
          },
          {
            image: WallMount,
            text: 'Installation',
          },
          {
            image: WallMount,
            text: 'Un-installation',
          },
        ],
        'Ceilling Mount': [
          {
            image: CeillingMount,
            text: 'Power on Issue / No Power',
          },
          {
            image: CeillingMount,
            text: 'Not Working',
          },
          {
            image: CeillingMount,
            text: 'servicing / normal cleaning',
          },
          {
            image: CeillingMount,
            text: 'servicing / Deep Cleaning',
          },
          {
            image: CeillingMount,
            text: 'Installation',
          },
          {
            image: CeillingMount,
            text: 'Un-installation',
          },
        ],
       
      },
    },

    {
      id: 4,
      icon: ROIcon,
      buttons: ['Minral RO', 'Alkaline RO'],
      contents: {
        'Minral RO': [
          {
            image: Minaral,
            text: 'Power on Issue / No Power',
          },
          {
            image: Minaral,
            text: 'Not Working',
          },
          {
            image: Minaral,
            text: 'Water not Filtering',
          },
          {
            image: Minaral,
            text: 'Not Good Water Quality',
          },
          {
            image: Minaral,
            text: 'Servicing',
          },
          {
            image: Minaral,
            text: 'Installation',
          },
          {
            image: Minaral,
            text: 'Un-installation',
          },
        ],
        'Alkaline RO': [
          {
            image: Alkaline,
            text: 'Power on Issue / No Power',
          },
          {
            image: Alkaline,
            text: 'Not Working',
          },
          {
            image: Alkaline,
            text: 'Water not Filtering',
          },
          {
            image: Alkaline,
            text: 'Not Good Water Quality',
          },
          {
            image: Alkaline,
            text: 'Servicing',
          },
          {
            image: Alkaline,
            text: 'Installation',
          },
          {
            image: Alkaline,
            text: 'Un-installation',
          },
        ],
      }
    },
    
    {
      id: 5,
      icon: OvenIcon,
      buttons: ['OTG', 'Oven'],
      contents: {
        'OTG': [
          {
            image: OTG,
            text: 'Power on Issue / No Power',
          },
          {
            image: OTG,
            text: 'Not Working',
          },
          {
            image: OTG,
            text: 'Not Heating',
          },
        ],
        'Oven': [
          {
            image: Microwwave,
            text: 'Power on Issue / No Power',
          },
          {
            image: Microwwave,
            text: 'Not Working',
          },
          {
            image: Microwwave,
            text: 'Not Heating',
          },
        ],
      }
    },

    {
      id: 7,
      icon: HeaterIcon,
      buttons: ['1-5L', '10-15L', '20-30L', '30L +'],
      contents: {
        '1-5L': [
          {
            image: Gidger,
            text: 'Power on Issue / No Power',
          },
          {
            image: Gidger,
            text: 'Not Heating',
          },
          {
            image: Gidger,
            text: 'No Flow of Water',
          },
          {
            image: Gidger,
            text: 'Water Leakage',
          },
          {
            image: Gidger,
            text: 'Servicing',
          },
          {
            image: Gidger,
            text: 'Installation',
          },
          {
            image: Gidger,
            text: 'Un-installation',
          },
        ],
        '10-15L': [
          {
            image: Gidger22,
            text: 'Power on Issue / No Power',
          },
          {
            image: Gidger22,
            text: 'Not Heating',
          },
          {
            image: Gidger22,
            text: 'No Flow of Water',
          },
          {
            image: Gidger22,
            text: 'Water Leakage',
          },
          {
            image: Gidger22,
            text: 'Servicing',
          },
          {
            image: Gidger22,
            text: 'Installation',
          },
          {
            image: Gidger22,
            text: 'Un-installation',
          },
        ],
        '20-30L': [
          {
            image: Gidger,
            text: 'Power on Issue / No Power',
          },
          {
            image: Gidger,
            text: 'Not Heating',
          },
          {
            image: Gidger,
            text: 'No Flow of Water',
          },
          {
            image: Gidger,
            text: 'Water Leakage',
          },
          {
            image: Gidger,
            text: 'Servicing',
          },
          {
            image: Gidger,
            text: 'Installation',
          },
          {
            image: Gidger,
            text: 'Un-installation',
          },
        ],

        '30L +': [
          {
            image: Gidger22,
            text: 'Power on Issue / No Power',
          },
          {
            image: Gidger22,
            text: 'Not Heating',
          },
          {
            image: Gidger22,
            text: 'No Flow of Water',
          },
          {
            image: Gidger22,
            text: 'Water Leakage',
          },
          {
            image: Gidger22,
            text: 'Servicing',
          },
          {
            image: Gidger22,
            text: 'Installation',
          },
          {
            image: Gidger22,
            text: 'Un-installation',
          },
        ],


      },
    },

    {
      id: 8,
      icon:TVIcon ,
      buttons: ['LED TV', 'OLED TV'],
      contents: {
        'LED TV': [
          {
            image: TV,
            text: 'Power on Issue / No Power',
          },
          {
            image: TV,
            text: 'Not Working',
          },
          {
            image: TV,
            text:'Sound Problem',
          },
          {
            image: TV,
            text: 'Noice Problem',
          },
          {
            image: TV,
            text: 'Installation',
          },
          {
            image: TV,
            text: 'Un-installation',
          },
        ],
        'OLED TV': [
          {
            image: Oled,
            text: 'Power on Issue / No Power',
          },
          {
            image: Oled,
            text: 'Not Working',
          },
          {
            image: Oled,
            text:'Sound Problem',
          },
          {
            image: Oled,
            text: 'Noice Problem',
          },
          {
            image: Oled,
            text: 'Installation',
          },
          {
            image: Oled,
            text: 'Un-installation',
          },
        ],

      },
    },
     
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handleIconClick = (id) => {
    setOpenModule(id);
    setActiveButton(null); // Reset active button when a new module is opened
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const renderModuleContent = () => {
    if (!openModule) return null;

    const selectedIcon = iconData.find((icon) => icon.id === openModule);
    if (!selectedIcon) return null;

    const activeContents = activeButton ? selectedIcon.contents[activeButton] : [];

    return (
      <>
        <button className="Xbutton" onClick={() => setOpenModule(false)}>
          x
        </button>

        <div className="module-overlay">
          <div className="module">
            <div className="module-header">
              {selectedIcon.buttons.map((button) => (
                <button key={button} onClick={() => handleButtonClick(button)}
                className={activeButton === button ? 'active' : ''}
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="module-content">
              {activeContents.map((content, index) => (
                <div key={index} className="card" onClick={() => handleCardClick(content.text)}>
                  <img src={content.image} alt="Content" className="card-image" />
                  <div className="card-buttons">
                  <p>{content.text}</p>
                    <div>
                    <button className="call-now" > <a href='tel:94721 67198'>Call Now</a> </button>
                    <button className="book-now" onClick={() => handleBookNow(selectedItem.text)}>Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="icon-button-module">
      <div className="icon-buttons">
        {iconData.map((icon) => (
          <button key={icon.id} onClick={() => handleIconClick(icon.id)}>
            <img src={icon.icon} alt="icon" />
          </button>
        ))}
      </div>

      {renderModuleContent()}
    </div>
  );
};

export default IconButton;