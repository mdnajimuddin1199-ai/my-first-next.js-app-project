"use client"
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';
 export const  bookContext = createContext({})
const BookProvider = ({children}:{children:ReactNode}) => {
    const [read,setread] = useState([])
    const [wish,setwish] = useState([])
    const sharedata = {
        read,
        setread,
        wish,
        setwish
    }
    return (<bookContext.Provider value={sharedata}>{children}</bookContext.Provider>);
};

export default BookProvider;