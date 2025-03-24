import { useEffect, useState } from "react"
import { BugType } from "./Bugs"
import { BUG_RESOLVED, store } from "./BugStore";
// type BugProps={
//     bugs:BugType[]
// }
//const BugList=(props:BugProps)=>{
    const BugList=()=>{
        const [bugs,setBugs]=useState<BugType[]>([]);
        // useEffect(()=>{
        //     setBugs(store.getState());
        // },[])
        store.subscribe(()=>{

            setBugs(store.getState());
        })
        
        const resolveHandler=(id:number)=>{
            store.dispatch({
                type:BUG_RESOLVED,
                payload:{
                    id:id
                }
            })
    }

    return(
        <>
        <div className="grid grid-cols-4 gap-2">
         {
            bugs.map((item)=>{
                return (
                    <div className="flex gap-3 bg-gray-300 p-2">   
                        <div>{item.description}</div>
                        <div>{item.resolved?"Resolved":<button onClick={()=>{resolveHandler(item.id)}} className="bg-red-400 p-2 rounded-md text-white">Resolve</button>}</div>


                    </div>
                )

            })
        }
        </div>
        </>
    )

}
export default BugList;
