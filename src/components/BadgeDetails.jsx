import React from "react";
import BadgeDetailsUI from "./BadgeDetailsUI";
import api from "../libs/fetch";

class BadgeDetails extends React.Component{
    
    state = {
        loading: false,
        error: null,
        data: {},
        modalIsOpen: false,
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error:null});
        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, data:data});
        }catch(error){
            this.setState({loading: false, error:error});

        }
    }

    handleOpenModal = () =>{
        this.setState({ modalIsOpen: true });
    };

    handleCloseModal = () =>{
        this.setState({ modalIsOpen: false });
    };

    handleDeleteBadge = async() => {
        this.setState({loading: true, error:null});
        try{
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false})
            this.props.history.push("/badges")
        }catch(error){
            this.setState({ loading:false, error:error });
        }
    }

    render(){
        return(
            <BadgeDetailsUI 
                onCloseModal = {this.handleCloseModal}
                onOpenModal = {this.handleOpenModal}
                modalIsOpen = {this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={this.state.data}>
            </BadgeDetailsUI>
        );
    }
}

export default BadgeDetails;