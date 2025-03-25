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
type StateType={
    bugs:BugType[]
}
const BugReducer=(state:StateType={bugs:[]},action:ActionType)=>{


    if(action.type==BUG_ADDED)
    {
        const bugs=[...state.bugs];
        bugs.push({
            id:lastid++,
            description:action.payload.description,
            resolved:false
        })
        return {...state,bugs};

    }
    if(action.type==BUG_RESOLVED)
        {
            const bugs=[...state.bugs];
           const existingBugs=bugs.map((item)=>{
            if(item.id==action.payload.id)
                item.resolved=true;
            return item;
           })
            return {...state,bugs:existingBugs};
    
        }

        return state;


}
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
const config={
    key:'bugroot',
    storage
}
const pReducer=persistReducer(config,BugReducer);
/*
[
    {
    }
]
{
    bugs:[
        {
        }
    ]
}

*/

export const store=createStore(pReducer);
export const pStore=persistStore(store);
