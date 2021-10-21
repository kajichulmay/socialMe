import React from "react";
import AddPost from "../components/myProfile/AddPost";
import ChatBox from "../components/myProfile/ChatBox";

import Line from "../components/myProfile/Line";
import TitleProfile from "../components/myProfile/TitleProfile";
import Post from "../components/Post/Post";

function MyProfile() {
    return (
        <div className=" w-full flex justify-between mt-10  h-screen">
            <div className="w-full h-auto  bg-white flex items-center flex-col heigt100   ">
                <TitleProfile />
                <AddPost />
                <Line />
            </div>
            <ChatBox />
        </div>
    );
}

export default MyProfile;
