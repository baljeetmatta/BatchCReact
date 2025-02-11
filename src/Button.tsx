

type ButtonProps={
    value:string,
    click:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
function clickHandler()
{
    alert("clicked on button");
}
function Button(props:ButtonProps){

    return (
        <>
        <button onClick={(event)=>{props.click(event,1)}}>{props.value}</button>
        </>
    )
}
export default Button;
