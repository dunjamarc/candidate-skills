import React, { Component } from 'react';
import SingleSkill from './HomePage/SingleSkill';
import skillsData from '../../services/skillsService';

class Skills extends Component {

    constructor (props){
        super(props);
        this.state = {
            allSkills: [],
            skillName: '',
            skillRating: 1,
            skillYear: 0
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

    handleChange = (event) => {
        if(event.target.id === "skill-name"){
            this.setState({
                skillName: event.target.value,
            })
        } else if (event.target.id === "skill-rating"){
            this.setState({
                skillRating: event.target.value,
            })
        } else if (event.target.id === "skill-year"){
            this.setState({
                skillYear: event.target.value,
            })
        }
    }

    handleClick = () => {
        let skillId = this.state.allSkills.length;

        const obj = {
            id: skillId,
            name: this.state.skillName,
            year: this.state.skillYear,
            rating: this.state.skillRating
        };
        
        skillsData.sendSkill(`http://localhost:3001/skills`, obj)
            .then(() => this.fetchData())
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
                                    <i className="fas fa-edit"></i>
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="skill-form">
                        <h2>Skill Form</h2>
                        <form>
                            <div>
                                <label htmlFor="skill-name">Skill Name</label>
                                <input id="skill-name" type="text" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label htmlFor="skill-rating">Skill Rating</label>
                                <select id="skill-rating" onChange={this.handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="skill-year">Skill Year Aquired</label>
                                <input id="skill-year" type="number" onChange={this.handleChange}></input>
                            </div>
                        </form>
                        <button onClick={this.handleClick}>SUBMIT</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;