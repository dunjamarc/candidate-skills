import React from "react";

const SingleSkill = (props) => {

    return (
        <React.Fragment>
            <p className="name">{props.value.name}</p>
            <p className="year"><span>Since </span>{props.value.year}</p>
            <div className="bar"><span style={{width: props.value.rating * 10}}></span></div>
        </React.Fragment>
    )
}

export default SingleSkill;