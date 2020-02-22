import React from "react";

const SingleSkill = (props) => {

    return (
        <React.Fragment>
            <p>{props.value.name}</p>
            <p>{props.value.year}</p>
            <div><span style={{width: props.value.rating * 10}}></span></div>
        </React.Fragment>
    )
}

export default SingleSkill;