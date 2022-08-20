import React from 'react'
import rock from '../components/images/rock.png';
import paper from '../components/images/paper.png';
import scissors from '../components/images/scissors.png';

export default function Header() {
  return (
    <div className='Header'>
      <h1> ROCK, PAPER OR SCISSORS </h1>
      <div className='View'>
        <img src={rock} alt="rock" width={100} />
        <img src={paper} alt="paper" width={100} />
        <img src={scissors} alt="scissors" width={100} />
      </div>
    </div>
  )
}
