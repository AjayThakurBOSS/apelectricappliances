import react from "react";
import { Col, DatePicker, Form, Input, message, Row, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import styled from "styled-components";
import LogoImg from '../images/cropedlogo.png'
const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };

  return (
    <>
      <LoginContainer>
        <div className="form-container">
          <Form
            layout="vertical"
            onFinish={onFinishHandler}
            className="card p-3"
            style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center' }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={LogoImg} alt="logo" />
            </div>

            <h5 className="text-center">Register for Your Account</h5>
            <hr />
            <Row>
              <Col xs={24} md={12} lg={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  style={{ marginBottom: "0" }}
                >
                  <Input type="text" required />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  style={{ marginBottom: "0" }}
                >
                  <Input type="email" required />
                </Form.Item>
              </Col>
              <Col xs={24} md={8} lg={8}>
                <Form.Item
                  label="Phone"
                  name="phone"
                  style={{ marginBottom: "0" }}
                >
                  <Input type="phone" required />
                </Form.Item>
              </Col>
              <Col xs={24} md={8} lg={8}>
                <Form.Item
                  label="Guardian's Name"
                  name="guardianName"
                  style={{ marginBottom: "0" }}
                >
                  <Input type="guardianName" required />
                </Form.Item>
              </Col>
              <Col xs={24} md={8} lg={8}>
                <Form.Item
                  label="Take a date"
                  name="dateofbirth"
                  rules={[{ required: true, message: "Please input!" }]}
                  style={{ marginBottom: "0" }}
                >
                  <DatePicker format="DD-MM-YYYY" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8} lg={8}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  style={{ marginBottom: "0" }}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues.gender !== currentValues.gender
                  }
                  style={{ marginBottom: "0" }}
                >
                  {({ getFieldValue }) =>
                    getFieldValue("gender") === "other" ? (
                      <Form.Item
                        name="customizeGender"
                        label="Customize Gender"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    ) : null
                  }
                </Form.Item>
              </Col>
              <Col xs={24} md={8} lg={8}>
                <Form.Item
                  label="Address"
                  name="address"
                  style={{ marginBottom: "0" }}
                >
                  <Input type="address" required />
                </Form.Item>
              </Col>

              <Form.Item
                label="District"
                name="district"
                style={{ marginBottom: "0" }}
              >
                <Input type="district" required />
              </Form.Item>
              <Form.Item
                label="State"
                name="state"
                style={{ marginBottom: "0" }}
              >
                <Input type="state" required />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                style={{ marginBottom: "0" }}
              >
                <Input type="password" required />
              </Form.Item>
            </Row>
            <button className="btn btn-primary " type="submit">
              Register
            </button>
            <h6>
              All ready Registered <Link to="/login" style={{color:'green', }}>Ligin</Link> here...
            </h6>
          </Form>
        </div>
      </LoginContainer>
    </>
  );
};

export default Register;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eeefff;
  display: flex;
  flex-direction: column;
  img {
  height:100px;
    width: 100px;
    align-items: center;
    margin: 0px 10px 10px 10px;
  }
  a {
    text-decoration: none;
  }

  .form-container {
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 600px) {
      width: 95vw;
      height: auto;
      margin-top: 10rem;
      margin-bottom: 10rem;
    }
  }
`;
