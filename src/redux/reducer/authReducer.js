import { LOAD_PROF, LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, LOGOUT } from '../action-types';
import Cookies from 'js-cookie';

const initialState = {
    accessToken: Cookies.get('signlanguage-4daf0-access-token') ? Cookies.get('signlanguage-4daf0-access-token') : null,

    user: Cookies.get('signlanguage-4daf0-user') ? JSON.parse(Cookies.get('signlanguage-4daf0-user')) : null,
    
    loading: false
}


export const authReducer = (state = initialState, action)=>{
      
    const {type,payload} = action

    switch(type){

        case LOGIN_REQ:
            return {...state,loading:true}
        
        case LOGIN_SUCCESS:
            return {...state, accessToken:payload, loading:false}

        case LOGIN_FAIL:
            return {...state, accessToken:null, loading: false, error: payload}

        case LOAD_PROF:
            return {...state, user: payload}

        case LOGOUT:
            return {...state, accessToken: null, user: null}

        default:
            return state
    }
}