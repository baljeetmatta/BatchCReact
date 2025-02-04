type ButtonProps={
    value:string,
    click:Function
}
function clickHandler()
{
    alert("clicked on button");
}
function Button(props:ButtonProps){

    return (
        <>
        <button onClick={props.click}>{props.value}</button>
        </>
    )
}
export default Button;
