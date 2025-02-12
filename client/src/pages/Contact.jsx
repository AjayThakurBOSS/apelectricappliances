import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactImage from '../images/Contact.png';
import styled from 'styled-components';
import { FcEndCall } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const textareaStyle = {
    borderRadius: "0px",
    padding: "1px 5px 2px 5px",
    width: "90%",
    marginBottom: "1rem",
    border: "none",
    marginTop: "1rem",
    opacity: "0.9",
  };

  const submitContactForm = async (formData) => {
    try {
      const response = await axios.post(
        "/api/v1/feedback/postfeedback",
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting the contact form:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      contactNumber: e.target.contactNumber.value,
      message,
    };

    try {
      const result = await submitContactForm(formData);
      setIsSubmitted(true); // Update state to indicate successful submission
    } catch (err) {
      console.log(err);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <>
      <LegacyContainer>
        <HeroDiv>
          <img src={ContactImage} alt=" page Image"></img>
        </HeroDiv>
        <ContactUsForm>
          <h1 className="text-center m-3" style={{ color: "#1951F8" }}>
            We are Available round the Clock
          </h1>

          {isSubmitted ? (
            <ContactUsContainer>
              <ContactInfoDiv>
                <CallDiv>
                  <FcEndCall
                    style={{ fontSize: "40px", marginRight: "20px" }}
                  />{" "}
                  Call us on: <br />
                  +91 9523762252, +917070572665
                </CallDiv>
                <EmailDiv>
                  {" "}
                  <MdAttachEmail
                    style={{
                      fontSize: "40px",
                      marginRight: "20px",
                      color: "red",
                    }}
                  />{" "}
                  Email us on: <br /> meharheartclinic@gmail.com{" "}
                </EmailDiv>
                <AddressDiv>
                  {" "}
                  <FaHospitalAlt
                    style={{
                      fontSize: "40px",
                      marginRight: "20px",
                      color: "red",
                    }}
                  />{" "}
                  Our Address: <br /> House no 71, Akashwani Rd, Jyotipuram
                  Colony, Khajpura, Patna, Bihar 800014{" "}
                </AddressDiv>
              </ContactInfoDiv>
              <ThankYouMessage>
                <h1 className="text-center m-3" style={{ color: "#1951F8" }}>
                  Thank You!
                </h1>
                <p className="text-center">
                  We have received your message and will get back to you soon.
                </p>
              </ThankYouMessage>
            </ContactUsContainer>
          ) : (
            <>
              <ContactUsContainer>
                <ContactInfoDiv>
                  <CallDiv>
                    <FcEndCall
                      style={{ fontSize: "40px", marginRight: "20px" }}
                    />{" "}
                    Call us on: 
                    <br />
                    <a href="tel: 9472167198">+91 94721 67198</a>
                    
                  </CallDiv>
                  <EmailDiv>
                    {" "}
                    <MdAttachEmail
                      style={{
                        fontSize: "40px",
                        marginRight: "20px",
                        color: "red",
                      }}
                    />{" "}
                    Email us on: <br /> service@aptac.in{" "}
                  </EmailDiv>
                  <AddressDiv>
                    {" "}
                    <FaHospitalAlt
                      style={{
                        fontSize: "40px",
                        marginRight: "20px",
                        color: "red",
                      }}
                    />{" "}
                    Our Address: <br /> U-462 Lohiya nagar,

Bihar 800020
Opposit panchshiv mandir,

kankarbagh patna 20,
                  </AddressDiv>
                </ContactInfoDiv>
                <ContactUsFormDiv onSubmit={handleSubmit}>
                  <h3>Your feedbacks are heartly welcome..</h3>
                  <Fieldinput
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                  />
                  <Fieldinput
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                  />
                  <Fieldinput
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number *"
                    required
                  />
                  <textarea
                    id="uro"
                    name="uro"
                    rows="4"
                    cols="38"
                    placeholder="Message..."
                    value={message}
                    onChange={handleChange}
                    style={textareaStyle}
                    required
                  />
                  <SubmitBUtton type="submit">Submit</SubmitBUtton>
                </ContactUsFormDiv>
              </ContactUsContainer>
             {/*  <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9007669286193!2d85.0791294!3d25.608213499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5794bd55625b%3A0xda7ad84d678b73e!2sMehar%20heart%20clinic%2C%20patna!5e0!3m2!1sen!2sin!4v1735034475746!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </>
          )}
        </ContactUsForm>
      </LegacyContainer>
    </>
  );
};

export default Contact;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: rgba(16, 23, 235, 0.52);
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 600px;
  color: white;
`;

const ContactInfoDiv = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  @media screen and (min-width: 200px) and (max-width: 900px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const CallDiv = styled.div`
  height: 100px;
  width: 70%;
  padding: 10px 20px;
  margin-top: 20px;
  background: linear-gradient(135deg, rgb(151, 75, 231), #2575fc);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const EmailDiv = styled.div`
  height: 100px;
  width: 70%;
  padding: 10px 20px;
  margin-top: 20px;
  background: linear-gradient(135deg, rgb(151, 75, 231), #2575fc);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const AddressDiv = styled.div`
  height: 150px;
  width: 70%;
  padding: 10px 20px;
  margin-top: 20px;
  background: linear-gradient(135deg, rgb(151, 75, 231), #2575fc);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const LegacyContainer = styled.div`
   
`;

const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
    z-index: -1;
  }

  @media screen and (max-width: 600px) {
    height: auto;

    img {
      height: auto;
    }
  }
  @media screen and (max-width: 99100px) {
    height: 300px;

    img {
      height: 300px;
    }
  }
`;

const ContactUsForm = styled.div``;



const SubmitBUtton = styled.button`
  margin-left: 2.5rem;
  margin-top: 1.5rem;
  font-size: 20px;
  font-weight: 500;
  color: #050572;
  border: none;
  border-bottom: 1px solid #c81313;
  padding: 5px 15px 7px 15px;
  text-decoration: none;
  background-color: white;
  &:hover {
    background-color: #c81313;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

const Fieldinput = styled.input`
  border-radius: 0px;
  padding: 5px 15px 8px 15px;
  width: 90%;
  margin-bottom: 1rem;
  border: none;
  opacity: 0.9;
  margin-top: 1rem;
`;

const ContactUsFormDiv = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin-top: 4rem;
  background-color: rgba(16, 23, 235, 0.52);
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 200px) and (max-width: 900px) {
    width: 95%;
    margin-top: 0;
  }

  h3 {
    color: #fff;
    text-align: center;
  }
`;

const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 3%;
  @media screen and (min-width: 200px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
