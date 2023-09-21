import {REGISTER_USER_SUCCESFULL,REGISTER_USER_ERROR} from '../constant/action-types'
export const userReducers = (state={user:{}},{type,payload})=>{
    switch (type) {
        case REGISTER_USER_SUCCESFULL:
            console.log(payload)
           return{
            ...state,
            user:payload,
            isAuthintication : true,
            loading:true
           }
        case REGISTER_USER_ERROR:
            console.log(payload)
            return{
                ...state,
                error:payload,
                isAuthintication:false,
                loading:false
            }
    
        default:
            return state
    }
}