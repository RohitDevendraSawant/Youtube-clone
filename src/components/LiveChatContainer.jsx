import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Redux/chatSlice';
import { generateName, generateRandomString } from '../utils/helper';
import LiveChatCard from './LiveChatCard';

const LiveChatContainer = () => {
    const [chatMessage, setChatMessage] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const messageInterval = setInterval(() => {
            const name = generateName();
            const message = generateRandomString(26);
            dispatch(addMessage({
                name, message,
            }));
        }, 2000);

        return () => clearInterval(messageInterval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "Rohit", 
            message: chatMessage,
        }));
        setChatMessage("");
    }

    const liveChatList = useSelector((store) => store.chat.messages);

    return (
        <>
            <div className='bg-slate-100 border p-3 border-black rounded-xl overflow-y-scroll flex flex-col-reverse h-full'>
                <div>
                    {
                        liveChatList.map((messageData, index) => <LiveChatCard key={messageData.message + index} messageData={messageData} />)
                    }

                </div>
            </div>
            <form className='w-full flex p-2'>
                <input className='rounded-xl py-1 px-2 w-full border' type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}/>
                <button type='submit' className='p-2 border rounded-xl m-1' onClick={handleSubmit}>Send</button>
            </form>
        </>

    )
}

export default LiveChatContainer;