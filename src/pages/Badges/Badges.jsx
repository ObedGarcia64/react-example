import React from "react";
import SkeletonItem from "../../components/SkeletonItem"
import BadgesList from "../../components/BadgesList"
import api from "../../libs/fetch"
import "./Badges.css";
import Button from "../../components/MainButton"
import PageError from "../../components/PageError"
class Badges extends React.Component{

    
    state={
        loading:true,
        error: null,
        data: undefined,
    }

    componentDidMount(){
        this.fetchData();
        if(this.state.error){
            this.setFetchInterval();
        }
    }

    fetchData = async() =>{
        this.setState({loading: true, error: null});
        try{
            const data = await api.badges.list();
            data.reverse()
            this.setState({loading: false, data: data});

        }catch(error){
            this.setState({loading: false, error: error, data: []});
        }
    }

    setFetchInterval(){
        this.interval = setInterval(this.fetchData, 3000);
    }

    componentWillMount(){
        clearInterval(this.interval);
    }

    render(){
        if(this.state.loading===true && !this.state.data){
            return <SkeletonItem></SkeletonItem>
        }

        if(this.state.error){
            return <PageError error ={this.state.error.message}>NetWork Error when attempting to fetch resource</PageError>
        }
        return(
            <React.Fragment>
                <BadgesList badges={this.state.data}></BadgesList>
            </React.Fragment>
        );
    }
}
 
export default Badges;