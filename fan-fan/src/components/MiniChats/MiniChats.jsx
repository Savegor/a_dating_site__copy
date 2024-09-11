import React, { useState } from "react";
import './MiniChats.css'
import MiniChat from "./MiniChat/MiniChat";
import { connect } from "react-redux";

const MiniChats = (props) => {

    let [switchPanels, setSwitchPanels] = useState('posts')

    let chats_posts = props.chats_posts.map((chat) => <MiniChat id={chat.id} key={chat.id} name={chat.name}/>)
    let chats_interests = props.chats_interests.map((chat) => <MiniChat id={chat.id} key={chat.id} name={chat.name}/>)

    const switchToPosts = () => {
        setSwitchPanels('posts')
    }

    const switchToInterests = () => {
        setSwitchPanels('interests')
    }

    return (
        <>
            <div className="d-none d-lg-block col-lg-3 p-0 chatsmenu">
                <h5>Чаты</h5>
                <div className="row m-0">
                    <div className="col pe-2 ps-0">
                    <button onClick={switchToPosts} type="button" className={switchPanels === 'posts' ? 'active': null}>Объявления</button>
                    </div>
                    <div className="col ps-2 pe-0">
                    <button onClick={switchToInterests} type="button" className={switchPanels === 'interests' ? 'active': null}>Интересы</button>
                    </div>
                </div>
                <div className="MCLine d-flex justify-content-center"><hr/></div>
                <ul className="d-flex flex-column p-0">
                    {switchPanels === 'posts' ? chats_posts : chats_interests}
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        chats_posts: state.miniChats.chats_posts,
        chats_interests: state.miniChats.chats_interests,
    }
}

export default connect(mapStateToProps, {})(MiniChats)