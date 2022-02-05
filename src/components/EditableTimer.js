import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends React.Component {
    render() {
        if(this.props.title) {
            return(
                <TimerForm 
                    title={this.props.title}
                    project={this.props.pproject}
                />
            );
        }

        return (
            <Timer
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
            />
        )
    }
}

export default EditableTimer;