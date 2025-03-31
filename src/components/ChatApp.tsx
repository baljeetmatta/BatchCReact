import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
const socket=io("http://localhost:3001")
const ChatApp=()=>{

    const inputRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);

    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Connected...");
          //  socket.emit("user-message","Hello");

        })
        socket.on("msg",(data)=>{
            console.log("Message:",data);
            // const uMessages=[...messages];
            // uMessages.push(data);
            // setMessages(uMessages);
            setMessages((prevState)=>[...prevState,data]);


          //  socket.emit("user-message","Hello");

        })

    },[])
    const sendHandler=()=>{
        socket.emit("user-message",inputRef.current?.value);

    }
        return (
            <>
            Chat app
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
