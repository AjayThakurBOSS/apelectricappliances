import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

// Styled components (same as before)
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 7%;
  gap: 10px;

  @media (max-width: 768px) {
    // flex-direction: column-reverse;
    gap: 2px;
    padding: 0px 7px 3px 7px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex: 1;
  transition: transform 0.3s ease;
  border: 1px solid green;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #17cf45;
  margin-bottom: 15px;
font-weight: 700;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    font-weight: 700;
    color: #17cf45;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    font-weight: 500;
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
  max-width: 500px;
  width: 90%;
`;

const ModalHeading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const ModalDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
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

// Main Component
const QuickBreaf = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate(); // For navigation

  const cards = [
    {
      title: 'Home Appliances Service',
      description:
        'We provide comprehensive repair and maintenance services for all your home appliances. Ensure your appliances are running smoothly with our expert technicians.',
    },
    {
      title: 'Installation & Un-installation',
      description:
        'Fast and reliable Installation & Un-installation  services for all the home appliances. Our team is available 24/7 to ensure your comfort is restored as quickly as possible.',
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleBookNow = (title) => {
    navigate('/appointment', { state: { selectedAppliance: title } }); // Pass selected title to Appointment component
  };

  return (
    <Container>
      {cards.map((card, index) => (
        <Card key={index} onClick={() => handleCardClick(card)}>
          <Heading>{card.title}</Heading>
          <Description>{card.description}</Description>
        </Card>
      ))}

      {selectedCard && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeading>{selectedCard.title}</ModalHeading>
            <ModalDescription>{selectedCard.description}</ModalDescription>
            <ModalButton >
            <a href="tel:94721 67198">Call Now</a>
            </ModalButton>
            <ModalButton onClick={() => handleBookNow(selectedCard.title)}>
              Book Now
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default QuickBreaf;