import React from 'react';
import Tile from './tile';

class Board extends React.Component{
   constructor(props){
      super(props)

   }

   render() {
      const board = this.props.board;

      const rows = board.grid.map((row, rowIdx) => {
         return (
            <div className="row" key={`row-${rowIdx}`}>
               {this.renderTiles(row, rowIdx)}
            </div>
         )
      })

      return (
         <div className="board">
            {rows}
         </div>
      )
   }

   renderTiles(row, rowIdx){
      return row.map((tile, i) => {
         return <Tile tile={tile} updateGame={this.props.updateGame} key={`tile-${i}`}/>
            
   
      })
      
   }
}

export default Board;