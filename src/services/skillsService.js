import Skill from '../entities/Skill'

class SkillsService {

    allSkillsData() {
        
        return fetch('http://localhost:3001/skills')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response.map((el) => new Skill(el))
            })
    }

    sendSkill(url, data){
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

    deleteSkill(id){
        return fetch(`http://localhost:3001/skills/${id}`, {
            method: 'DELETE',
        })
    }
}

const skillsData = new SkillsService();

export default skillsData;