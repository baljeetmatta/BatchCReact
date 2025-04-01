import { useEffect, useReducer, useRef, useState } from "react";
import { io } from "socket.io-client";
const socket=io("http://localhost:3001")
// const initial=[];
// function ChatReducer(state,action)
// {

// }
const ChatApp=()=>{
//const [todo,dispatch]=useReducer(ChatReducer,initial)
    const inputRef=useRef<HTMLInputElement|null>(null);
    const inputRomRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);
    const [room,setRoom]=useState<string>("");
    const roomEnter=()=>{
        socket.emit("join-room",inputRomRef.current?.value);
//dispatch({})
    }
    //Mount
    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Connected...");
          //  socket.emit("user-message","Hello");

        })
        socket.on("room-joined",(data)=>{
            setRoom(data);

        })
        socket.on("join",(data)=>{
            console.log("room joined ",data);
            setRoom(data);

        })
        socket.on("msg",(data)=>{
            console.log("Message:",data);
            // const uMessages=[...messages];
            // uMessages.push(data);
            // setMessages(uMessages);
            setMessages((prevState)=>[...prevState,data]);


          //  socket.emit("user-message","Hello");

        })

        return ()=>{socket.disconnect();}
    },[])
    const sendHandler=()=>{
        //socket.emit("user-message",inputRef.current?.value);
        socket.emit("room-message",inputRef.current?.value);

    }
    if(room=="")
    {
        return (
            <>
            <input type="text" ref={inputRomRef} />
            <button onClick={roomEnter}>Enter Room</button>
            </>
        )
    }
        return (
            <>
            Chat app - {room}
            <input ref={inputRef} type="text" className="border"/>
            <button onClick={sendHandler}>Send</button>
            {
                messages.map((item,index)=>{
                    return (
                        <div key={index}>{item}</div>
                    )
                })
            }
            </>
        )

}
export default ChatApp;

/*

import { Server } from "socket.io";
const io=new Server(3001,{
    cors:{ origin:"*"
    }
});
io.on("connection",(socket)=>{
    console.log("Connection to Server from client...."+socket.id)
    socket.on("user-message",(data)=>{
        //console.log("Message:"+data);
        io.emit("msg",data);


    })
})

*/
