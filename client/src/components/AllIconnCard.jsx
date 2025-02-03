import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SplitAC from '../images/splitAC.webp';
import WindowAC from '../images/windowAC.jpg';
import Fridge from '../images/fridge.jpg';
import WashingMachine from '../images/washigmachine.jpg';
import Microwwave from '../images/microwave.jpg';
import Kitchenhimney from '../images/kitchenchimney.jpg';
import RO from '../images/RO.webp';
import Dishwasher from '../images/dishwasher.jpg';
import Gidger from '../images/gidger.jpg';
import TV from '../images/tv.jpg';
import Inverter from '../images/inverter.webp';
import Mixer from '../images/mixer.jpg';
import Grinder from '../images/grinder.jpg';
import Induction from '../images/induction-stove.jpg';
import CeilingFan from '../images/ceilinfan.webp';
import Tablefan from '../images/table-fan.jpg';
import Cooler from '../images/cooler.webp';
import Speaker from '../images/speaker.jpg';
import HomeTheater from '../images/mometheater.jpg';
import Cleaner from '../images/vaccome.jpg';

// Styled Components (same as before)
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem 7%;
  font-family: Arial, sans-serif;

  @media (max-width: 500px) {
    padding: 0.2rem;flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 99%;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  line-height: 1;
  font-weight: 600;
  padding-left: 10px;
  background-color: #17cf45;
  padding: 15px 10px;
  border-radius: 5px;
  color: #fff;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 4fr));
    gap: 5px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid green;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 500px) {
    border-radius: 3px;
  }
`;

const Image = styled.img`
  width: 75px;
  height: 64px;
  object-fit: contain;
`;

const Label = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalImage = styled.img`
  width: 250px;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ModalButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: green;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;

// Component
const AllIconCard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const homeAppliances = [
    { name: 'Split AC', image: SplitAC },
    { name: 'Window AC', image: WindowAC },
    { name: 'Fridge', image: Fridge },
    { name: 'Washing Machine', image: WashingMachine },
    { name: 'Microwave', image: Microwwave },
    { name: 'Kitchen Chimney', image: Kitchenhimney },
    { name: 'Water Purifier', image: RO },
    { name: 'Dishwasher', image: Dishwasher },
    { name: 'Water Heater', image: Gidger },
    { name: 'TV', image: TV },
  ];

  const miniAppliances = [
    { name: 'Inverter', image: Inverter },
    { name: 'Mixer', image: Mixer },
    { name: 'Grinder', image: Grinder },
    { name: 'Induction', image: Induction },
    { name: 'Ceiling Fan', image: CeilingFan },
    { name: 'Table Fan', image: Tablefan },
    { name: 'Cooler', image: Cooler },
    { name: 'Speaker', image: Speaker },
    { name: 'Home Theater', image: HomeTheater },
    { name: 'Vacuum Cleaner', image: Cleaner },
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleBookNow = (title) => {
    navigate('/appointment', { state: { selectedAppliance: title } }); // Pass selected title to Appointment component
  };

  return (
    <Container>
      <Section>
        <Heading>Home Appliances</Heading>
        <CardContainer>
          {homeAppliances.map((item, index) => (
            <Card key={index} onClick={() => handleCardClick(item)}>
              <Image src={item.image} alt={item.name} />
              <Label>{item.name}</Label>
            </Card>
          ))}
        </CardContainer>
      </Section>

      <Section>
        <Heading>Mini Home Appliances </Heading>
        <CardContainer>
          {miniAppliances.map((item, index) => (
            <Card key={index} onClick={() => handleCardClick(item)}>
              <Image src={item.image} alt={item.name} />
              <Label>{item.name}</Label>
            </Card>
          ))}
        </CardContainer>
      </Section>

      {selectedItem && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedItem.image} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <div>
            <ModalButton onClick={() => alert(`Calling ${selectedItem.name}`)}>Call Now</ModalButton>
            <ModalButton onClick={() => handleBookNow(selectedItem.name)}>Book Now</ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default AllIconCard;