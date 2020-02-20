import React from "react";
import SkillsList from "./SkillsList";

const HomePage = () => {
    
    return (
        <section className="main">
            <div className="container home">
                <div className="skills-list">
                    <h2>Skill Graph</h2>
                    <SkillsList />
                </div>
                <div className="basic-data left">
                    <img src="https://image.flaticon.com/icons/svg/219/219969.svg" />
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
                </div>
            </div>
        </section>
    )
}

export default HomePage;