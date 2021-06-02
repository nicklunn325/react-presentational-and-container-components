import './App.css';
import React from 'react'
import NavBar from './NavBar.js'
import Home from './Home.js'
import MooviesContainer from './MooviesContainer.js'
class App extends React.Component{
  
  state={display:"home"}

  renderComponent = () => {
    switch(this.state.display){
      case "home":
        return <Home/>
      case "moovies":
        return <MooviesContainer/>
      default:
        break;
    }
  }

  onClick = (e) => {
    this.setState(prevState => ({
      display: "home"
    }))
  }

  render(){
    return (
      <div className="App">
        <NavBar onClick={this.onClick} />
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;
