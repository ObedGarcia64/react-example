import React from "react"
import Badge from "./Badge"
import Hero from "./Hero"
import Footer from "./Footer"

const BadgeDeatailsUi = props =>{
    const badge = props.badge

    return(
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            header_img_url = {badge.header_img_url}
                            profile_picture_url = {badge.profile_picture_url}
                            name={badge.name}
                            age={badge.age}
                            city={badge.city}
                            bets={badge.bets}
                            state={badge.state}
                        ></Badge>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default BadgeDeatailsUi