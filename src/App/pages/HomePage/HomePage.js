import React, { Component } from 'react';
import skillsData from '../../../services/skillsService';
import SkillsList from "./SkillsList";
import { Chart } from "react-google-charts";

const options = {
    curveType: "function",
    legend: { position: "bottom" }
};

class HomePage extends Component {

    constructor (props){
        super(props);
        this.state = {
            allSkills: [],
            chartData: [["Year", "Number of Skills"]]
        }
    }

    fetchData = () => {
       skillsData.allSkillsData()
        .then(data => {
            this.setState({
                allSkills: data
            })
        })
        .then(() => this.chartData())
    }

    componentDidMount(){
        this.fetchData()
    }

    chartData = () => {
        let skillData = this.state.allSkills;
        let years = [];
        let singleData = [];

        skillData.map((el) => years.push(el.year));
        years.sort().map((el, i) => {
            singleData = [el.toString(), i+1];
            if(el !== years[i+1]){
                let data = this.state.chartData;
                data.push(singleData);
                this.setState({
                    chartData: data
                })
            }
        })
    }
    
    render () {
        return (
            <div className="container home">
                <div className="skills-list">
                    <h2>Skill List</h2>
                    <SkillsList value={this.state.allSkills}/>
                </div>
                <div className="basic-data left">
                    <div className="full-name">
                        <h2>Kristina</h2>
                        <h2>Milenkovic</h2>
                    </div>
                    <img src="https://image.flaticon.com/icons/svg/219/219969.svg" alt="avatar"/>
                </div>
                <div className="contact left">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:kristinamilenkovic@gmail.com">kristinamilenkovic@gmail.com</a>
                        </li>
                        <li>
                            <i className="fab fa-linkedin"></i>
                            <a target="_blank" href="https://www.linkedin.com/in/krismilenkovic/">linkedin.com/in/krismilenkovic/</a>
                        </li>
                        <li>
                            <i className="fab fa-github-square"></i>
                            <a target="_blank" href="https://github.com/krismilenkovic/">github.com/krismilenkovic/</a>
                        </li>
                    </ul>
                </div>
                <div className="graph left">
                    <h2>Skill Graph</h2>
                    <Chart
                    chartType="LineChart"
                    width="100%"
                    height="200px"
                    data={this.state.chartData}
                    options={options}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;