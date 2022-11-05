import usersConstants from './usersConstants';
import axios from "axios"


//export const initUser =(users)=>{
   // return {
   //     type: usersConstants.INIT_USER,
   //     payload : users 
  //  }

//}

const URL = 'http://localhost:3002/users'
export const initUser = ()=> async(dispatch) => {
    const res = await axios(URL)

    return res.status === 200 ? dispatch({
            type: usersConstants.INITE_USER,
            payload : res.data
        }): null

}

export const addUser = (data) =>async(dispatch) => {
  const res  = await axios.post(URL, data)

  return res.status === 201 ? dispatch({
    type: usersConstants.ADD_USER,
    payload : res.data
  }): null

}

