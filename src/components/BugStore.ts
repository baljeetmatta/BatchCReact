import { createStore } from "redux";
import { BugType } from "./Bugs";
type ActionType={
    type:string,
    payload:{
        description?:string,
        id?:number
    }
}
export const BUG_ADDED="bugAdded";
export const BUG_RESOLVED="bugResolved";
let lastid=1;
const BugReducer=(state:BugType[]=[],action:ActionType)=>{


    if(action.type==BUG_ADDED)
    {
        const existingBugs=[...state];
        existingBugs.push({
            id:lastid++,
            description:action.payload.description,
            resolved:false
        })
        return existingBugs;

    }
    if(action.type==BUG_RESOLVED)
        {
           const existingBugs=state.map((item)=>{
            if(item.id==action.payload.id)
                item.resolved=true;
            return item;
           })
            return existingBugs;
    
        }

        return state;


}
export const store=createStore(BugReducer);
