import React from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'
import styled from 'styled-components'
import LogoImg from '../images/cropedlogo.png'
import { TiArrowRightThick } from "react-icons/ti";
import { FaArrowRightFromBracket } from "react-icons/fa6";




const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinishHandler = async (values) => {
        try{
            dispatch(showLoading())
            const res = await axios.post("http://localhost:5173/api/v1/user/login", values)
            dispatch(hideLoading())
            if(res.data.success){
                localStorage.setItem("token", res.data.token);
                message.success("Login Successful!");
                navigate("/dashboard")
            }else{
                message.error(res.data.message)
            }
            
        }catch (error) {
            dispatch(hideLoading())

            console.error('Login error:', error);
            message.error("Somethin went wrong")
        }
    }

    return (
        <>
            <LoginContainer className=" ">            

            <div className="form-container card">
       
            <div style={{display: "flex", alignItems:'center', justifyContent:'center'}}>
            <img src={LogoImg} alt='logo' />

            </div>
            
            <Form layout='vertical' onFinish={onFinishHandler} className='   p-3'>

                <h4 className='text-center'>Login to your account</h4>
              
                <Form.Item label='Email' name='email'>  
                    <Input type='email' required  placeholder='Registered Email'/>
                </Form.Item>

                <Form.Item label='Password' name='password'>  
                    <Input type='password' required placeholder='Your Password'/>
                </Form.Item>

                <button className='btn btn-primary w-100 ' type='submit'> Login</button>
                <h6>Not Registered, <Link to='/register'>Sign up new account</Link> here...</h6>
            </Form>
            {/* <Notice className='p-3'>
                <span>Notice:</span>
                <ul>
                    <li><TiArrowRightThick />Refund of money is not allowed.</li>
                    <li><TiArrowRightThick />Refund policy - Only rescheduling of appointment allowed.</li>
                    <li><TiArrowRightThick />Kindly Signup account using Patient details.</li>
                    <li><TiArrowRightThick />Kindly carry patient Adhar Card on visiting time.</li>
                </ul>
            </Notice> */}
         </div>


            </LoginContainer>

        </>
    )
}

export default Login;

const Notice = styled.div`
span{
    color: red;
    }
    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
`

const LoginContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #eeefff;
display: flex;



img{
    width: 200px;
    align-items: center;
    margin: 20px 10px 10px 10px;
   
}
    a{
        text-decoration: none;
    }

.form-container{
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 600px){
        width: 95vw; 
    }

}

`