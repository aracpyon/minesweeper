import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from "./board";

class Game extends React.Component{
   constructor(props){
      super(props)
      const board = new Minesweeper.Board();
      this.state = {
         board: board
      }

      this.updateGame = this.updateGame.bind(this);
      

   }

   updateGame(tile, flag){
      if (flag){
         tile.toggleFlag();
      } else {
         tile.explore();
      }

      this.setState({board: this.state.board})
   }

   render(){
      return(
         <>
            <h1>MineSweeper</h1>
            <Board board={this.state.board} updateGame={this.updateGame} />
         </>
      )
   }
}

export default Game;
