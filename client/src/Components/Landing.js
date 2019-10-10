import React from 'react';


import Board from './Board'
import Services from './Services'
import Responsive from './Responsive'
import Packages from './Packages'
import Reviews from './Reviews'


function Landing(){

	return(
		<section className='landing'>
			<Board />
			<Services />
			<Responsive />
			<Packages />
			<Reviews />
			
		</section>
		)
}

export default Landing