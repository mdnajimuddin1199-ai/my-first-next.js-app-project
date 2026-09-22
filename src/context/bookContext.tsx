"use client"
import { BookType } from '@/book';
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';
interface ibookcontext {
    read: BookType[],
    setread: React.Dispatch<React.SetStateAction<BookType[]>>,
    wish: BookType[],
    setwish: React.Dispatch<React.SetStateAction<BookType[]>>
}
 export const  bookContext = createContext<ibookcontext>({
    read: [],
    setread:()=>{},
    wish:[],
    setwish:()=> {}
 })
const BookProvider = ({children}:{children:ReactNode}) => {
const [read, setread] = useState<BookType[]>([])
const [wish, setwish] = useState<BookType[]>([])
    const sharedata = {
        read,
        setread,
        wish,
        setwish
    }
    return (<bookContext.Provider value={sharedata}>{children}</bookContext.Provider>);
};

export default BookProvider;