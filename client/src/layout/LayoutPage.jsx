import React from 'react'
import './css/layout.css'
import { Link, Outlet, useLocation , useNavigate} from 'react-router-dom';
// import {messagae} from 'antd'
import { FaHome, FaUser, FaCalendarCheck, FaSignOutAlt, FaUserMd } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { MdNotificationsActive } from "react-icons/md";
import { Badge } from 'antd';
import { useParams } from 'react-router-dom';
import LogoImg from '../images/cropedlogo.png'


const UserMenu = [
    {
        name: 'Home',
        path: '/dashboard',
        icon: <FaHome />,
    },

    
    {
        name: 'Appointments',
        path: '/appointment',
        icon: <FaCalendarCheck />,
    },
/*     {
        name: 'Apply Doctor',
        path: '/apply-doctor',
        icon: <FaUserMd />,
    }, */
    {
        name: 'Profile',
        path: '/view-profile',
        icon: <FaUser />,
    },
    {
      name: 'About',
      path: '/about',
      icon: <FaHome />,
  },
    {
        name: 'Logout',
        path: '/logout',
        icon: <FaSignOutAlt />,
    },
];

const AdminMenu = [
  {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FaHome />,
  }, 
  {
    name: 'Book Appointments',
    path: '/admin/book-new-appointment',
    icon: <FaUserMd />,
  },
  {
    name: 'Offline Appointments',
    path: '/admin/see-all-appointments',
    icon: <FaUserMd />,
  },
  {
    name: 'Online Appointments',
    path: '/admin/see-all-online-appointments',
    icon: <FaUserMd />,
  },
  {
      name: 'Doctors',
      path: '/admin/doctors',
      icon: <FaUserMd />,
  },
  {
      name: 'Users',
      path: '/admin/users',
      icon: <FaUser />,
  },
  {
      name: 'Upload Photos',
      path: '/admin/upload-photo',
      icon: <FaSignOutAlt />,
  },
  {
    name: 'Appointment Requests',
    path: '/admin/appointment-requests',
    icon: <FaSignOutAlt />,
},
{
  name: 'Feedbacks',
  path: '/admin/feedbacks',
  icon: <FaSignOutAlt />,
},
{
  name: 'Profile',
  path: '/view-profile',
  icon: <FaUser />,
},
{
  name: 'About',
  path: '/about',
  icon: <FaHome />,
},
    {
        name: 'Logout',
        path: '/logout',
        icon: <FaSignOutAlt />,
    }
];




const Layout = ({children}) => {
  const navigate = useNavigate()
const {user} = useSelector(state => state.user)
  const location = useLocation()
  const params = useParams()

// logout function
const logoutHandler = () => {
  localStorage.clear()
  // messagae.success('Logout Successfully');
  navigate('/login')
}

// ============Doctor Menu ============
const DoctorMenu = [
  {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FaHome />,
  },

  
  {
      name: 'Appointments',
      path: '/doctor-appointment',
      icon: <FaCalendarCheck />,
  },

  {
      name: 'Profile',
      path: `/doctors/profile/${user?._id}`,
      icon: <FaUser />,
  },
  {
      name: 'Logout',
      path: '/logout',
      icon: <FaSignOutAlt />,
  }

];
// ============Doctor Menu End ============

const SidebarMenu = user?.isAdmin ? AdminMenu : user?.isDoctor ? DoctorMenu : UserMenu;


  return (
    <div className='main'>
            <div className='sidebar'> 
              <div className='logo'>
                <div style={{display: "flex", alignItems:'center', justifyContent:'center'}}>
                  <img src={LogoImg} alt='logo' style={{borderRadius: '5px'}} />
              </div>
              <hr style={{color:'#fff'}}/>
             </div>
                <div className='menu'>
                  <ul>
                  {SidebarMenu.map((menu, index) =>{
                    const isActive = location.pathname === menu.path;
                    return(
                      <li key={index} className={`eachMenu ${isActive && 'active'}`}>
                          <Link to={menu.path}> {menu.icon}  {menu.name}</Link>
                          <hr className='hrStyle'/>
                      </li>
                    )
                  }) }
              </ul>

            </div>
            </div>
            <div className='content'>
                <div className='header'>
                  <Badge count={user?.notification.length}  className='m-2' onClick={() => navigate('/notification')} style={{cursor:'pointer'}}>
                     <MdNotificationsActive style={{fontSize: '22px', marginRight:"5px", cursor:'pointer', color: '#fff'}}/>
                  </Badge>
                  <Link to='/view-profile' style={{ marginLeft:"10px"}}>   {user?.name}</Link>
                </div>
                <div className='body' > {children}</div>
            </div>
    </div>
  )
}

export default Layout