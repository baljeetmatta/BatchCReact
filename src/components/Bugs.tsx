import { useRef, useState } from "react"
import BugList from "./BugList";
import { BUG_ADDED, store } from "./BugStore";
export type BugType={
    id:number,
    description:string|undefined,
    resolved:boolean
}
let lastid=1;
const Bugs=()=>{
   // const [bugs,setBugs]=useState<BugType[]>([]);
    const inputRef=useRef<HTMLInputElement|null>(null);
    // const addHandler=()=>{
    //     const existingBugs=[...bugs];
    //     existingBugs.push({
    //         id:lastid++,
    //         description:inputRef.current?.value,
    //         resolved:false
    //     })
    //     setBugs(existingBugs);

    // }
    const addHandler=()=>{
            store.dispatch({
                    type:BUG_ADDED,
                    payload:{
                        description:inputRef.current?.value
                    }

            })
    }
    // const resolveHandler=(id:number)=>{
    //     const existingBugs=bugs.map((item)=>{
    //         if(item.id==id)
    //             item.resolved=true;

    //         return item
    //     })
    //     setBugs(existingBugs);
    // }
    return (
        <>
        <input className="border" type="text" ref={inputRef}/>
        <button onClick={addHandler} className="bg-red-400 p-2 rounded-md text-white">Add</button>
        <BugList />

       
        
        </>
    )

}
export default Bugs