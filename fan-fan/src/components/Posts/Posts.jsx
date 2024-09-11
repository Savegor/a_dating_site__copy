import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {

    let posts = props.posts.map((post) => <Post key={post.id} post={post}/>)

    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    {posts}
                </div>
            </div>
        </>
    )
}

export default Posts