import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png" alt="logo" width="50" height="50"/>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;