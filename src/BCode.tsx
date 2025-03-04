import sofa1 from "./assets/sofa-1.png";
type BProps={
    line1:string
}
const BCode=(props:BProps)=>{

    return (
        <>
        <div className="bg-red-200 flex p-4">
                    <div>
                        <div>{props.line1}</div>
                        <div>Free Shipping</div>
                        <div>Attractive Natural Furniture</div>
                        <div ><a href="">Shop Now</a></div>

                    </div>
                    <img src={sofa1} className="w-48"/>

                </div>
        </>
    )
}
export default BCode;
