import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { JobType } from "./Jobs";


const JobDetails=()=>{
    const data=useLoaderData<JobType>();
    

    return (
        <>
        <div className="container">
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.package}</div>

        </div>
        </>

    )

}
export default JobDetails;

export const fetchJobDetails=async ({params}:LoaderFunctionArgs)=>{
    const id=Number(params.id);

    const response=   await fetch("/jobs.json");
 const output:JobType[]=await response.json();
const filteredData=output.filter((item)=>{
        if(item.id==id)
            return true;
})

 return  filteredData[0];
}