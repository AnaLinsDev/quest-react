import './quest-card.styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RadioGroupComponent from '../radio-group/radio-group.component';


function QuestCard({quest}) {

    const [answered, setAnswered] = useState(false)
    
    // aqui deve juntar todas respostas em um array
    const ans = []
    ans.push(quest.correct_answer)
    quest.incorrect_answers.map(a => ans.push(a))

    return (
        <div className="quest-card">
            <div className="info-quest-card">
                <span className="difficulty"> {quest.difficulty}</span>
                {quest.id} <br/><br/> 
                {quest.category} <br/><br/> 
                {quest.question} <br/><br/>
                
            </div>
            
            <RadioGroupComponent answers={ans} answered={answered}/>

        </div> 

    );
}

export default QuestCard;