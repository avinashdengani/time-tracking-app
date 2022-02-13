import React from "react";
import EditableTimerList from './EditableTImerList';
import ToggleableTimeForm from "./ToggleableTimerForm";
import { v4 as uuudv4} from 'uuid';
import Helpers from "../helpers";
import Client from "../client";

class TimerDashboard extends React.Component {
    state = {
        timers: []
    };

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000);
    }
    loadTimersFromServer = () => {
        Client.getTimers( (serverResponse) => {
            this.setState( {timers: serverResponse});
        });
    }
    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }
    handleEditFormSubmit = (timer) => {
        this.updateTimer(timer);
    }
    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    }
    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
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
    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    }
    deleteTimer = (timerId) => {
        this.setState( { timers: this.state.timers.filter(timer => timer.id !== timerId) } );
    }
    startTimer = (timerId) => {
        const now = Date.now();

        this.setState( {
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId) {
                    return Object.assign( {}, timer, { 
                        runningSince: now
                    });
                }
                return timer;
            })
        });
    }
    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState( {
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign( {}, timer, { 
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null
                    });
                }
                return timer;
            })
        });
    }
    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers= {this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStopClick={this.handleStopClick}
                        onStartClick={this.handleStartClick}
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