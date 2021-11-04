import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { DarkContext } from "../../context/DarkContext";
import { AuthContext } from "../../context/authContext";
import { socketContext } from "../../context/socketContext";
import { PostContext } from "../../context/postContext";
import axios from "../../config/axios";
import { userContext } from "../../context/userContext";
import { timeStampDisplay } from "../../service/dateService";
import { useHistory } from "react-router";
import ProfilePicUi from "../../components/ui/ProfilePicUi";

export default function DropdownNotification() {
    // state
    const [allnoti, setAllnoti] = useState([]);

    const { dark } = useContext(DarkContext);
    const { socket } = useContext(socketContext);
    const { user } = useContext(AuthContext);
    const { myuser } = useContext(userContext);
    const { toggleStateComment,
        setToggleStateComment, } = useContext(PostContext);

    // socket

    // history
    const history = useHistory();
    useEffect(() => {
        socket.emit("fetchNoti", "fetch");
        socket.on("shownoti", msg => {
            setAllnoti(msg);
            setToggleStateComment(cur => !cur);
        });
    }, []);

    const filterNoti = allnoti
        .filter(item => item?.interactedUserId === user?.id)
        .sort((a, b) => b.id - a.id)
        .splice(0, 8);

    // console.log(`allnoti`, allnoti);
    // console.log(`filterNoti`, filterNoti);
    // console.log(filterNoti.filter(item => !item.status).length);


    const handleClickmovetopost = postId => {
        history.push({ pathname: "/newsfeed", state: postId });
        // console.log(`postId`, postId);
    };

    const handleClickclearnoti = () => {
        socket.emit("clearnoti", filterNoti);
        socket.emit("fetchNoti", "fetch");
    };

    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                {filterNoti.filter(item => !item.status).length ?
                    <div className="hidden lg:block ">
                        <div className="bg-red-300 absolute rounded-full w-5 h-5 -right-1 -top-2 animate-ping">
                        </div>
                        <div className="bg-red-500 absolute rounded-full w-5 h-5 -right-1  -top-2 ">
                            <p className="text-white text-center text-sm">
                                {filterNoti.filter(item => !item.status).length}
                            </p>
                        </div>
                    </div>
                    : null}
                <div>
                    <Menu.Button>
                        <div
                            onClick={handleClickclearnoti}
                            className={`${dark ? "dark-bg hover:bg-gray-700" : "bg-white hover:bg-gray-200"
                                } hover:bg-gray-200 flex items-center justify-center rounded-full h-9 w-9 shadow-input ml-3 border border-red-300 maxwidth`}
                        >
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 icon-grad "
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={`${dark ? "dark-bg2 text-white" : ""
                            } absolute bg-white right-0 w-96 mt-2 origin-top-right divide-y divide-gray-100 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    >
                        <div className="px-1">
                            <Menu.Item>
                                <>
                                    {filterNoti.map((item, idx) => (
                                        <div key={idx}
                                            className="flex p-2 border-b-2 border-fuchsia-600"
                                        >
                                            <ProfilePicUi
                                                beforeSize="16"
                                                afterSize="16" url={item.userNotice.profilePicture}
                                                id={item?.userNoticeId}
                                            />

                                            <div className="ml-6 cursor-pointer"
                                                onClick={() => handleClickmovetopost(item.postId)}
                                            >
                                                <p className="text-xl">
                                                    {item.userNotice.firstName} {item.userNotice.lastName}
                                                </p>
                                                <p>{item.noticeType} You</p>
                                                <p className="text-red-400">{timeStampDisplay(item.createdAt)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
