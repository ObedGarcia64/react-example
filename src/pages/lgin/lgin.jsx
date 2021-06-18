import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import { name } from "faker"
import BadgeForm from "../../components/BadgeForm"
import api from "../../libs/api"
import Button from "../../components/MainButton"

import "./lgin.css"

class FormLogin extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="BadgeForm m 5 ">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Username or E-mail
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
                            name="profile_picture_url" 
                            />
                            
                        </div>
                        <div>
                            <Button contentText={"Access"} theme={"Button"} link={"/badges"}></Button>
                            <Button contentText={"Register"} theme={"Button"} link={"/signin"}></Button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormLogin;