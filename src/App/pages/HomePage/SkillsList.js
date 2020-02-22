import React, { Component } from 'react';
import SingleSkill from './SingleSkill';
import skillsData from '../../../services/skillsService';

class SkillsList extends Component {

    constructor (props){
        super(props);
        this.state = {
            allSkills: []
        }
    }

    fetchData = () => {
       skillsData.allSkillsData()
        .then(data => {
            this.setState({
                allSkills: data
            })
        })
    }

    componentDidMount(){
        this.fetchData();
    }

    render () {
        return (
            <div className="skills-wrap">
                <div className="row">
                    <p><b>Skill Name</b></p>
                    <p><b>Skill Year Aquired</b></p>
                    <p><b>Skill Rating</b></p>
                </div>
                {this.state.allSkills.map(el => <div className="row"  key={el.id}><SingleSkill value={el}/></div>)}
            </div>
        )
    }
}

export default SkillsList;