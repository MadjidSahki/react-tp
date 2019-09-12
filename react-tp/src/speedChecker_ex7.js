import React, { Component } from "react";


class SpeedChecker extends Component {

    constructor(props) {
        super(props)
        this.state = {

        };
    }

    renderText() {
        if (this.props.speed <= this.props.maxSpeed) {
            return <p>Tout est bon</p>
        } else if (this.props.speed > this.props.maxSpeed) {
            return <p>Vous êtes en excès de vitesse. <br></br>
                La vitesse mesurée est {this.props.speed}  et la vitesse retenue est {this.props.speed - 4}</p>
        }
    }

    renderPoint() {
        let pt = (((this.props.speed - 4) - this.props.maxSpeed) / 20) + 1;
        if (pt >= 1) {
            return <p>Vous allez perdre {Math.round(pt)} point(s)</p>
        }

    }

    render() {
        return (
            <div className="text">
                {this.renderText()}
                {this.renderPoint()}
            </div>
        )
    }
}




export default SpeedChecker;