import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"
import { name } from "faker"

class NewBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            Age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                            header_picture = {this.state.form.header_picture || "https://coatepec.gob.mx/wp-content/uploads/2019/09/4K-Moving-Stars-Live-Wallpaper-1.jpg"}
                            profile_picture = {this.state.form.profile_picture || "https://lumiere-a.akamaihd.net/v1/images/be_hte_title_cover_final_ed_web_f1ba4992.jpeg"}
                        ></Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;