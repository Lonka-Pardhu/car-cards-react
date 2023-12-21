import { useState } from "react";

function Cars(props) {
    const [cardClick, setCardClick] = useState(false);
    const cardInfo = () => {
        setCardClick(prevClick => !prevClick);
    }
    return (
        <>
            <div onClick={cardInfo} className="card-main-container">
                <div className="car-card">
                    <div className="car-img-container">
                        <img src={props.data.image} alt="car-img" />
                    </div>
                    {cardClick ? (
                        <div className="car-specs-container">
                            <p><b>Model: </b>{props.data.model}</p>
                            <p><b>Vehicle Type: </b>{props.data.vehicleType}</p>
                            <p><b>Engine Type: </b>{props.data.engineType}</p>
                            <p><b>Displacement: </b>{props.data.displacement}</p>
                            <p><b>Power: </b>{props.data.power}</p>
                            <p><b>Torque: </b>{props.data.torque}</p>
                            <p><b>Transmission: </b>{props.data.transmission}</p>
                        </div>
                    ) : (
                        <div className="brand-logo-container">
                            <img src={props.data.brandLogo} alt="car-brand-logo" />
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}
export default Cars;

// ? Todo : write this using class component>!
