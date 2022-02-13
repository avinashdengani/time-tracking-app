import React from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends React.Component {
    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer 
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                id={timer.id}
                key={timer.id}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
            />
        ));
        return(
            <div className="" id="timers">
                { timers }
            </div>
        );
    }
}

export default EditableTimerList;