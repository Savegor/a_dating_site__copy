import React from "react";
import Interest from "./Interest/Interest";

const Interests = (props) => {
    
    if (props.interests === null){
        return null
    }
    else{
        let interests = props.interests.map(el => <Interest name={el.name}/>)
        return (
            <>
                <div className="d-flex flex-wrap p-0">
                    {interests}
                </div>
            </>
        )
    }
}

export default Interests