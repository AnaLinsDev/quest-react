import './questions-page.styles.scss';
import React, { Component } from 'react';
import QuestCard from '../../components/quest-card/quest-card.component';

//redux
import { connect } from 'react-redux';
import { addQuests } from '../../redux/quests/quests.actions';



class QuestionsPage extends Component{
  constructor(props){
    super(props)
}
  componentDidMount(){

    const {quant} = this.props
    const {addQuests} = this.props

    fetch(`https://opentdb.com/api.php?amount=${quant}`, 
    { method: 'GET' })
    .then (res => res.json() )
    .then (out => {
        addQuests(out.results)
    })
    .catch(err => { throw  err })

  }

  render(){

    const {questsList} = this.props

    return (
      <div className="questions-page">
        {
          questsList.map( q => <QuestCard key={q.id} quest={q}/>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quant : state.quests.quant,
  questsList : state.quests.questsList
  })

const mapDispatchToProps = dispatch => ({
  addQuests: quests => dispatch(addQuests(quests)) 
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
