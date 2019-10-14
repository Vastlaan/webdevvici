import React, {useEffect, useState} from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Office from '../img/office.png'

function Reviews(){

	const [currentView, setCurrentView] = useState(1)

	const moveQuotes = () =>{

		const quote1 = document.querySelector('.reviews__quotes--quote-1')
		const quote2 = document.querySelector('.reviews__quotes--quote-2')
		const quote3 = document.querySelector('.reviews__quotes--quote-3')

		if(currentView===1){
			quote1.style.opacity=1
			quote1.style.transform="translateX(0)"
			quote2.style.opacity=0
			quote2.style.transform="translateX(100%)"
			quote3.style.opacity=0
			quote3.style.transform="translateX(100%)"
			setCurrentView(2)
		}
		if(currentView===2){
			quote2.style.opacity=1
			quote2.style.transform="translateX(0)"
			quote1.style.opacity=0
			quote1.style.transform="translateX(100%)"
			quote3.style.opacity=0
			quote3.style.transform="translateX(100%)"
			setCurrentView(3)
		}
		if(currentView===3){
			quote3.style.opacity=1
			quote3.style.transform="translateX(0)"
			quote1.style.opacity=0
			quote1.style.transform="translateX(100%)"
			quote2.style.opacity=0
			quote2.style.transform="translateX(100%)"
			setCurrentView(1)
		}

	}
	useEffect(()=>{
		//set Interval to move quotes
		const quotesSlide = setInterval(moveQuotes,5000)
		
		//function to display or not background for reviews
		const displayBackground = () =>{
			//declare and calculate values needed to display background
			const reviewsBegin = document.querySelector('.reviews').offsetTop
			const reviewsEnd = document.querySelector('.reviews').offsetTop + document.querySelector('.reviews').offsetHeight
			const reviewsEndPlusWindowHeight = reviewsEnd + window.innerHeight
			const currentBottomEdge = window.innerHeight + window.pageYOffset

			if((currentBottomEdge > reviewsBegin) && (currentBottomEdge< reviewsEndPlusWindowHeight)){			
				document.querySelector('.reviews__background').style.display="block"
			}else{
				document.querySelector('.reviews__background').style.display="none"
			}
		}
		//use function
		window.addEventListener("scroll",displayBackground, { capture: false, passive: true})
		//clear interval when unmount
		return ()=>{
			clearInterval(quotesSlide)
			window.removeEventListener("scroll", displayBackground)

		}
	})

	

	return(
		<div className='reviews'>
			<div className='reviews__background'>
				<img src={Office} alt='office' />
			</div>
			<h1 className='reviews__header'>Klantwaardering</h1>
			<div className='reviews__quotes'>
				<div className='reviews__quotes--quote reviews__quotes--quote-1 '>
					<p className='reviews__quotes--quote-left'><FaQuoteLeft/></p>
					<p className='reviews__quotes--quote-text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='reviews__quotes--quote-right'><FaQuoteRight/></p>
				</div>
				<div className='reviews__quotes--quote reviews__quotes--quote-2 '>
					<p className='reviews__quotes--quote-left'><FaQuoteLeft/></p>
					<p className='reviews__quotes--quote-text'>
						Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<p className='reviews__quotes--quote-right'><FaQuoteRight/></p>
				</div>
				<div className='reviews__quotes--quote reviews__quotes--quote-3 '>
					<p className='reviews__quotes--quote-left'><FaQuoteLeft/></p>
					<p className='reviews__quotes--quote-text'>
						Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='reviews__quotes--quote-right'><FaQuoteRight/></p>
				</div>
			</div>
		</div>
		)
}

export default Reviews