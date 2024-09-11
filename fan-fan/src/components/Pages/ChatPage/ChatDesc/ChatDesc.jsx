import React from "react";
import "./ChatDesc.css"
import { timeDecoding } from "../../../../utils/commonFunc";
import { connect } from "react-redux";

const ChatDesc = (props) => {
    
    return (
        <>
            {/* Стили берутся из Post.css */}
            <div className="chat-desc container-fluid">
                <div className="row p-2">
                    <div className="col">
                        <div className="row">
                            <div className="nameAcc col d-inline text-start fw-bold p-0">{props.owner_of_post.name}
                                <div className="tg fw-normal d-inline">@{props.owner_of_post.login}</div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            {props.desc}
                        </div>
                        <div className="col pt-2">
                            <div className="row">
                                <div className="col-1 fst-italic p-0">Где?</div>
                                <div className="col fw-bold">{props.place}</div>
                                <div className="col-1 fst-italic p-0">Когда?</div>
                                <div className="col fw-bold">{timeDecoding(props.datetime_from)} - {timeDecoding(props.datetime_to, "onlyTime")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// const mapStateToProps = (state) => ({
//     post: state.chatPage.post
// })

// export default connect(mapStateToProps, {})(ChatDesc)
export default ChatDesc
