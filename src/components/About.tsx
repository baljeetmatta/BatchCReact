import { useParams } from "react-router-dom";

const About=()=>{
   const {id}= useParams();

    return (
        <>
        {
            id
        }
            <div> This is About us page</div>
        </>
    )
}
export default About;
