import React, { Component } from 'react';
import skillsData from '../../../services/skillsService';

class SkillForm extends Component {

    constructor (props){
        super(props);
        this.state = {
            skillName: '',
            skillRating: 1,
            skillYear: 0
        }
    }

    handleChange = (event) => {
        let skillName = event.target.value
        this.setState({
            skillName: skillName
        })
    }

    handleOption = (event) => {
        let skillRating = event.target.value
        this.setState({
            skillRating: skillRating
        })
    }

    handleYear = (event) => {
        let skillYear = parseInt(event.target.value)
        this.setState({
            skillYear: skillYear
        })
    }

    handleClick = () => {

        const obj = {
            id: 10,
            name: this.state.skillName,
            year: this.state.skillYear,
            rating: this.state.skillRating
        };
        
        skillsData.sendSkill(`http://localhost:3001/skills`, obj)
    }

    render () {
        return (
            <div className="skill-form">
                <h2>Skill Form</h2>
                <form>
                    <div>
                        <label htmlFor="skill-name">Skill Name</label>
                        <input id="skill-name" type="text" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="skill-rating">Skill Rating</label>
                        <select id="skill-rating" onChange={this.handleOption}>
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
                        <input id="skill-year" type="number" onChange={this.handleYear}></input>
                    </div>
                </form>
                <button onClick={this.handleClick}>SUBMIT</button>
            </div>
        )
    }
}

export default SkillForm;