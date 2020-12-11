import React from 'react';
import topStyle from './style/Header.module.css';
import {BsPersonFill} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi'


const Header = () => {
  return(
    <div>
    <div id={topStyle.body}>
      <div className={topStyle.blue}>
       <img src="/static/img/skysporttrans.svg" className={topStyle.blueImg} alt="transparent logo"/>
      </div>
      <div className={topStyle.red}>
        <div className={topStyle.content}>
        <p>Get Sky Sport</p>
        <p><BsPersonFill /> Login</p>
        <input type="text" placeholder="Search Sky Sport" />
        <span><BiSearch/></span>
        </div>
      </div>
      </div>
      <div className={topStyle.subHead}>
        <ul>
        <li>Home</li>
        <li>Sport</li>
        <li>Scores</li>
        <li>Videos</li>
        <li>TV</li>
        <li>Sky Bet</li>
        <li>Games</li>
        <li>More</li>
        </ul>
        <button>Watch Sky Sports</button>
      </div>
      

    </div>
  )
}
export default Header