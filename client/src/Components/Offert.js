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
			<div className='offert__short'>
				<p className='offert__short--para'>Onze uniciteit en onderscheid ligt in het feit dat we elke klant individueel benaderen.</p>
				<p className='offert__short--para'>Bent u een eenmansbedrijf die ambitie hebt om een lokale tycoon in uw branche te worden?</p>
				<p className='offert__short--para'>We hebben voor idereen de juiste oplossing !</p>
			</div>
			<div className='offert__section offert__starter' id='starter'>
				<h1>Starter</h1>
				
				<div className='offert__section--para'>
					<FaMeteor className='offert__section--para-icon'/>
					<p className='offert__section--para-text'>Wilt u dat uw website uw bedrijf elegant en professioneel presenteert? </p>
					<p className='offert__section--para-text'>
						Dat uw bezoekers duidelijk en makkelijk kunnen ervan weten welke diensten biedt u aan
						en hoe best met u contact opnemen?
					</p>
					<p className='offert__section--para-text'>
						Maar u hebt geen extra funcionaliteit nodig, zoals online afspraak maken, eigen email adres of verkeersanalyse en strategie.
					</p>
					<p className='offert__section--para-text'>
						Dan is onze <span>Starter</span> Pakket misschien iets voor u !
					</p>
				</div>

				
				<div className='offert__section--price'>
					<p className='offert__section--price-left'>voor slechts</p>
					<h3 className='primary'>12 <sup>&euro;</sup></h3>
					<p className='offert__section--price-right'>per maand</p>
				</div>

				<div className='offert__section--description primary'>
					<h3 className='primary'>Wat krijgt u?</h3>
					<p className='offert__section--description-left  b-primary'>Domain naam</p>
					<p className='offert__section--description-right'>
						U kunt kiezen uit .nl .com .org en meer. 
						Als domeinnaam is niet bezet valt het onder standaard abonnament kosten. 
					</p>
					<p className='offert__section--description-left b-primary'>Hosting</p>
					<p className='offert__section--description-right'>
						Uw website heeft een server nodig om op te "leven". Onze kwaliteit servers zijn snel en betrauwbaar.
					</p>
					<p className='offert__section--description-left b-primary'>Custom Design</p>
					<p className='offert__section--description-right'>
						Wij maken uw website volgens uw bedrijfs design. 
						Wij benaderen onze klanten individueel en maken unique websites volgens door u gekozen stijl.
					</p>
					<p className='offert__section--description-left b-primary'>tot 3 paginas Website</p>
					<p className='offert__section--description-right'>
						Naast uw main web pagina heeft u nog mogelijkheid om twee andere onderdelen.
						Tot 15 paragrafen per pagina.
						Misschien Contact, Prijzen of Services?
						Heeft u meer nodig? Kies onze PRO of ADVANCED pakket.
					</p>
					<p className='offert__section--description-left b-primary'>Gratis text wijzigingen</p>
					<p className='offert__section--description-right'>
						Voor dit pakket geld gratis inhoud wijzigingen tot 10 paragrafen per jaar. Wilt u unlimited wijzigingen? Kies onze PRO of ADVANCED pakket.
					</p>
				</div>

			</div>
			<div className='offert__section offert__pro' id='pro'>
				<h1>Pro</h1>
				<div className='offert__section--para'>
					<FaSpaceShuttle className='offert__section--para-icon offert__pro--para-icon'/>
					<p className='offert__section--para-text'>Bent u een eenmansbedrijf, freelancer of heeft u een kleine zaak?</p>
					<p className='offert__section--para-text'>Wilt u dat uw website zich scherp en professioneel presenteert?</p>
					<p className='offert__section--para-text'>Wilt u dat uw website uw bedrijf ook verkoop?</p>
					<p className='offert__section--para-text'>Wij maken uw website online zichtbaar, zodat uw hudige en potentiële klanten kunnen uw bedrijf makkelijk vinden.</p>
				</div>
				<div className='offert__section--price'>
					<p className='offert__section--price-left'>voor slechts</p>
					<h3 className='secondary'>19 <sup>&euro;</sup></h3>
					<p className='offert__section--price-right'>per maand</p>
				</div>
				<div className='offert__section--description secondary'>
					<h3 className='secondary'>Wat krijgt u?</h3>
					<p className='offert__section--description-left  b-secondary'>Domain naam</p>
					<p className='offert__section--description-right'>
						U kunt kiezen uit .nl .com .org en meer. 
						Als domeinnaam is niet bezet valt het onder standaard abonnament kosten. 
						Wilt u bestaande domeinnaam kopen? 
						Dan moet u rekening houden met extra kosten.
					</p>
					<p className='offert__section--description-left b-secondary'>Hosting & Database</p>
					<p className='offert__section--description-right'>
						Uw website heeft een server nodig om op te "leven". Onze kwaliteit servers zijn snel en betrauwbaar.
						Om uw bezoekers beter ervaring te bieden hebt uw website meer functionaliteit nodig. 
						Bijvoorbeeld online afspraak maken! Of aanbieden de inhoud die aangepast aan de voorkeuren van bezoekers is.
						Daarvoor heeft uw website ook een database nodig.
					</p>
					<p className='offert__section--description-left b-secondary'>Custom Design</p>
					<p className='offert__section--description-right'>
						Wij maken uw website volgens uw bedrijfs design. 
						Wij benaderen onze klanten individueel en maken unique websites volgens door u gekozen stijl.
					</p>
					<p className='offert__section--description-left b-secondary'>tot 5 paginas Website</p>
					<p className='offert__section--description-right'>
						Naast uw main web pagina heeft u nog mogelijkheid om vier andere onderdelen.
						Tot 20 paragrafen per pagina.
						Misschien Contact, Prijzen of Services?
						Heeft u meer nodig? Kies onze ADVANCED pakket.
					</p>
					<p className='offert__section--description-left b-secondary'>Gratis text wijzigingen</p>
					<p className='offert__section--description-right'>
						Voor dit pakket geld gratis unlimited text inhoud wijzigingen.
						Dankzij ons geautomatiseerde updateproces kunt u de inhoud van uw site regelmatig bijwerken.
					</p>
					<p className='offert__section--description-left b-secondary'>Contact formulier</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='offert__section--description-left b-secondary'>Analyse en Strategie</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='offert__section--description-left b-secondary'>Google bedrijsprofiel</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>

				</div>
			</div>
			<div className='offert__section offert__advanced' id='advanced'>
				<h1>Advanced</h1>
				<div className='offert__section--para'>
					<GiAbstract065 className='offert__section--para-icon offert__advanced--para-icon'/>
					<p className='offert__section--para-text'>Onze uniciteit en onderscheid ligt in het feit dat we elke klant individueel benaderen.</p>
					<p className='offert__section--para-text'>Het maakt niet uit of u een eenmansbedrijf bent of dat u de ambitie hebt om een lokale tycoon in uw branche te worden.</p>
					<p className='offert__section--para-text'>We hebben voor idereen de juiste oplossing</p>
				</div>
				<div className='offert__section--price'>
					<p className='offert__section--price-left'>voor slechts</p>
					<h3 className='tertiary'>29 <sup>&euro;</sup></h3>
					<p className='offert__section--price-right'>per maand</p>
				</div>
				<div className='offert__section--description tertiary'>
					<h3 className='tertiary'>Wat krijgt u?</h3>
					<p className='offert__section--description-left  b-tertiary'>Domain naam</p>
					<p className='offert__section--description-right'>
						U kunt kiezen uit .nl .com .org en meer. 
						Als domeinnaam is niet bezet valt het onder standaard abonnament kosten. 
						Wilt u bestaande domeinnaam kopen? 
						Dan moet u rekening houden met extra kosten.
					</p>
					<p className='offert__section--description-left b-tertiary'>Hosting & Database</p>
					<p className='offert__section--description-right'>
						Uw website heeft een server nodig om op te "leven". Onze kwaliteit servers zijn snel en betrauwbaar.
						Om uw bezoekers beter ervaring te bieden hebt uw website meer functionaliteit nodig. 
						Bijvoorbeeld online afspraak maken! Of aanbieden de inhoud die aangepast aan de voorkeuren van bezoekers is.
						Daarvoor heeft uw website ook een database nodig.
					</p>
					<p className='offert__section--description-left b-tertiary'>Custom Design</p>
					<p className='offert__section--description-right'>
						Wij maken uw website volgens uw bedrijfs design. 
						Wij benaderen onze klanten individueel en maken unique websites volgens door u gekozen stijl.
					</p>
					<p className='offert__section--description-left b-tertiary'>tot 10 paginas Website</p>
					<p className='offert__section--description-right'>
						Naast uw main web pagina heeft u nog mogelijkheid om vier andere onderdelen.
						Tot 30 paragrafen per pagina.
					</p>
					<p className='offert__section--description-left b-tertiary'>Gratis text wijzigingen</p>
					<p className='offert__section--description-right'>
						Voor dit pakket geld gratis unlimited text inhoud wijzigingen.
						Dankzij ons geautomatiseerde updateproces kunt u de inhoud van uw site regelmatig bijwerken.
					</p>
					<p className='offert__section--description-left b-tertiary'>Eigen email</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='offert__section--description-left b-tertiary'>Contact formulier</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='offert__section--description-left b-tertiary'>Analyse en Strategie</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='offert__section--description-left b-tertiary'>Google bedrijsprofiel</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='offert__section--description-left b-tertiary'>Support</p>
					<p className='offert__section--description-right'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		</section>
		)
}

export default Offert