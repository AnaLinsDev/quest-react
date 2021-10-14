import './confirm-page.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';


class ConfirmPage extends React.Component {
    constructor(props){
    super(props)

    }
    
    render() {

        const { quant } = this.props

        return (
            <div className="card">
                Quantidade de perguntas : {quant}. <br />
                <br />
                <div className="confirm-page-buttons">
                    <Link className="positive-button" to={"/questions"} >Start</Link>
                    <Link className="negative-button" to="/quest-react" >Cancel</Link> 
                </div>
            </div> 

        )
    }
}

const mapStateToProps = state => ({
    quant : state.quests.quant
    })

  export default connect(mapStateToProps)(ConfirmPage)
  