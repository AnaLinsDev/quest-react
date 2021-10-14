import './radio-group.styles.scss';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function RadioGroupComponent({answers}) {
    
    // aqui deve deixar as respostas aleatorias
    for (var i = 0; i < answers.length ; i++){
        const index = Math.floor(Math.random()*answers.length)
        const random = answers[index]
        answers.splice(index, 1)
        answers.push(random)
    }

    return (
        <div className="radio-group">
            Choose an answer:<br/><br/>
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="answer"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {answers.map( a =>
                        <FormControlLabel 
                        value={a} 
                        control={<Radio />} 
                        label={a}  />
                                            )}

                </RadioGroup>
            </FormControl>
        </div> 

    );
}

export default RadioGroupComponent;