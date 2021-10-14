import './confirm-page.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';


class ConfirmPage extends React.Component {
    constructor(props){
    super(props)

    this.state = {
        quant : props.match.params.quant,
        path : "/confirm/0"
    }
    }
    
    render() {

        return (
            <div className="card">
                Quantidade de perguntas : {this.state.quant}. <br />
                <br />
                <div className="confirm-page-buttons">
                    <Link className="positive-button" to={"/questions/" + this.state.quant} >Start</Link>
                    <Link className="negative-button" to="/" >Cancel</Link> 
                </div>
            </div> 

        )
    }
}

export default ConfirmPage;