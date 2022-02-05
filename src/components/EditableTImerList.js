import React from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends React.Component {
    render() {
        const timers = this.props.timers.map((timer) => {
            <EditableTimer 
                    title={timer.title}
                    project={timer.project}
                    elapsed={timer.elapsed}
                    editFormOpen={timer.elapsed}
                    id={timer.id}
                    key={timer.id}
                    runningSpace={timer.runningSpace}
                />
        });
        return(
            <div className="" id="timers">
                { timers }
            </div>
        );
    }
}

export default EditableTimerList;