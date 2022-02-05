import React from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends React.Component {
    render() {
        return(
            <div className="" id="timers">
                <EditableTimer 
                    title="React JS"
                    project="Timer App"
                    elapsed="555524"
                    editFormOpen={false}
                />
                <EditableTimer 
                    title="Laravel"
                    project="Timer App"
                    elapsed="744444"
                    editFormOpen={true}
                />
            </div>
        );
    }
}

export default EditableTimerList;