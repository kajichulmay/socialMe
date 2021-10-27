import axios from "../../config/axios";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router";

function BtnFollow({ oneUser }) {
    const [isFollow, setIsFollow] = useState(false);
    const [allfollow, setAllfollow] = useState([]);
    const { myuser, toggleFollwer, setUserTrigged } = useContext(userContext);
    const { userId } = useParams();
    console.log(`myuser`, myuser);
    console.log(`oneuser`, oneUser);
    // fetch

    useEffect(() => {
        const fetchFollow = async () => {
            const res = await axios.get("/follow/getAllFollow");
            setAllfollow(res.data.allFollow);

            console.log(`Testlog`, res.data.allFollow);
            const filterfollow = [...res.data.allFollow].findIndex(item => {
                return item?.followerId === oneUser?.id && item?.userId === myuser?.id;
            });

            console.log(`filterfollow`, filterfollow);
            if (filterfollow !== -1) {
                setIsFollow(true);
            }
        };

        fetchFollow();
    }, [myuser]);

    const title = isFollow
        ? [
              " bg-primary-grad text-white forhover",
              "Following",
              <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
              />,
          ]
        : [
              "bg-white text-red-400 whiteBtnHover",
              "Follow",
              <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
              />,
          ];

    const handleClickFollow = async () => {
        if (isFollow) {
            await axios.delete(`/follow/unfollow/${oneUser?.id}`);
            setIsFollow(false);
        } else {
            await axios.post(`/follow/${oneUser?.id}`);
            setIsFollow(true);
        }
    };

    return (
        <button
            onClick={handleClickFollow}
            className={`rounded-full shadow-input px-3 py-2 flex justify-center items-center
          ${title[0]}
      `}
        >
            {title[1]}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                {title[2]}
                {/* {isFollow ?
            :
          } */}
            </svg>
        </button>
    );
}

export default BtnFollow;
