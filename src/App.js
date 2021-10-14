import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/home/home-page.component';
import QuestionsPage from './pages/questions/questions-page.component';
import ReportPage from './pages/report/report-page.component';
import ErrorPage from './pages/error/error-page.component';
import ConfirmPage from './pages/confirm/confirm-page.component';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Router>
      <Switch>
          <Route path='/quest-react'        component={HomePage} />
          <Route path='/confirm'            component={ConfirmPage}/>
          <Route path='/questions'          component={QuestionsPage} />
          <Route path='/report'             component={ReportPage} />
          <Route component={ErrorPage}  />
      </Switch>
      </Router>
    </div>
    )
  }
}

export default App;
