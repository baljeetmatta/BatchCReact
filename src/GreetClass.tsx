// 1. Create a class extends React.Component
// 2. render ->return tsx
import React from 'react';
type GreetProps={
    name:string
}
class GreetClass extends React.Component<GreetProps>
{
    clickHandler=()=>{

    }
    render()
    {
        return(
            <>
            Class {this.props.name};
            <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}
export default GreetClass