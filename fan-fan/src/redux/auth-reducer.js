import { authAPI } from "../api/api"
//import { parseJwt } from "../utils/commonFunc"

const SET_USER_DATA = 'SET-USER-DATA'
const AUTH_USER = 'AUTH-USER'
const UNAUTH_USER = 'UNAUTH-USER'

const initialState = {
    user: null,
    isAuth: false,
    token: localStorage.getItem('token')
}

const authReducer = (state = initialState, action) => {

    switch(action.type){
        // case SET_USER_DATA: {
        //     return {
        //         ...state,
        //         ...action.data,
        //     }
        // }
        case AUTH_USER: {
            return {
                ...state,
                ...action.body,
                isAuth: true,
            }
        }
        case UNAUTH_USER: {
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,
            }
        }
        default:
            return state
    }

}
// export const setUserData = () => ({type: SET_USER_DATA, data: {}})
export const auth_user = (data) => ({type: AUTH_USER, body: data})
export const unauth_user = () => ({type: UNAUTH_USER, body: {}})


// thunks

export const unAuth = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch(unauth_user())
}

export const login = (data) => (dispatch) => {
    return authAPI.login(data)
    .then(response => {
        if (!response.data.message){
            let respData = response.data;
            localStorage.setItem('token', respData.token);
            dispatch(auth_user(respData));
        } else{
            //Где-то вывести message, что неверные данные для входа
        }

    })
}

export const register = (data) => (dispatch) => {
    return authAPI.register(data)
    .then(response => {
        try {
            let respData = response.data;
            localStorage.setItem('token', respData.token);
            dispatch(auth_user(respData));
        } catch(err){

        }
    })
}

export const Auth = (data) => (dispatch) => {
    return authAPI.getAuth()
    .then(response => {

        if (response.status >= 200 && response.status <= 203){
            dispatch(auth_user(response.data));
        }

    })
}

//action creators



export default authReducer