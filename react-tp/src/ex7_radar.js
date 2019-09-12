import React, { Component } from "react";
import SpeedChecker from "./speedChecker_ex7";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            speed: 0,
            maxSpeed : 50
        };
        this.handleSpeed = this.handleSpeed.bind(this);
        this.handleMaxSpeed = this.handleMaxSpeed.bind(this);

    }
    handleSpeed(event) {
        this.setState({ speed: event.target.value });
    }

    handleMaxSpeed(event) {
        this.setState({ maxSpeed: event.target.value });
    }


    render() {
        return (
            <div>
                <div className="form">
                    Vitesse : <input type="number" value={this.state.speed} onChange={this.handleSpeed} />
                    Limitation : <input type="number"  value={this.state.maxSpeed} onChange={this.handleMaxSpeed} />
                </div>
                <div className = "speedChecker">
                    <SpeedChecker speed = {this.state.speed} maxSpeed={this.state.maxSpeed} />
                </div>
            </div>
        );
    }

}


export default App;