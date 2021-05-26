import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"
import { name } from "faker"
import BadgeForm from "../../components/BadgeForm"

class NewBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
        }
    }

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                header_picture = {this.state.form.header_picture || "https://coatepec.gob.mx/wp-content/uploads/2019/09/4K-Moving-Stars-Live-Wallpaper-1.jpg"}
                                profile_picture = {this.state.form.profile_picture || "https://lumiere-a.akamaihd.net/v1/images/be_hte_title_cover_final_ed_web_f1ba4992.jpeg"}
                                name = {this.state.form.name || "Billie Bebé💖"}
                                age = {this.state.form.age || "19"}
                                city = {this.state.form.city || "United states"}
                                followers = {this.state.form.followers || "11k"}
                                likes = {this.state.form.like || "3k"}
                                post = {this.state.form.post || "1k"}

                            ></Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}></BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;