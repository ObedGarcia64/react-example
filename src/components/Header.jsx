import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png" alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;