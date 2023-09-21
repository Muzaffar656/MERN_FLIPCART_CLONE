import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {useDispatch,useSelector} from 'react-redux'
import {Link , useNavigate} from 'react-router-dom'
import {registeruser} from '../../actions/userActions'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isAuthintication,error} = useSelector((state)=>state.user)
 
  const  [user, setUser] = useState({
    name:"",
    email:"",
    password:"",

  })
  const {name,email,password} = user
  const handledatachange = async(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }
  const handleSubmit =(e)=>{
    e.preventDefault();


      
      dispatch(registeruser(user))
    }
    useEffect(()=>{
      if(error){
       
      }

      if(isAuthintication){
        
        navigate('/')
    }
  },[isAuthintication])
  return (
    <div className=' sm:pt-24 pt-32 w-full bg-white sm:bg-transparent '>
      <div className='flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white sm:bg-none shadow-lg w-full'>

        <div className="left hidden  bg-primary-blue px-9 py-10  sm:flex  flex-col gap-4 w-2/5">
            <h1 className=' font-medium text-white text-3xl'>Looks like you're new here!</h1>
            <p className='text-white font-medium text-lg'>Sign up with your mobile number to get started</p>
            <img className='h-full w-full mt-16' src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="imagess" />
        </div>

        <form onSubmit={handleSubmit} className='flex-1 px-5 py-6 sm:p-0 '>
        <div className='flex flex-col sm:p-10  gap-5'>

            <div className="input-fild flex flex-col w-full  justify-between sm:flex-col gap-3 items-center ">
                <TextField
                    label="Full Name"
                    name = "name"
                    value = {name}
                    required
                    fullWidth
                    onChange={handledatachange}

                />
                   <TextField
                    label="Email"
                    name = "email"
                    value = {email}
                    required
                    fullWidth
                    onChange={handledatachange}
                />
            </div>
            {/* password field */}
            <div className='flex gap-4'>
            <TextField
                    label="Password"
                    name = "password"
                    value = {password}
                    required
                    fullWidth
                    onChange={handledatachange}
                />
              
            </div>
            {/* password field */}
            <button type='submit'  className=' bg-primary-orange text-center rounded-sm py-3 hover:shadow-lg font-medium text-white shadow'>Signup</button>
            <Link to="/login" className=" hover:bg-gray-50 text-primary-blue shadow-lg py-3 border text-center rounded-sm font-medium">Existing User? Log in</Link>
        </div>
        </form>
      </div>
      <div>
        <SnackbarProvider />
        <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
      </div>
    </div>
  )
}

export default Register
