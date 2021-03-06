import React from "react";
import Badge from "./Badge";
import Hero from "./Hero";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import DeleteBadgeModal from "./DeleteBadgeModal";

const BadgeDetailsUI = (props) =>{
    const badge = props.badge;

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
                            bets={badge.bets || 0}
                            state={badge.state || 0}>
                            </Badge>
                    </div>
                    <div className="col-6 mt-5">
                        <h2>Actions</h2>
                        <Link className="btn btn-success mx-3 mt-3 mr-2" to={`/${badge._id}/edit/`}>Edit</Link>
                        <button onClick={props.onOpenModal} className="btn btn-danger mx-3 mt-3">Delete</button>
                        <DeleteBadgeModal
                        isOpen = {props.modalIsOpen}
                        onClose = {props.onCloseModal}
                        onDeleteBadge = {props.onDeleteBadge}>    
                        </DeleteBadgeModal>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default BadgeDetailsUI;