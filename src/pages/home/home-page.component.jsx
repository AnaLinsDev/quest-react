import './home-page.styles.scss';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { addQuant } from '../../redux/quests/quests.actions';

function HomePage({addQuant}) {

  const [isNumber, setIsNumber] = useState(true)

  const handleChange = (event) => {
    const value =  event.target.value 
 
    if (isNaN(value)){
      alert("Verifique se a quantidade contém apenas números !");
      setIsNumber(false);
    }
    
    else{
      setIsNumber(true);
      addQuant(value)
    }
  }

  return (
    <div className="home-page">
      <div className="card">     
            Escolha a quantidade de perguntas de conhecimentos gerais que deseja responder :     
            <br/>
            <div className="home-input">
              <TextField 
              id="standard-basic" 
              onChange= {handleChange}
              defaultValue= '0'
              label="Quantidade" 
              variant="standard" />
            </div>
            {isNumber ? 

            <Link 
            className="positive-button" 
            to={"/confirm"} >
              Vamos lá !
            </Link>

            : ''}
      </div> 
    </div>
  );
}

const mapStateToProps = state => ({
  quant : state.quests.quant
  })

const mapDispatchToProps = dispatch => ({
  addQuant: quant => dispatch(addQuant(quant)) 
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
