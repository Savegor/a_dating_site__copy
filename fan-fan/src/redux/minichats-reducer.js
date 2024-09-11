//import { authAPI } from "../api/api";

const SET_MESSAGE_DATA = 'SET-MESSAGE-DATA'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    chats_posts: [
        {id: 4, name: 'Встреча в А корпусе'}, {id: 586, name: 'Отдых на природе'}
    ],
    chats_interests: [
        {id: 1, name: 'Футбол'}, {id: 64, name: 'Шахматы'}
    ],
    messages: [
        {chatId: 4, messageId: 4, text: 'хейлопку пп укпукп упкуп ук', senderId: 1, senderName: 'Данил Куляев', date: 1715844308833},
		{chatId: 4, messageId: 4, text: 'How are you', senderId: 1, senderName: 'Данил Куляев', date: 1715844308833},
        {chatId: 4, messageId: 4, text: 'По русски пиши, дэбил', senderId: 2, senderName: 'Артур Ляуман', date: 1715844308833},
        {chatId: 4, messageId: 4, text: 'ок', senderId: 1, senderName: 'Данил Куляев', date: 1715844308833},
        {chatId: 4, messageId: 4, text: 'Всем приветihvhfdslkjfhdjkshfjdshfkdshflkdshfdlskhdvjnlihjsldhflksdhfkldfkjds', senderId: 1, senderName: 'Егор', date: 1715844308833}
    ],
    newMessageText: '',
    newMessageTime: + new Date()
}

const miniChatsReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_MESSAGE_DATA: {
            return {
                ...state,
                ...action.body,
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.text
            stateCopy.newMessageTime = + new Date()
            return stateCopy
        }
        case ADD_MESSAGE: {
            let newMessage = {
                chatId: 10,
                messageId: 4,
                text: state.newMessageText,
                senderId: 1,
                senderName: action.user,
                date: state.newMessageTime
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
        default:
            return state
    }

}

export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text})
export const addNewMessage = (user) => ({type: ADD_MESSAGE, user})

export const updateNewMessage = (user, message) => {
    return (dispatch) => {
        dispatch(updateNewMessageText(message))
        dispatch(addNewMessage(user))
    }
}

export default miniChatsReducer