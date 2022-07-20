import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Xicon from '../icons/Xicons';
import Oicon from '../icons/Oicon';

export const Start = () => {

  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className='start'>
      <div className='start-header'>
        <Xicon/>
        <Oicon/>
      </div>
      <div className='card shadow-gray' >
          <h1 className='text-lg'>Pick player 1'st mark</h1>
          <div className='start__player'>
            <span className={activeUser === 'x' ? 'start__player--active' : ''} onClick={() => setActiveUser('x')}>
              <Xicon color={activeUser === 'x' ? 'dark' : 'light'}/>
            </span>
            <span className={activeUser === 'o' ? 'start__player--active' : ''} onClick={() => setActiveUser('o')}>
              <Xicon color={activeUser === 'o' ? 'dark' : 'light'}/>
            </span>
          </div>
            <p className='text-light text-normal'>remember: x goes first</p>
      </div>
        <div className='start__btns'>
          <button className='btn btn-yellow' onClick={() => handleStart('cpu')}>
            new game vs CPU
          </button>
          <button className='btn btn-blue' onClick={() => handleStart('user')}>
            {" "}
            new game vs player
          </button>
        </div>  

    </div>
  );
};
export default Start;