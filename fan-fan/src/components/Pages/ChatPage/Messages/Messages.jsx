import React from "react";
import Message from "./Message/Message";
import "./Messages.css"

const Messages = (props) => {

    let messages = props.messages.map((message) => <Message id={message.id} key={message.id} text={message.text} senderName={message.senderName} date={message.date}/>)
    messages.reverse();
    return (
        <>
            <div className="chat-messages">
                {messages}
            </div>
        </>
    )
}

export default Messages