import React, {Component} from "react";
import "./App.css";

class TasksInfo extends Component {

    componentDidMount() {
        setInterval(this.getTasksData, 2000);
    }

    getTasksData = () => {
        fetch('/task',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                instances : data
            });
        });
    }

    render() {
        const haveData = this.state && this.state.tasks;
        return (
                <div class="card mb-4">
                    <div class="view overlay" className="ReactTitleStyle3">
                        <center><strong>Tasks</strong></center>
                    </div>
                    <div class="card-body jbpm-card-body">
                        {haveData ? (
                                <table class="table mb-0">
                                    <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.tasks.map(task => (
                                            <tr>
                                                <td><small>{task.id}</small></td>
                                                <td><small>{task.taskName}</small></td>
                                            </tr>
                                    ))
                                    }
                                    </tbody>
                                </table>
                        ) : (
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                        )}
                    </div>
                </div>
        );
    }
}

export default TasksInfo;