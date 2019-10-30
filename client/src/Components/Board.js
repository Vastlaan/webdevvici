import React, {useEffect} from 'react';
import BoardBackground from '../img/board_background.png'
import {triggerEffectBoard} from '../functions'

function Board({landing}){

	
	useEffect(()=>{
		window.addEventListener("scroll", triggerEffectBoard, { capture: false, passive: true});
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
			<h1 className='board__header'>{landing.boardheader}</h1>
			<p className='board__para'>
				{landing.boardpara1}
			</p>
			<p className='board__para'>
				{landing.boardpara2}
			</p>

		</div>
		)
}

export default Board;