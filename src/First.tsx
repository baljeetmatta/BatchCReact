function First()
{
    //variable
    //let data:string;
    //data="First Code";
    let data="First Code";
    //array
    let arrData:string[]=["First","Second","Third"];

    //let obj:{name:string,age:number}={name:"First",age:20}
type ObjectType={
    name:string,
    age?:number
}
//array of objects
let arrObj:ObjectType[]=[
    {name:"First",age:20},
    {name:"Second"}]

let obj:ObjectType={name:"First",age:20};


    return (
        <>
        Welcome to First {data}
        {/* <p>{arrData}</p> */}
        {
            arrData.map((item)=>{
                return <p>{item}</p>

            })
        }
        <p>Your name is :{obj.name} - {obj.age}</p>
        {
            arrObj.map((item)=>{
                return <p>{item.name} -{item.age}</p>

            })
        }
        </>
    )
}
export default First;
