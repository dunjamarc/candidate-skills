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
                {this.state.allSkills.map(el => <SingleSkill value={el} key={el.id}/>)}
            </div>
        )
    }
}

export default SkillsList;