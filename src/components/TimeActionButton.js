import React from "react";

class TimeActionButton extends React.Component {
    render() {
        if(this.props.timerIsRunning) {
            return(
                <div
                    className="ui bottom attached red basic button"
                    onClick={this.props.onStopClick}
                >
                    Stop
                </div>
            );
        }

        return(
            <div
                className="ui bottom attached blue basic button"
                onClick={this.props.onStartClick}
            >
                Start
            </div>
        );
    }
}

export default TimeActionButton;