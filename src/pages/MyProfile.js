import React from "react";
import ChatBox from "../components/myProfile/ChatBox";
import TitleProfile from "../components/myProfile/TitleProfile";

function MyProfile() {
    return (
        <div className="w-full outline-black bg-white flex justify-between mt-10">
            <TitleProfile />
            <ChatBox />
        </div>
    );
}

export default MyProfile;
