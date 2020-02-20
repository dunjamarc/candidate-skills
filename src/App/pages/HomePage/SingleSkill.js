import React from "react";

const SingleSkill = (props) => {

    return (
        <div className="row">
            <p>{props.value.name}</p>
            <p>{props.value.year}</p>
            <p>{props.value.rating}</p>
        </div>
    )
}

export default SingleSkill;