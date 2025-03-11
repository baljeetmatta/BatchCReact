import { useEffect, useRef, useState } from "react";
type PostType={
    id:number,
    title:string,
    body:string
}
const Posts=()=>{
    const [post,setPosts]=useState<PostType[]|undefined>(undefined);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState<string|undefined>(undefined)
    const [page,setPage]=useState(0);
    let abortRef=useRef<AbortController|undefined>(undefined);

    useEffect(()=>{
        //isLoading=true;
        const fetchData=()=>{
        setLoading(true)
        setError(undefined);
        abortRef.current?.abort();
        abortRef.current=new AbortController();

       // fetch("https://jsosnplaceholder.typicode.com/posts?page="+{page})
       fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`,{signal:abortRef.current?.signal})
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            setLoading(false);
            setPosts(response);
        }).catch((e)=>{
            setLoading(false);
            console.log(e);

            //setError("Error in loading data")
        })
    }
        //  fetchData();
        setTimeout(fetchData,1000);


    },[page])

    // if(isLoading)
    //     return (<div>Loading...</div>)
  
    return (
        <>
        <button onClick={()=>{setPage(page+1)}} className="bg-blue-400 p-1 rounded-md">Next {page+1}</button>
        {error && <div>Error in loading data...</div> }
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
        <table>
            
        {
            post?.map((item)=>{
                return (
                    <tr><td>{item.title}</td><td>{item.body}</td></tr>
                )
            })
        }

        </table>
}
        </>

    );

}
export default Posts;