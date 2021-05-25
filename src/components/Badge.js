import React, { Component } from 'react'
import HeaderBackground from '../images/badge_header.jpg'
import ProfilePic from '../images/profile.jpg'
import "./style/Badge.css"

class Badge extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5 flex-column">
                    <div className="Badge__header">
                        <img src={HeaderBackground} alt="header_background" />
                    </div>
                    <div className="Badge__userInfo container mt-5 mb-1">

                    </div>
                    <div className="Badge__info container pt-3">

                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Badge;