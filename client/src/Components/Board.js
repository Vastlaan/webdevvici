import React, {useEffect} from 'react';
import BoardBackground from '../img/board_background.png'
import {triggerEffectBoard} from '../functions'

function Board(){

	
	useEffect(()=>{
		window.addEventListener("scroll", triggerEffectBoard);
	    return () => {
	      window.removeEventListener("scroll", triggerEffectBoard);
	    };
	},[])

	return(
		<div className='board'>
			<div className='board__background'>
				<img className='board__background--img' src={BoardBackground} alt='guy behind laptop' />
				<div className='board__background--color'></div>
			</div>
			<h1 className='board__header'>Wij creëren uw online merk</h1>
			<p className='board__para'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<p className='board__para'>
				Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

		</div>
		)
}

export default Board;