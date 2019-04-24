import React, { Component } from "react";
import simpsonsCharacters from "./simpsonsData.json"
//import './App.css';
import ImgBtnWrapper from './components/ImgBtnWrapper/ImgBtnWrapper'
import { CardColumns, Card, Container, Navbar } from "react-bootstrap"
import { identifier } from "@babel/types";

class App extends React.Component {

  state = {
    score: 0,
  }

  handleClick = (id) => {
    console.log('hello i got clicked')
    console.log(id)

    this.setState({...this.state, currentId: id})
    //this.setState((prevstate, props)=>{})
  }
    render() {
      console.log(this.state)
      return(
        <ImgBtnWrapper clickHandler={this.handleClick}/>
      )
    }
}

//class App extends Component {
//  constructor(props){
//    super(props)
//    this.state = {
//      characters: simpsonsCharacters,
//      clickCount: 0,
//      highScore: 0
//    }
//  }
//
//  handleCardClick = (event, id)=>{
//    console.log(event)
//    console.log(id)
//  }
//
//  render(){
//    return (
//        <div>
//          <Navbar />
//          <Container >
//            <CardColumns>
//              {this.state.characters.map(character => (
//                <Card className="card" key={character.id} onClick={(event)=>this.handleCardClick(event, character.id)}> 
//                  <img src={`/assets/img/${character.image}`} alt={character.name} className="character"/>
//                </Card>
//              ))}
//            </CardColumns>
//          </Container>
//        </div>
//      );
//  }
//
//}
//
export default App;
//