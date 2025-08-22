import React from "react";

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:"Hello World"
        };
    }
   
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            </>
        )
    }
}
export default Person;

//extends Component tells React this is a class component.

//The only required method is render(), which returns JSX—a description of what you want to display.

//State is managed with this.state and updated using this.setState()