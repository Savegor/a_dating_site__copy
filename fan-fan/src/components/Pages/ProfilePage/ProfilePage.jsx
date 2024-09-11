import React, { useEffect } from "react";
import UserInfo from "./UserInfo/UserInfo";
import NewPost from "../../Posts/NewPost/NewPost";
import Posts from "../../Posts/Posts";
import './ProfilePage.css'
import { connect } from "react-redux";
import { myProfile } from "../../../redux/profile-reducer";
// import { getProfile } from "../../../redux/profile-reducer";

const ProfilePage = (props) => {

    useEffect(() => {
        if (props.userId === null) {
            
        }else{
            props.myProfile(props.userId)
        }
    }, [])

    return (
        <div className="row profilePage">
            <div className="col">
                <UserInfo name={props.name} imgProfile={props.imgProfile} tg={props.tg} desc={props.desc} interests={props.interests}/>
                <NewPost/>
                <Posts posts={props.posts}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.profilePage.name,
        tg: state.profilePage.tg,
        desc: state.profilePage.desc,
        imgProfile: state.profilePage.imgProfile,
        interests: state.profilePage.interests,
        posts: state.profilePage.posts,
        userId: state.auth.id
    }
}

export default connect(mapStateToProps, {myProfile})(ProfilePage)