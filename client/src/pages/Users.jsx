import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Table } from 'antd'
import LayoutPage from '../layout/LayoutPage'

const Users = () => {
  const [users, setUsers] = useState([])

  // getUsers
  const getUsers = async () => {
    try{
      const res = await axios.get('/api/v1/admin/getAllUsers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(res.data.success){
        setUsers(res.data.data)
      }else {
        console.error("Failed to fetch users:", res.data.message);
      }

    }catch(error){
      console.log("Error fetching users:", error)
    }
  }

  useEffect(() => {
    getUsers();
  },[])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'isDoctor',
      dataIndex: 'isDoctor',
      render:(text, record) => (
        <span>{record.isDoctor ? 'Yes' :'No'}</span>
      )
    },
    {
      title: 'Actions',
      dataIndex: "actions",
      render: (text, record) => (
      <div className='d-flex'>
        <button className='btn btn-danger'>Block</button>
      </div>
      )
        
      
    }
  ];
  

  return (
    <LayoutPage>All Users

        <Table columns={columns} dataSource={users}/>

    </LayoutPage>
  )
}

export default Users