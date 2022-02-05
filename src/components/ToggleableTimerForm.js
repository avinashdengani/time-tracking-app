import React from "react";
import TimerForm from "./TimerForm";

class ToggleableTimeForm extends React.Component {
    render() {
        if(this.props.isOpen) {
            return (
                <TimerForm />
            );
        }

        return(
            <div className="ui content basic center aligned segment">
                <button className="ui basic button icon">
                    <i className="plus icon"></i>
                </button>
            </div>
        );
    };
}

export default ToggleableTimeForm;