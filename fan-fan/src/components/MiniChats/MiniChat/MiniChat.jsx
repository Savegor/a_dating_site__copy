import React from "react";
import './MiniChat.css'
import { NavLink } from "react-router-dom";

const MiniChat = (props) => {

    return (
        <>
            <div id={props.id} className="buttonchat">
                <NavLink to={'chats/' + props.id}>
                    <button type="button">{props.name}</button>
                </NavLink>
                {/* <div className="CntMssg d-inline">100</div> */}
                
            </div>
        </>
    )
}

export default MiniChat