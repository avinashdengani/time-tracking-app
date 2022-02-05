import React from "react";
import EditableTimerList from './EditableTImerList';
import ToggleableTimeForm from "./ToggleableTimerForm";
import { v4 as uuudv4} from 'uuid';

class TimerDashboard extends React.Component {
    state = {
        timers: [
            {
                title: "React JS",
                project: "Timer App",
                id: uuudv4(),
                elapsed: 898484,
                runningSince: Date.now() 
            },
            {
                title: "Laravel",
                project: "REST E-commerce",
                id: uuudv4(),
                elapsed: 86442,
                runningSince: null 
            },
        ]
    };

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers= {this.state.timers}
                    />
                    <ToggleableTimeForm />
                </div>
            </div>
        );
    }
}

export default TimerDashboard;