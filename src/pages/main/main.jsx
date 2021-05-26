import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import "./main.css"

const Main = props =>{
    return(
        <React.Fragment>
           <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome Drivers"}</h1>
                    <Button contentText={"Login"} link={"/new"}></Button>
                </div>
                <Hero h={"88vh"}></Hero>   
            </div> 
        </React.Fragment>
    )
}

export default Main;