import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
//import jsonData from "../jobs.json"
export type JobType={
    id:number,
    title:string,
    description:string,
    package:string
}
const Jobs=()=>{
   // const data=useLoaderData();
   const data=useLoaderData<JobType[]>();

return (
    <>
    <div>Job Details</div>
    {/* {data} */}
    <div className="container">
        <div className="grid grid-cols-3 gap-4">
        {data.map((item)=>{
             return (
                 <div className="bg-gray-300">
                  <NavLink to={`/jobdetails/${item.id}`}> <div>{item.title}</div></NavLink> 
                    <div>{item.description}</div>

                    </div>
             )

        })}

        </div>
    </div>
    </>
)

}
export default Jobs;
export const fetchJobs=async ()=>{
   // console.log("fetch")
    //return "Hi";
    // fetch("/jobs.json").then((response)=>{
    //     return response.json();
    // }).then((response)=>{
    //     return response;
    // })
 const response=   await fetch("/jobs.json");
 const output=await response.json();


 return  output;


}