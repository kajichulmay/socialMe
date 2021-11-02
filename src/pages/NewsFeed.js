import React, { useContext, useEffect, useState, useRef } from "react";
import ChatBox from "../components/myProfile/ChatBox";
import AddPost from "../components/myProfile/AddPost";
import Line from "../components/myProfile/Line";
import FeedContainer from "../components/Post/FeedContainer";
import axios from "../config/axios";
import { SpinnerContext } from "../context/SpinnerContext";
import { useParams, useLocation } from "react-router-dom";
import { userContext } from "../context/userContext";
import PostNewfeedsContainer from "../components/Post/PostNewfeedsContainer";
import Spinner from "../components/spinner/Spinner";
import { DarkContext } from "../context/DarkContext";
function NewsFeed() {
    const [oneUser, setOneUser] = useState({});
    const [allPost, setAllPost] = useState([]);
    const [toggleUpdatePost, setToggleUpdatePost] = useState(false);
    const { spinner } = useContext(SpinnerContext);

    const location = useLocation();
    // console.log(location.state);

    //context
    const { myuser, toggleFollwer } = useContext(userContext);
    const { dark, darkBg } = useContext(DarkContext);
    // fetch
    useEffect(() => {
        const fetchOneuser = async () => {
            const res = await axios.get(`/user/oneUser`);

            setOneUser(res.data.oneUser);
        };
        fetchOneuser();
    }, [myuser]);

    useEffect(() => {
        const fetchMypost = async () => {
            const res2 = await axios.get(`/post/all`);
            setAllPost(res2?.data?.allPost);
        };
        fetchMypost();
    }, [toggleUpdatePost, toggleFollwer]);

    // useref
    const postEl = useRef([]);

    useEffect(() => {
        // console.log(postEl.current[3]);
        console.log(location.state);
        const idx = postEl.current.findIndex(item => item.id == location.state);
        console.log(`idx`, idx);
        if (postEl.current[idx]) {
            console.log(postEl.current[idx].id);
            postEl.current[idx].scrollIntoView({ behavior: "smooth" });
        }
    }, [allPost, location.state]);

    return (
        <div className={`w-full 2xl:container lg:flex justify-center h-full ${darkBg}`}>
            {spinner && <Spinner />}
            {/* <!-- Scroll wrapper --> */}
            <div class="w-full flex overflow-hidden ">
                {/* <!-- Scrollable container --> */}
                <div class="w-full overflow-y-scroll">
                    <div class="py-8 lg:px-8 px-0 mt-10">
                        {/* feed container */}
                        <Line title="Post someting About me" />
                        <AddPost oneUser={oneUser} setToggleUpdatePost={setToggleUpdatePost} />
                        <Line title="news feed" />
                        <PostNewfeedsContainer
                            allPost={allPost}
                            setToggleUpdatePost={setToggleUpdatePost}
                            postEl={postEl}
                        />
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
