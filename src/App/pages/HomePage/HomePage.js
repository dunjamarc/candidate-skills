import React, { Component } from 'react';
import skillsData from '../../../services/skillsService';
import SkillsList from "./SkillsList";
import { Chart } from "react-google-charts";

const data = [
    ["Year", "Number of Skills"],
    ["2016", 7],
    ["2017", 8],
    ["2018", 9],
    ["2019", 9],
    ["2020", 10],
];
const options = {
    curveType: "function",
    legend: { position: "bottom" }
};

class HomePage extends Component {

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
            <div className="container home">
                <div className="skills-list">
                    <h2>Skill List</h2>
                    <SkillsList value={this.state.allSkills}/>
                </div>
                <div className="basic-data left">
                    <img src="https://image.flaticon.com/icons/svg/219/219969.svg" alt="avatar"/>
                    <div className="full-name">
                        <h2>Kristina</h2>
                        <h2>Milenkovic</h2>
                    </div>
                </div>
                <div className="contact left">
                    <h3>Contact</h3>
                    <ul>
                        <li>kristinamilenkovic@gmail.com</li>
                        <li>https://www.linkedin.com/in/krismilenkovic/</li>
                        <li>https://github.com/krismilenkovic/</li>
                    </ul>
                </div>
                <div className="graph left">
                    <h2>Skill Graph</h2>
                    <Chart
                    chartType="LineChart"
                    width="100%"
                    height="300px"
                    data={data}
                    options={options}
                    />
                </div>
            </div>
        </section>
    )}
}

export default HomePage;