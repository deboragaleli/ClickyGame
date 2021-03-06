import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Panel from "./components/Panel";
import cards from "./cards.json";



class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! Try again. \nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  // bsStyle="warning">
  // <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  // good.
 

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          return this.gameOver();
        }
      }

      return false;
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>ClickyGame <small>Marvel Edition</small></Header>
        <Panel />
        {this.state.cards.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;