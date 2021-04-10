import React from 'react';

class Tile extends React.Component {
   constructor(props){
      super(props)

   }

   render(){
      const tile = this.props.tile;
      
      debugger
      //bombed, explored, flagged
      let klass, text, count;

      if (tile.explored){
         //true
         
         //1. it's a bomb
         if (tile.bombed){
            klass = "bomb"
            text = '💣';

         } else {
            //show number of tiles
            klass = "explored";
            count = tile.adjacentBombCount();
            text = (count > 0 ? `${count}` : "")
            
         }
         
      }else if(tile.flagged){
         //if it's unexplored but flagged
         klass = "flagged";
         text = '🚩';

      } else{
         //unexplored
         klass = "unexplored"
      }
      klass = `tile ${klass}`
      return(
         <>
            <div className={klass}>{text}</div>
         </>
      )
   }
}

export default Tile;