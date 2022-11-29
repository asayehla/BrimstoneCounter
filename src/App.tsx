import React, { useState } from 'react'
import { useAppDispatch, useAppSelector  } from './app/hooks'
import { amountAdded, amountReduced, resetMoneyState } from './counter/moneycounter-slice'
import './App.css'
import sheriffbadge from '../src/assets/sheriff.svg';
import crystal from '../src/assets/Crystal.svg';
import { addAmount, levelUp, resetLevelState } from './counter/xpcounter-slice';

export const saveXPToLocalStorage = (XP: number): void => {
  const xpstring= XP.toString();
  try {
    localStorage.setItem('XP', xpstring);
  } catch (e) {
    console.warn(e);
  }
};

export const saveMoneyToLocalStorage = (money: number): void => {
  const moneystring= money.toString();
  try {
    localStorage.setItem('Money', moneystring);
  } catch (e) {
    console.warn(e);
  }
};

function App() {
  const moneycount = useAppSelector((state) => state.moneyCounter.value);
  const dispatch = useAppDispatch();  
  const xpCounter = useAppSelector((state) => state.xpcounter.value)
  const [ toogle, setToggle ] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }
  
  function handlelevelup() {
    dispatch(levelUp(500))
  }


  function handleresetxp() {
    resetLevelState();
    saveXPToLocalStorage(0);
  }

  function handleresetm() {
    saveMoneyToLocalStorage(0);
    resetMoneyState();
  }

  function saveTheXP(value: number) {
    dispatch(addAmount(value));
    saveXPToLocalStorage(xpCounter + value);
  }

function handleMoney(value: number) {
  if(!toogle) {
    dispatch(amountAdded(value));
    saveMoneyToLocalStorage(moneycount + value)
  } else {
    dispatch(amountReduced(value))
    saveMoneyToLocalStorage(moneycount - value)
  }  
}

  return (
    <div className="App">
        <div className="grid">
     {/*  <button onClick={handleresetm}>reset $</button>
          <button onClick={handleresetxp}>reset xp</button> */}
          <img src={crystal} className="darkstone" alt="darkstone" />
          <img src={sheriffbadge} className="lvlup" alt="Level up" onClick={handlelevelup} />
          <span className="sob">Shadows of Brimstone</span>
        </div>
        <div className="wrapper-up">
        <div className="total-xp">{xpCounter} XP</div>
        <div className="xp-history"></div>
        <div className="three-grid">
          <button
            className="xpbutton"
            onClick={() => saveTheXP(5)}>
            5
          </button>
          <button
            className="xpbutton"
            onClick={() => saveTheXP(10)}>
            10
          </button>
          <button
            className="xpbutton"
            onClick={() => saveTheXP(20)}>
            20
          </button>
          <button
            className="xpbutton"
            onClick={() => saveTheXP(25)}>
            25
          </button>
          <button
            className="xpbutton"
            onClick={() => saveTheXP(50)}>
            50
          </button>
          <button 
          className="xpbutton"
          onClick={() => dispatch(levelUp(10))}
          >-10</button>
        {/*   <input className="inputxp">
          </input> */}
        </div>
        <div className="money-history"> </div>
        <div className="between-wrapper">
        <div className="toogle">
          <button className={toogle ? 'on' : 'off'}  onClick={handleToggle}>
            <span className="pin" />
          </button>
        </div>
        <div className="total-money-wrap">
          <span>{moneycount} $</span>
        </div>
        </div>
        <div className="three-grid">

        <div className="money">
          <button className="round" type="button" onClick={() => handleMoney(5)}
          >
            5
          </button>
        </div>
        <div className="money">
          <button
            className="round"
            type="button"
            onClick={() => handleMoney(10)}
          >
            10
          </button>
        </div>
        <div className="money">
          <button
            className="round"
            type="button"
            onClick={() => handleMoney(25)}
          >
            25
          </button>
        </div>
        <div className="money">
          <button
            className="round"
            type="button"
            onClick={() => handleMoney(50)}
          >
            50
          </button>
        </div>
        <div className="money">
          <button
            className="round"
            type="button"
            onClick={() => handleMoney(100)}
          >
            100
          </button>
        </div>
        {/* <div className="money">
          <input
            className="round"
          >
          </input>
        </div> */}
        </div>
        </div>
    </div>
  );
}

export default App
