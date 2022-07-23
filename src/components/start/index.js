import React from 'react';
import { useContext } from 'react';

import { GameContext } from '../../context/GameContext';

import Xicon from '../XO/Xicons';
import Oicon from '../XO/Oiconss';

import "./start.scss"

export const Start = () => {

  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className='start'>
      
      <div className='card shadow-gray' >
          <h1 className='text-lg'>Pick your mark</h1>
          <div className='start__players'>
            <span className={activeUser === 'x' ? 'start__players--active' : ""}
              onClick={() => setActiveUser('x')}
                >
              <Xicon color={activeUser === 'x' ? 'dark' : 'light'}/>
            </span>
            <span className={activeUser === 'o' ? 'start__players--active' : ''} onClick={() => setActiveUser('o')}>
              <Oicon color={activeUser === 'o' ? 'dark' : 'light'}/>
            </span>
          </div>
            <p className='text-light text-normal'>X goes first!</p>
      </div>
        <div className='start__btns'>
          <button className='btn btn-yellow' onClick={() => handleStart('cpu')}>
            New game vs <br/> CPU
          </button>
          <button className='btn btn-blue' onClick={() => handleStart('user')}>
            
            New game vs PLAYER
          </button>
        </div>  

    </div>
  );
};
export default Start;