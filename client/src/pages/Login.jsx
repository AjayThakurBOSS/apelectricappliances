import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import styled from "styled-components";
import LogoImg from "../images/cropedlogo.png";
import { TiArrowRightThick } from "react-icons/ti";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:5173/api/v1/user/login",
        values
      );
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful!");
        navigate("/dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());

      console.error("Login error:", error);
      message.error("Somethin went wrong");
    }
  };

  return (
    <>
      <LoginContainer className=" ">
        <div className="form-container card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={LogoImg} alt="logo" />
          </div>

          <Form layout="vertical" onFinish={onFinishHandler} className="   p-3">
            <h4 className="text-center">Login to your account</h4>

            <Form.Item label="Email" name="email">
              <Input type="email" required placeholder="Registered Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              style={{ marginBottom: "0" }}
            >
              <Input type="password" required placeholder="Your Password" />
            </Form.Item>
            <div className="flex  justify-end">
              <Link to="/reset-password" style={{ color: "green" }}>
                Reset Password
              </Link>{" "}
              <br />
            </div>
            <button className="btn btn-primary w-100  mt-3" type="submit">
              {" "}
              Login
            </button>
            <h6>
              Not Registered,{" "}
              <Link to="/register" style={{ color: "green" }}>
                Sign up new account
              </Link>{" "}
              here...
            </h6>
          </Form>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;



const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eeefff;
 

  img {
    width: 100px;
    align-items: center;
    margin: 20px 10px 10px 10px;
  }
  a {
    text-decoration: none;
  }

  .form-container {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     display: flex;
  flex-direction: column;

    @media (max-width: 600px) {
      width: 95vw;
    }
  }
`;
