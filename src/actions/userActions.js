import {REGISTER_USER_SUCCESFULL,LOGIN_USER_SUCCESFULL,REGISTER_USER_ERROR} from '../constant/action-types'
import axios from 'axios'

export const registeruser = (userData) => async (dispatch) => {
    try {

        // dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            header:{
                'Content-Type':"multipart/form-data",
            }
        }

        const data =  await  axios.post('http://localhost:4000/api/v1/register',userData,config)

        console.log(data)
        dispatch({
            type: REGISTER_USER_SUCCESFULL,
            payload: data.data,
        });

    } catch (error) {
   dispatch({
  type:  REGISTER_USER_ERROR,
  payload : error.response.data.message
   })
    }
};

export const loginuser = (userData) => async (dispatch)=>{
    try {

        // dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            header:{
                'Content-Type':"multipart/form-data",
            }
        }

        const data =  await  axios.post('http://localhost:4000/api/v1/register',userData,config)


        dispatch({
            type: LOGIN_USER_SUCCESFULL,
            payload: data.data,
        });

    } catch (error) {
      console.log('error  in actions')
    }
}

const loaduser = (userda)