import React, { Component } from 'react';
import SingleSkill from './HomePage/SingleSkill';
import skillsData from '../../services/skillsService';

class Skills extends Component {

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
            <section className="main">
                <div className="container skills">
                    <div className="skills-list">
                        <h2>Skills List</h2>
                        <div className="skills-wrap">
                            <div className="row">
                                <p><b>Skill Name</b></p>
                                <p><b>Skill Year Aquired</b></p>
                                <p><b>Skill Rating</b></p>
                                <p><b>CTA</b></p>
                            </div>
                            {this.state.allSkills.map(el => <div className="row">
                                <SingleSkill value={el} key={el.id}/>
                                <div className="cta">
                                    <i class="fas fa-edit"></i>
                                    <i class="fas fa-trash-alt"></i>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="skill-form">
                        <h2>Skill Form</h2>
                        <form>
                            <div>
                                <label for="skill-name">Skill Name</label>
                                <input id="skill-name" type="text"></input>
                            </div>
                            <div>
                                <label for="skill-rating">Skill Rating</label>
                                <input id="skill-rating" type="number"></input>
                            </div>
                            <div>
                                <label for="skill-year">Skill Year Aquired</label>
                                <input id="skill-year" type="number"></input>
                            </div>
                        </form>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;