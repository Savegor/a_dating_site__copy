import { Auth } from "./auth-reducer"

const SET_INITIAL_STATE = 'SET-INITIAL-STATE'

const initialState = {
    initialized: true
}

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case (SET_INITIAL_STATE):{
            return {
                ...state,
                initialized: action.body
            }
        }
        default:
            return state
    }
}


//thunks

export const initialize = () => (dispatch) => {

    let promise = dispatch(Auth())

    promise.then(() => {
        dispatch(setInitialState(true))
    })
}

//action creators

const setInitialState = (toggle) => ({
    type: SET_INITIAL_STATE,
    body: toggle
})


export default appReducer