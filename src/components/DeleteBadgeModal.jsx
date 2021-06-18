import React from "react"
import Modal from "./Modal"


const DeleteBadgeModal = (props) =>{

    return (
        <Modal 
            isOpen={props.isOpen}
            onClose={props.onClose}>

            <div className="DeleteBadgeModal">
                <p>You are about to delete this modal</p>
                <p>Are you sure?</p>
                <div>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mx-2">Delete</button>
                    <button onClick={props.onClose} className="btn btn-success mx-2">Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteBadgeModal;