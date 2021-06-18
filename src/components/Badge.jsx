import React, { Component } from 'react'
import HeaderBackground from '../images/badge_header.jpg'
import ProfilePic from '../images/profile.jpg'
import "./style/Badge.css"

class Badge extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5">
                    <div className="Badge__header">
                        <img src={this.props.header_img_url} alt="header_img_url" />
                    </div>
                    <div className=" Badge__userInfo container mt-5 mb-1">
                        <div className="Badge__userImage">
                            <img src={this.props.profile_picture_url} alt="profile_picture_url"  />
                        </div>
                        <h4 className="text-center mt-5">{this.props.name}<i> {this.props.age}</i></h4>
                        <p className="text-center">{this.props.city}</p>
                    </div>
                    <div className="Badge__info container pt-3">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.bets}</h4>
                                <p className="text-center">bets</p>
                            </div>
                            <div className="col">
                            <h4 className="text-center fw bold">{this.props.state}</h4>
                                <p className="text-center">state</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Badge;