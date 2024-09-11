import React from "react";
import './Interest.css'

const Interest = (props) => {

    return (
        <>
            <div className="interest my-1">
                {props.name}
            </div>
        </>
    )
}

export default Interest