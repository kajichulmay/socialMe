import { user as initialUser } from "../service/localStorage";
import axios from "../config/axios";
import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
const socketContext = createContext();

const SocketContextProvider = ({ children }) => {
    const socket = io("http://localhost:8888/");

    const notiAddLike = payload => {
        // if (payload.userNoticeId === payload.interactedUserId) return;
        socket.emit("notification", payload);
    };

    const notiComment = payload => {
        socket.emit("notification", payload);
    };

    const notiFollow = payload => {
        socket.emit("notification", payload);
    };

    const notiBuypost = payload => {
        socket.emit("notification", payload);
    };

    return (
        <socketContext.Provider value={{ socket, notiAddLike, notiComment, notiFollow, notiBuypost }}>
            {children}
        </socketContext.Provider>
    );
};

export { socketContext, SocketContextProvider };
