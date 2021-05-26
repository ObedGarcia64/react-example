import React, {Component} from "react"
import './style/BadgeForm.css'

class BadgeForm extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeForm m 5 ">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            onChange={this.props.onChange}
                            value={this.props.formValues.name} 
                            />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeForm;