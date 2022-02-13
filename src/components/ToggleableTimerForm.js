import React from "react";
import TimerForm from "./TimerForm";

class ToggleableTimeForm extends React.Component {
    state = {
        isOpen: false
    };
    handleFormOpen = () => {
        this.setState({isOpen:true});
    }
    handleFormClose = () => {
        this.setState({isOpen:false});
    }
    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({isOpen:false});
    }
    render() {
        if(this.state.isOpen) {
            
            return (
                <TimerForm 
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        }

        return(
            <div className="ui content basic center aligned segment">
                <button className="ui basic button icon" onClick={this.handleFormOpen}>
                    <i className="plus icon"></i>
                </button>
            </div>
        );
    };
}

export default ToggleableTimeForm;