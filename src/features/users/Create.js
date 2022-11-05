import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {addUser} from './redux/usersAction';
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '' , 
        email: '' ,
        address: '' 
    })
    const onDataChanqe = (e) => setData(oldState =>{
        return{
            ...oldState, 
            [e.target.id] : e.target.value

        }
        
    })
    const isValid = ['name','email','address'].every((key)=>Boolean(data[key]))
    
    /*useEffect(() =>{
        dispatch(addUser())
    },[])*/
    const onSubmit = () => {
        if(isValid){
        dispatch(addUser(data))
        setData({
            name: '',
            email: '',
            address: ''

        })
        navigate('/')
        }
    }



  return (
    <div className='row justify-content-center'>
        <div className='col-8'>
            <div className='card card-body'>
                <legend>Create User</legend>
                <hr/>
                <div className='my-2'>
                    <label htmlFor='name'>Name</label>
                    <input onChange = {onDataChanqe} value = {data.name} id="name" className='form-control'/>
                </div>
                <div className='my-2'>
                    <label htmlFor='email'>Email</label>
                    <input onChange = {onDataChanqe} value = {data.email} id="email" className='form-control'/>
                </div>
                <div className='my-2'>
                    <label htmlFor='address'>Address</label>
                    <input onChange = {onDataChanqe} value = {data.address} id="address"className='form-control'/>
                </div>
                <button onClick= {onSubmit} disabled = {!isValid}className='btn btn-primary btn-block'></button>
            </div>
        </div>
    </div>
  )
}

export default Create