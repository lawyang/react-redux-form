import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import SnackList from './components/SnackList/SnackList';


// allowing us to acces our redux state on props
const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      snack: []
    }
  }

  handleAddSnack = () => {
    const action = {type: 'ADD_SNACK', payload: this.state.snack}
    this.props.dispatch(action);
  }

  handleSnackInput = (event) => {
    this.setState({
      snack: event.target.value
    })
  }


  render() {
    console.log(this.state.snack)

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <h1>Add a Snack</h1>
      <input placeholder="Good Snack Only" onChange={ this.handleSnackInput } value={this.state.snack} />
      <button onClick={this.handleAddSnack}> ADDIE A SNACKIE </button>
      
      <SnackList snackList={this.state.snack} />
        
        
        
        
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
