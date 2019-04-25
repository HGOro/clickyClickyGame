import React, { Component } from "react";
import simpsonsCharacters from "./simpsonsData.json"
import './App.css';
//import Navbar from "./components/Navbar/index";

import { CardColumns, Card, Container, Navbar, Jumbotron} from "react-bootstrap";
//import { identifier } from "@babel/types";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      characters: simpsonsCharacters,
      clickCount: 0,
      highScore: 0,
      scoreAlert: "",
      bestScore: "",
      clickScore: ""
    }
  }

  componentWillMount(){
    this.shuffle()
  }

  shuffle = () => {
    const shuffledChar = this.state.characters.sort(()=>{
      return 0.5 - Math.random()
    }) 
    this.setState({
      characters: shuffledChar
    })
  }

  handleCardClick = (event, id)=>{
    const card = event.target.parentElement

    /*
    look through the array of characters
    find the character with the id that equals the id that was clicked on
    check if selected is true or false for that character
    if true, they've already clicked that character
    and we'd need to reset the game

    if false, we need to set selected to true
    click count goes up by 1
    if click count is greater than high score, highscore = click count
    then shuffle cards
    */

    this.state.characters.forEach(character => {
      if (character.id === id){
        
        if (character.selected === false){

          character.selected = true;

          const clicks = this.state.clickCount +1;

          this.setState({
            clickCount: clicks,
            clickScore: "correct",
            scoreAlert: "Woohoo!"
          })

          if(clicks > this.state.highScore){
            this.setState({
              highScore: clicks,
              bestScore: "correct",
              scoreAlert: "Cowabunga! New High Score!"
            })
          } 
          
        } else {
          card.classList.add("wrong")
          this.state.characters.forEach(character =>{
            character.selected = false
          })
          this.setState({
            clickCount: 0,
            clickScore: "incorrect",
            scoreAlert: "Doh!"
          })
        }
      } 
    })
    
    setTimeout(()=>{
      card.classList.remove("wrong")
      this.shuffle()
      this.setState({
        clickScore: "",
        bestScore: "",
        scoreAlert: ""
      })
    }, 1000);
  }

  render(){
    return (
        <div>

          <Navbar className="navbar" fixed="top">
            <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <p className="alertMessage">{this.state.scoreAlert}</p>
                <Navbar.Text>
                  Score: <span className={this.state.clickScore}>{this.state.clickCount}</span>
                </Navbar.Text>
                <Navbar.Text>
                  <span> &nbsp; &nbsp;| &nbsp; &nbsp; </span>
                </Navbar.Text>
                <Navbar.Text>
                  Top Score: <span className={this.state.bestScore}>{this.state.highScore}</span>
                </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>

          <Jumbotron className="jumbotron">
            <h1 className="text-center">Clicky Game!</h1>
            <h4 className="text-center">
              Click on an image to earn points, but don't click on any more than once!
            </h4>
          </Jumbotron>

          <Container >
            <CardColumns>
              {this.state.characters.map(character => (
                <Card className="char-card" key={character.id} onClick={(event)=>this.handleCardClick(event, character.id)}> 
                  <img src={`/assets/img/${character.image}`} alt={character.name} className="character"/>
                </Card>
              ))}
            </CardColumns>
          </Container>

        </div>
      );
  }

}

export default App;