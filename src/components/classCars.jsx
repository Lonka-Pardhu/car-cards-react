import React from "react";

class classCars extends React.Component {
    constructor() {
        super();
        this.state = { clickTrack: true };
    }
    flipCard = () => {
        this.setState(prevState => ({ clickTrack: !prevState.clickTrack }))
    }
    render() {
        return (<>
            <div className="class-card-main-container">
                {this.state.clickTrack ? (
                    <div className="class-card-front">
                        <h3>Card front {this.state.color}</h3>
                    </div>
                ) : (
                    <div className="class-card-back">
                        <h3>card back</h3>
                    </div>
                )}
                <button onClick={this.flipCard}>flip the card</button>
            </div>
        </>)
    }
}

export default classCars;