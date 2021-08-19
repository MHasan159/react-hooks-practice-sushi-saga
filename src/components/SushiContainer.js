import React from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({allSushis, forwardSushi, eatSushi}){
  return(
    <div className="belt">
      
      {allSushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>
      ))}
      <MoreButton moreSushi = {forwardSushi} />
    </div>
  );
}

export default SushiContainer;