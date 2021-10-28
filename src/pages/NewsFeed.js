import React, { useContext, useEffect, useState } from "react";
import ChatBox from "../components/myProfile/ChatBox";
import AddPost from "../components/myProfile/AddPost";
import Line from "../components/myProfile/Line";
import FeedContainer from "../components/Post/FeedContainer";
import axios from "../config/axios";
import { useParams } from "react-router-dom";
import { userContext } from "../context/userContext";

function NewsFeed() {
    const [oneUser, setOneUser] = useState({});
    const [allmypost, setAllmypost] = useState([]);

    // params
    const { id } = useParams();

    // fetch
    useEffect(() => {
        const fetchOneuser = async () => {
            const res = await axios.get(`/user/oneUser`);
            const mypost = await axios.get(`/post/${id}`);
            setOneUser(res.data.oneUser);
            setAllmypost(mypost.data.myPostList);
        };
        fetchOneuser();
    }, [id]);
    console.log(allmypost);
    return (
        <div className="w-full lg:flex justify-center h-screen ">
            {/* <!-- Scroll wrapper --> */}
            <div class="w-full flex overflow-hidden ">
                {/* <!-- Scrollable container --> */}
                <div class="w-full overflow-y-scroll">
                    <div class="py-8 lg:px-8 px-0 mt-10">
                        {/* feed container */}
                        <Line title="EIEI" />
                        <AddPost oneUser={oneUser} />
                        <Line title="news feed" />
                        <FeedContainer allmypost={allmypost} />
                        {/*news feed container */}
                    </div>
                </div>
                {/* <!-- Fixed sidebar --> */}
                <ChatBox />
            </div>
        </div>
    );
}

export default NewsFeed;
