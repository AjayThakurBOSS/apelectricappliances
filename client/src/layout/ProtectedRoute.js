import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { setUser } from '../redux/features/userSlice';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()

//   get user
const getUser = async () => {
    try{
        dispatch(showLoading())
        const res = await axios.post('/api/v1/user/getUserData',{token: localStorage.getItem('token')},
    {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    )
    dispatch(hideLoading())
    if( res.data.success){
      dispatch(setUser(res.data.data))  
    }else{
        navigate('/login') 
        localStorage.clear();
    }
    }catch (error){
        dispatch(hideLoading())
        localStorage.clear();

        console.log(error)
    }
}

useEffect( () => {
    if(!user) {
        getUser();
    }
}, [user])

  if (token) {
    return children;
  } else {
    console.log('No token found, redirecting to login...');
    navigate('/'); // Programmatically navigate to the home page
    return null; // Avoid rendering anything
  }
};

export default ProtectedRoute;
