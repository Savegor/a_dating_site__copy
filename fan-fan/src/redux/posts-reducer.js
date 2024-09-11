
const initialState = {
    posts: [{
        owner_of_post:{
            name: "Данил Куляев",
            login: 'diflymer'
        },
        id: 1,
        type: 0,
		name: 'Встреча в А корпусе',
		desc: 'Организую встречу в А корпусе с настолочками, вкусняшками и напитками! Приходите, будет классно!',
		place: 'ДВФУ А корпус 4 уровень',
        datetime_from: 1715844308833,
        datetime_to: 1715844308833,
		withChat: true,
		countPeople: 15,
    },
    {
    owner_of_post:{
        name: "Данил Куляев",
        login: 'diflymer'
    },
    id: 2,
    type: 1,
    name: 'Встреча в А корпусе',
    desc: 'Организую встречу в А корпусе с настолочками, вкусняшками и напитками! Приходите, будет классно!',
    place: 'ДВФУ А корпус 4 уровень',
    datetime_from: 1715844308833,
    datetime_to: 1715844308833,
    withChat: false,
    countPeople: 15,
    }]
}

const postsReducer = (state = initialState, action) => {

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


export default postsReducer