

import Login from './pages/Login';
import Payment from './pages/Payment';
import Header from './components/Header';

import './App.css';
import React from 'react';
import Welcome from './pages/Welcome';

class App extends React.Component {
  
  constructor() {
    super();
    this.state={
        success : true
    }    
  }  
  
  isValid = () => {
    console.log("Hiii");    
    this.setState({
      success : false
    });
  }


  isValid1 = () => {
    
    this.setState({
      success : true
    });
  }  

  render() {    
    return (
      <div className="App">
        <Header />
        {this.state.success ? 
        <Welcome
          isValid = {this.isValid}
        /> :
        <Payment          
          isValid1 = {this.isValid1}
        />
        }       
      </div>
    );
    
  }
}

export default App;
