import React from "react";
import EditableTimerList from './EditableTImerList';
import ToggleableTimeForm from "./ToggleableTimerForm";
import { v4 as uuudv4} from 'uuid';
import Helpers from "../helpers";

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
    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }
    handleEditFormSubmit = (timer) => {
        this.updateTimer(timer);
    }
    createTimer = (timer) => {
        console.log(this.state.timers);
        const t = Helpers.newTimer(timer);
        this.setState({timers: this.state.timers.concat(t)});
    }
    updateTimer = (updatedTimer) => {
        this.setState( {
            timers: this.state.timers.map((timer) => {
                if(timer.id === updatedTimer.id) {
                    return Object.assign({}, timer, {
                        title: updatedTimer.title,
                        project: updatedTimer.project,

                    });
                }
                return timer;
            }),
        });
    }
    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers= {this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                    />
                    <ToggleableTimeForm 
                        onFormSubmit = {this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default TimerDashboard;