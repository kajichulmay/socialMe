import axios from "../../config/axios";
import React, { useState, useContext, useEffect } from "react";
import portrait from "../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg";
import ProfilePicUi from "../ui/ProfilePicUi";
import { userContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
import { DarkContext } from "../../context/DarkContext";
import { io } from "socket.io-client";
import { socketContext } from "../../context/socketContext";

function InputAddComment({ postId, setToggleStateComment, userIdsocket }) {
    const [message, setMessage] = useState("");
    const [userComment, setUserComment] = useState();
    const { userId } = useParams();
    const { dark } = useContext(DarkContext);

    const socket = io("http://localhost:8888/");

    const { myuser } = useContext(userContext);
    const { notiComment } = useContext(socketContext);
    socket.emit("hello", "hello socket");

    useEffect(() => {
        const fetchUserAccount = async () => {
            const userAccont = await axios.get("/user/oneUser");
            setUserComment(userAccont.data.oneUser);
        };

        fetchUserAccount();
    }, [userId]);

    const handleClickcreateComment = async postId => {
        try {
            if (myuser.id != userIdsocket) {
                notiComment({
                    noticeType: "Comment",
                    userNoticeId: myuser.id,
                    interactedUserId: userIdsocket,
                    postId,
                });
            }
            await axios.post(`/comment/create`, { commentUserId: userComment.id, message, postId });
            setToggleStateComment(cur => !cur);
            setMessage("");
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <>
            {/*input comment section */}
            <div className=" mt-4 w-11/12 flex mx-auto  items-center">
                <div class="mr-2">
                    <ProfilePicUi
                        url={userComment?.profilePicture}
                        afterSize={12}
                        beforeSize={12}
                        id={userComment?.id}
                    />
                </div>
                <div className="w-full relative">
                    <input
                        type="text"
                        className={`focus:outline-none border w-full rounded-full border-red-400 shadow-input pl-5 p-1
           focus:ring-2 focus:ring--300 animate-pulse    ${dark ? "dark-bg2" : ""}`}
                        placeholder="Write a  comment..."
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />

                    <button
                        className="absolute right-0 h-full forhover
          bg-primary-grad forhover rounded-full shadow-lgm-auto px-6"
                        onClick={() => handleClickcreateComment(postId)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transform rotate-90 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default InputAddComment;
