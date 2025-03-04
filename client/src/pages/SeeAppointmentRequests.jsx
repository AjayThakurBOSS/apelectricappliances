import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Col, Form, Input, Row } from 'antd';
import LayoutPage from '../layout/LayoutPage';

const SeeAppointmentRequests = () => {

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("fetchedAppointmentRequests",feedbacks);

  const onSubmitFeedback = () => {
    alert('Feedback Submitted Successfullu.')
  }

  useEffect(() => {
      const fetchedAppointmentRequests = async () => {
          try {
              const response = await axios.get('/api/v1/customer/getAppointmentsRequests', {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
              });

              // Check if the response is successful
              if (response.data.success) {
                  setFeedbacks(response.data.data);
              } else {
                  console.error('Failed to fetch feedbacks:', response.data.message);
              }
          } catch (error) {
              console.error('Error fetching feedbacks:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchedAppointmentRequests();
  }, []);

  if (loading) {
      return (
          <LayoutPage>
              <p>Loading...</p>
          </LayoutPage>
      );
  }

  return (
    <LayoutPage>
          <h1>See Appointment Requests</h1>
            {feedbacks.length > 0 ? (
                <ul style={{display: "flex", flexWrap: 'wrap'}}>
                    {feedbacks.map((item, _id) => (
                         <Card key={_id}>
                         <Title>{item.firstName}</Title>
                         <Info>
                           <Label>Phone:</Label> {item.phome}
                         </Info>
                         <Info>
                           <Label>Email:</Label> {item.email}
                         </Info>
                         <Info>
                           <Label>Gender:</Label> {item.gender}
                         </Info>
                         <Info>
                           <Label>Speciality:</Label> {item.speciality}
                         </Info>
                         <Info>
                           <Label>Date:</Label> {new Date(item.date).toLocaleString()}
                         </Info>
                         <Info>
                           <Label>Symptoms:</Label> {item.symptoms}
                         </Info>
                         <hr/>
                         <Form layout="vertical" onFinish={onSubmitFeedback} autoComplete="off">
                          <Row>
                          <Col xs={24} md={24} lg={24}>
                            {/* Symptoms */}
                            <Form.Item label="Write Feedback or Response" name="feedback"                 style={{marginBottom:'0'}}>
                              <Input.TextArea rows={4} />
                            </Form.Item>
                          </Col>
                          </Row>
                          <button className="btn btn-primary mt-2" type="submit">
                            Save Feedback
                          </button>
                         </Form>
                       </Card>
                    ))}
                </ul>
            ) : (
                <p>No feedbacks available.</p>
            )}

    </LayoutPage>
  )
}

export default SeeAppointmentRequests;


// Styled Components
const Card = styled.div`
  width: 350px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fdfdfd;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const Info = styled.div`
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
`;

const Label = styled.span`
  font-weight: bold;
  color: #222;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;