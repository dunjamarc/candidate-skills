import React from 'react';
import SingleSkill from './SingleSkill';

const SkillsList = (props) => {

    return (
        <div className="skills-wrap">
            <div className="row">
                <p><b>Skill Name</b></p>
                <p><b>Skill Year Aquired</b></p>
                <p><b>Skill Rating</b></p>
            </div>
            {props.value.map(el => <div className="row" key={el.id}><SingleSkill value={el}/></div>)}
        </div>
    )
}

export default SkillsList;