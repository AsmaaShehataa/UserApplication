import React from 'react'
import { Table, Card, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import usersConstants from './redux/usersConstants';
import {initUser} from './redux/usersAction';
//import axios from 'axios';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)
  console.log(users) 

  const renderedUsers = users.map((user, i) =>(
    <tr key= {i}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>
        <Button className= 'mx-2' variant="info" size="sm">Show</Button>
        <Button className= 'mx-2' variant="warning" size="sm">edit</Button>
        <Button className= 'mx-2' variant="danger" size="sm">Delete</Button>
        </td>
        </tr>
  ))
  
  useEffect(()=>{
    /*axios('http://localhost:3002/users')
    .then(res=>{
      const {data, status} = res*/
      dispatch(initUser())
  },[])


  return (
    <>
      <h1 className="mt-4">User Admin</h1>
      <Card>
        <Card.Header>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10'>
            Users
            </div>
            <div className='col-6 text-end'>
              <Button variant="primary" size="sm">
                <Link calssName='text-light'to = "/users/create">Create User</Link>
                </Button>
              </div>
          </div>
        </Card.Header>
        <Card.Body style ={{height: '400px', overflowY: 'scroll'}}>
          <Table className='text-center'>
          <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderedUsers}
      </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  )
}

export default Users