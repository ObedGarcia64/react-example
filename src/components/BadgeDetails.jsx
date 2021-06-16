import React from "react"
import BadgeDetailsUI from "./BadgeDetailsUI"
import api from "../libs/fetch"

class BadgeDetails extends React.Component{
    
    state = {
        loading: false,
        error: null,
        data: {},
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, data:data}) 
        }catch(error){
            this.setState({loading: false, error:error}) 

        }
    }

    render(){
        return(
            <BadgeDetailsUI badge={this.state.data}>

            </BadgeDetailsUI>
        );
    }
}

export default BadgeDetails