import React from 'react'
import {ReactComponent as Rocket} from '../img/rockettest.svg'
import {FaMeteor, FaSpaceShuttle } from "react-icons/fa";
import { GiAbstract065 } from "react-icons/gi";

function Offert(){


	return(
		<section className='offert'>
			<div className='offert__introduction'>
				<h1>Wij bieden een compleet pakket van geïntegreerde services op maat van uw behoeften.</h1>
				<Rocket className='offert__introduction--rocket'/>
			</div>
			<div className='offert__section offert__starter'>
				<h1>Starter</h1>
				
				<div className='offert__section--para'>
					<FaMeteor className='offert__section--para-icon'/>
					<p className='offert__section--para-text'>Wilt u dat uw website uw bedrijf elegant en professioneel presenteert? </p>
					<p className='offert__section--para-text'>
						Dat uw bezoekers duidelijk en makkelijk kunnen ervan weten welke diensten biedt u aan
						en hoe best met u contact opnemen?
					</p>
					<p className='offert__section--para-text'>
						Maar u hoeft geen extra funcionaliteit nodig, zoals online afspraak maken of verkeersanalyse en strategie.
					</p>
					<p className='offert__section--para-text'>
						Dan is onze <span>Starter</span> Pakket misschien iets voor u !
					</p>
				</div>

			</div>
			<div className='offert__section offert__pro'>
				<h1>Pro</h1>
				<div className='offert__section--para'>
					<FaSpaceShuttle className='offert__section--para-icon offert__pro--para-icon'/>
					<p className='offert__section--para-text'>Onze uniciteit en onderscheid ligt in het feit dat we elke klant individueel benaderen.</p>
					<p className='offert__section--para-text'>Het maakt niet uit of u een eenmansbedrijf bent of dat u de ambitie hebt om een lokale tycoon in uw branche te worden.</p>
					<p className='offert__section--para-text'>We hebben voor idereen de juiste oplossing</p>
				</div>
			</div>
			<div className='offert__section offert__advanced'>
				<h1>Advanced</h1>
				<div className='offert__section--para'>
					<GiAbstract065 className='offert__section--para-icon offert__advanced--para-icon'/>
					<p className='offert__section--para-text'>Onze uniciteit en onderscheid ligt in het feit dat we elke klant individueel benaderen.</p>
					<p className='offert__section--para-text'>Het maakt niet uit of u een eenmansbedrijf bent of dat u de ambitie hebt om een lokale tycoon in uw branche te worden.</p>
					<p className='offert__section--para-text'>We hebben voor idereen de juiste oplossing</p>
				</div>
			</div>
		</section>
		)
}

export default Offert