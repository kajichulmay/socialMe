import React from "react";
import Chatbox from "../components/chatbox/Chatbox";
import AddPost from "../components/myProfile/AddPost";
import Line from "../components/myProfile/Line";
import TitleProfile from "../components/myProfile/TitleProfile";

function MyProfile() {
    return (
        <div className="  flex items-center flex-col heigt100   ">
            <TitleProfile />
            <AddPost />
            <Line />
        </div>
    );
}

export default MyProfile;
