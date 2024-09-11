

const initialState = {
    post:{
        owner_of_post:{
            name: "Данил Куляев",
            login: 'diflymer'
        },
        id: 4,
        type: 0,
        name: 'Встреча в А корпусе',
        desc: 'Организую встречу в А корпусе с настолочками, вкусняшками и напитками! Приходите, будет классно!',
        place: "ДВФУ А корпус 5 уровень",
        datetime_from: 1715844308833,
        datetime_to: 1715844308833,
        countPeople: 15
    },
    interest:null,
    chatid: 4,
}

const chatReducer = (state = initialState, action) => {

    switch(action.type){

        // case SET_USER_DATA: {
        //     return {
        //         ...state,
        //         ...action.body,
        //         isAuth: true
        //     }
        // }
        default:
            return state
    }

}


export default chatReducer