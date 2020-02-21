import React from "react";

const SingleSkill = (props) => {

    return (
        <div className="row">
            <p>{props.value.name}</p>
            <p>{props.value.year}</p>
            <p><div><span style={{width: props.value.rating * 10}}></span></div></p>
        </div>
    )
}

export default SingleSkill;