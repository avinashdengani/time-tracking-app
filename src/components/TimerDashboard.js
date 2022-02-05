import React from "react";
import EditableTimerList from './EditableTImerList';
import ToggleableTimeForm from "./ToggleableTimerForm";

class TimerDashboard extends React.Component {
    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList />
                    <ToggleableTimeForm 
                        isOpen={false}
                    />
                </div>
            </div>
        );
    }
}

export default TimerDashboard;