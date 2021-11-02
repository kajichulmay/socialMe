import React from "react";
import { useEffect, useState, useContext } from "react";
import Post from "../Post/Post";

function PostNewfeedsContainer({ allPost, setToggleUpdatePost, postEl }) {
    // const showList = postLates.map((item, idx) => (
    //   <Post key={idx} data={item} setToggleUpdatePost={setToggleUpdatePost} />
    // ));
    <Post />;
    return (
        <div>
            {allPost.map((item, index) => (
                <Post key={item.id} data={item} setToggleUpdatePost={setToggleUpdatePost} postEl={postEl} i={index} />
            ))}
        </div>
    );
}

export default PostNewfeedsContainer;
