import { user as initialUser } from "../service/localStorage";
import axios from "../config/axios";
import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
const socketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const socket = io('http://localhost:8888/');
  const notiAddLike = (payload) => {
    // if (payload.userNoticeId === payload.interactedUserId) return;
    socket.emit('addLike', payload);
  };


  return <socketContext.Provider value={{ socket, notiAddLike }}>
    {children}
  </socketContext.Provider>;
};

export { socketContext, SocketContextProvider };
