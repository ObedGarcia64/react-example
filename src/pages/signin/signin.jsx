import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import { name } from "faker"
import BadgeForm from "../../components/BadgeForm"
import Button from "../../components/MainButton"
import api from "../../libs/api"
import "./signin.css"

class Signin extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="BadgeForm m 5 ">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="name" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Email
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="name" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="name" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Age
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="name" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input 
                            type="password" 
                            className="form-control"
                            name="city" 
                            />
                            <Button contentText={"Register"} theme={"Button"} link={"/newone"}></Button>

                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Signin;