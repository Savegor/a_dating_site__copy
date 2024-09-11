import React, { useState } from "react";
import Interests from "../../../Interests/Interests";
import './UserInfo.css'
import EditingProfile from "../../../Header/EditingProfile";

const UserInfo = (props) => {
    return (
        <>
            <div className="row userInfo">
                <div className="col">
                    <div className="row mb-2">
                        <div className="col-3 image d-flex">
                            <div className="profileImg">
                                <img src={props.imgProfile} alt="no image" />
                            </div>
                        </div>
                        <div className="col info">
                            <div className="mb-0 fw-bold text-black d-flex name_user_profile_and_btn">
                                <div className="name_user_profile">{props.name}</div>
                                <button type="button" className="btnChange btn btn-primary justify-content-space-between"
                                    data-bs-toggle="modal" data-bs-target="#ModalRegistr3"> {/* Look at EditingProfile.jsx*/}
                                    Редактировать
                                </button>
                            </div>
                            <p className="mb-1">Ник в Telegram: {props.tg}</p>
                            <p className="mb-1">О себе:</p>
                            <p className="text-black desc">{props.desc}</p>
                        </div>
                    </div>
                    <div className="row">
                        <Interests interests={props.interests} />
                    </div>
                </div>
            </div>
        </>
    )
}



export default UserInfo