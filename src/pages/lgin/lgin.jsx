import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import { name } from "faker"
import BadgeForm from "../../components/BadgeForm"
import api from "../../libs/api"
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
                                E-mail
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="profile_picture" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Social Media
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="header_picture" 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Age
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="age"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="city" 
                            />
                            <button type="submit" className="Submit__button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormLogin;