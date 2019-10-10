import React from 'react'

function Menu() {

	return(
		<nav className="menu">
			<div className="menu__item" onClick={()=>window.location.href='/'}>Home</div>
			<div className="menu__item" onClick={()=>window.location.href='/about'}>Over Ons</div>
			<div className="menu__item" onClick={()=>window.location.href='/offert'}>Aanbieding</div>
			<div className="menu__item" onClick={()=>window.location.href='/clients'}>Klanten</div>
			<div className="menu__item" onClick={()=>document.querySelector('.footer').scrollIntoView({behavior:'smooth'})}>Contact</div>
		</nav>
	)
}

export default Menu