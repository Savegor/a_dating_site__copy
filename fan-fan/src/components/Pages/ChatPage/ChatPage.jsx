import React, { useState } from "react";
import Messages from "./Messages/Messages";
import "./ChatPage.css"
import ChatDesc from "./ChatDesc/ChatDesc";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import btnNewMessage from '../../../assets/images/btnNewMessage.png'
import { useFormik } from "formik";
import { updateNewMessage, updateNewMessageText } from "../../../redux/minichats-reducer";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const ChatPage = (props) => {

    let formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    const newMessage = () => {
        props.updateNewMessage(props.login, formik.values.message)
        formik.values.message = ''
    }

    let { chatId } = useParams()

    if (!chatId && props.chatid) {
        return <Navigate to={'/chats/' + props.chatid} />
    }

    if (props.post) {

        const post_type = props.post.type === 0 ? 'встреча' : props.post.type === 1 ? 'мероприятие' : 'отзовись'

        return (
            <>
                <div className="row chat-wrapper">
                    <div className="col-chat-wrapper">
                        <div className="chat-header text-center">
                            <h3 className="mb-0 fs-20"><b>{props.post.name}</b></h3>
                            <p className="type mb-0"><i>{post_type}</i></p>
                            <p className="count mb-0"><i>Кол-во участников: {props.post.countPeople}</i></p>
                        </div>
                        <hr className="my-0" />

                        {props.post ?
                            <>
                                <ChatDesc {...props.post} />
                                <Messages messages={props.messages} />
                            </> :
                            props.interest ?
                                <>
                                    <ChatDesc {...props.interest} />
                                    <Messages />
                                </> : null
                        }
                        <div className="chat-new-message">
                            <TextareaAutosize name="message" className="TextareaAutosize" maxRows="5"
                                placeholder="Напишите сообщение"
                                value={formik.values.message} onChange={formik.handleChange}/>
                            <button type="button" className="btnNewMessage" onClick={newMessage}>
                                <img src={btnNewMessage} alt="btnNewMessage" />
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    //Если чат ничего


}

const mapStateToProps = (state) => {
    return {
        post: state.chatPage.post,
        interest: state.chatPage.interest,
        chatid: state.chatPage.chatid,
        messages: state.miniChats.messages,
        login: state.auth.login,
        newMessage: state.miniChats.newMessageText
    }
}

export default connect(mapStateToProps, { updateNewMessage, updateNewMessageText })(ChatPage)