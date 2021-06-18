import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "../NewBadge/NewBadge.css"
import { name } from "faker"
import BadgeForm from "../../components/BadgeForm"
import api from "../../libs/fetch"

class EditBadge extends React.Component{
    
    state = {
        loading : false,
        error: null,
        form:{
            header_img_url: "",
            profile_picture_url: "",
            name: "",
            age: "",
            city: "",
            bets: "",
            state: ""
        },
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error:null});
        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, form:data});
        }catch(error){
            this.setState({loading: false, error:error});

        }
    };

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/badges")
        } catch(error){
            this.setState({loading:false, error: error})
            
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"10vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                header_img_url = {this.state.form.header_img_url  ||  "https://i.pinimg.com/474x/6a/96/bb/6a96bbd8b78d7c6b473024e043b71408.jpg"}
                                profile_picture_url = {this.state.form.profile_picture_url || "https://ccploreto.sacpro.pe/uploads/images/default.jpg"}
                                name = {this.state.form.name || "Name Last Name"}
                                age = {this.state.form.age || "Age"}
                                city = {this.state.form.city || "City Country"}
                                bets = {this.state.bets || "Bets"}
                                state = {this.state.state || "State"}
                            ></Badge>
                        </div>     
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}>   
                            </BadgeForm>
                        </div>         
                    </div>    
                </div>
            </React.Fragment>
        );
    }
}

export default EditBadge;