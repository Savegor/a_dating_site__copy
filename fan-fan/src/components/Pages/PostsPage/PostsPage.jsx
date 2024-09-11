import React, { useState } from "react";
import NewPost from "../../Posts/NewPost/NewPost";
import Posts from "../../Posts/Posts";
import "./PostsPage.css"
import { connect } from "react-redux";

const PostsPage = (props) => {

    let [typePosts, setTypePosts] = useState(null);

    const switchToMeetings = () => {
        setTypePosts(prev => prev === 0 ? null: 0)
    }

    const switchToEvents = () => {
        setTypePosts(prev => prev === 1 ? null: 1)
    }

    const switchToFind = () => {
        setTypePosts(prev => prev === 2 ? null: 2)
    }
    return (
        <>
            <div className="row posts-page">
                <div className="col">
                <div className="row btnFilterPosts d-flex justify-content-evenly">
                    <button onClick={switchToMeetings} type="button" className={typePosts === 0 ? 'active': null}>Встреча</button>
                    <button onClick={switchToEvents} type="button" className={typePosts === 1 ? 'active': null}>Мероприятия</button>
                    <button onClick={switchToFind} type="button" className={typePosts === 2 ? 'active': null}>Отзовись</button>
                </div>
                    <NewPost/>
                    <Posts posts={props.posts}/>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsPage.posts
    }
}

export default connect(mapStateToProps)(PostsPage)