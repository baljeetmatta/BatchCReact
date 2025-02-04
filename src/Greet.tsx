type GreetProps={
    name:string,
    years?:number
}
function Greet(props:GreetProps)
{
    return (
        <><div>Welcome to {props.name} - {props.years}</div></>
    )
}
export default Greet;
