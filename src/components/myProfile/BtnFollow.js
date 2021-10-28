import axios from "../../config/axios";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router";

function BtnFollow({ oneUser }) {
    const [allfollow, setAllfollow] = useState([]);
    const [toggle, setToggle] = useState(false);
    const { myuser, toggleFollwer, setUserTrigged } = useContext(userContext);

    // fetch
    useEffect(() => {
        const fetchFollow = async () => {
            const res = await axios.get("/follow/getAllFollow");
            setAllfollow(res.data.allFollow);
        };

        fetchFollow();
    }, [myuser, toggle]);

    const handleClickFollow = async () => {
        await axios.post(`/follow/${oneUser?.id}`);
        setToggle(cur => !cur);
    };

    const handleClickUnfollow = async () => {
        await axios.delete(`/follow/unfollow/${oneUser?.id}`);
        setToggle(cur => !cur);
    };

    const filterfollow = [...allfollow].findIndex(
        item => item?.followerId === oneUser?.id && item?.userId === myuser?.id
    );
    return (
        <>
            {filterfollow != -1 ? (
                <button
                    onClick={handleClickUnfollow}
                    className="bg-primary-grad text-white p-2 w-28 shadow-md rounded-full flex justify-center"
                >
                    Following
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            ) : (
                <button
                    onClick={handleClickFollow}
                    className="bg-gray-100 text-black p-2 w-28 shadow-md rounded-full flex justify-center"
                >
                    Follow
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}

export default BtnFollow;
