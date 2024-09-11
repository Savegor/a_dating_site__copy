// import { authAPI, profileAPI } from '../api/api'
import defaultImage from '../assets/images/defaultImageProfile.jpg'
import { authAPI } from "../api/api";
//const SET_USER_DATA = 'SET-USER-DATA'

const SET_PROFILE = 'SET-PROFILE'

const initialState = {
    id: null,
    name: 'Egor',
    tg: '@diflymer',
    desc: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение существенных финансовых и административных условий.',
    imgProfile: defaultImage,
    interests: [{id:1, name:'⚽Футбол'}, {id: 2, name: '🏀Баскетбол'}, {id: 3, name: '🤿Дайвинг'}, {id: 4, name: '🖼️Живопись'}, {id: 5, name: '🌱Растения'}, {id: 6, name: '♟️Шахматы'}],
    posts: [{
        owner_of_post:{
            name: "Данил Куляев",
            login: 'diflymer'
        },
        id: 3,
        type: 0,
		name: 'Встреча в А корпусе',
		desc: 'Организую встречу в А корпусе с настолочками, вкусняшками и напитками! Приходите, будет классно!',
		place: 'ДВФУ А корпус 4 уровень',
        datetime_from: 1715844308833,
        datetime_to: 1715844308833,
		withChat: true,
        chatId: 3,
		countPeople: 15,
    }]
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PROFILE: {
            return {
                ...state,
                ...action.body,
                name: action.body.name,
                id: action.body.id,
                interests: action.body.interests,
                desc: action.body.about,
                tg: action.body.tgLink,
                // imgProfile: 
            }
        }
        default:
            return state
    }

}


//thunks

// export const getProfile = (user_id) => (dispatch) => {
//     profileAPI.getProfile(user_id)
//     .then(response => {
//         dispatch(setProfile(response.data))
//     })
// }

export const myProfile = (id) => (dispatch) => {
    authAPI.getUserById(id).then(res => {
        dispatch(setProfile({...res.data}))
    })
}

//action creators

const setProfile = (profileData) => ({
    type: SET_PROFILE,
    body: profileData
})

export default profileReducer