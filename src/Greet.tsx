type GreetObject={
    name:string,
    age:number;
}
type GreetProps={
    name:string,
    years?:number,
    object:GreetObject
    children:React.ReactNode
}
function Greet(props:GreetProps)
{
    return (
        <><div>Welcome to {props.name} - {props.years} {props.object.name}</div>
        <p>{props.children}</p></>
    )
}
export default Greet;
