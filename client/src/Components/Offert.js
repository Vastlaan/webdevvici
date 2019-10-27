import React, {useState, useEffect} from 'react'
import {ReactComponent as Rocket} from '../img/rockettest.svg'
import {FaMeteor, FaSpaceShuttle } from "react-icons/fa";
import { GiAbstract065 } from "react-icons/gi";


function Offert(){

	const [data, setData] = useState({})

	useEffect(()=>{

		fetch('/getOffert').then(res=>res.json()).then(data=>{
			setData(data)
		})

	},[])

	return(
		<section className='offert'>
			<div className='offert__introduction'>
				<h1>{data.introductionheader}</h1>
				<Rocket className='offert__introduction--rocket'/>
			</div>
			<div className='offert__short'>
				<p className='offert__short--para'>{data.shortpara1}</p>
				<p className='offert__short--para'>{data.shortpara2}</p>
				<p className='offert__short--para'>{data.shortpara3}</p>
			</div>
			<div className='offert__section offert__starter' id='starter'>
				<h1>{data.starterheader}</h1>
				
				<div className='offert__section--para'>
					<FaMeteor className='offert__section--para-icon'/>
					<p className='offert__section--para-text'>{data.starterparatext1}</p>
					<p className='offert__section--para-text'>
						{data.starterparatext2}
					</p>
					<p className='offert__section--para-text'>
						{data.starterparatext3}
					</p>
					<p className='offert__section--para-text'>
						{data.starterparatext41}<span>{data.starterheader}</span> {data.starterparatext42}
					</p>
				</div>

				
				<div className='offert__section--price'>
					<p className='offert__section--price-left'>{data.starterpriceleft}</p>
					<h3 className='primary'>{data.starterprice} <sup>&euro;</sup></h3>
					<p className='offert__section--price-right'>{data.starterpriceright}</p>
				</div>

				<div className='offert__section--description primary'>
					<h3 className='primary'>{data.starterdescriptionheader}</h3>
					<p className='offert__section--description-left  b-primary'>{data.starterdescriptiondnl}</p>
					<p className='offert__section--description-right'>
						{data.starterdescriptiondnr} 
					</p>
					<p className='offert__section--description-left b-primary'>{data.starterdescriptionhl}</p>
					<p className='offert__section--description-right'>
						{data.starterdescriptionhr}
					</p>
					<p className='offert__section--description-left b-primary'>{data.starterdescriptioncdl}</p>
					<p className='offert__section--description-right'>
						{data.starterdescriptioncdr}
					</p>
					<p className='offert__section--description-left b-primary'>{data.starterdescriptionpwl}</p>
					<p className='offert__section--description-right'>
						{data.starterdescriptionpwr}
					</p>
					<p className='offert__section--description-left b-primary'>{data.starterdescriptiongtwl}</p>
					<p className='offert__section--description-right'>
						{data.starterdescriptiongtwr}
					</p>
				</div>

			</div>
			<div className='offert__section offert__pro' id='pro'>
				<h1>{data.proheader}</h1>
				<div className='offert__section--para'>
					<FaSpaceShuttle className='offert__section--para-icon offert__pro--para-icon'/>
					<p className='offert__section--para-text'>{data.proparatext1}</p>
					<p className='offert__section--para-text'>{data.proparatext2}</p>
					<p className='offert__section--para-text'>{data.proparatext3}</p>
					<p className='offert__section--para-text'>{data.proparatext4}</p>
				</div>
				<div className='offert__section--price'>
					<p className='offert__section--price-left'>{data.propriceleft}</p>
					<h3 className='secondary'>{data.proprice} <sup>&euro;</sup></h3>
					<p className='offert__section--price-right'>{data.propriceright}</p>
				</div>
				<div className='offert__section--description secondary'>
					<h3 className='secondary'>{data.prodescriptionheader}</h3>
					<p className='offert__section--description-left  b-secondary'>{data.prodescriptiondnl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptiondnr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptionhl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptionhr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptioncdl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptioncdr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptionpwl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptionpwr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptiongtwl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptiongtwr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptioncfl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptioncfr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptionasl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptionasr}
					</p>
					<p className='offert__section--description-left b-secondary'>{data.prodescriptiongbpl}</p>
					<p className='offert__section--description-right'>
						{data.prodescriptiongbpr}
					</p>
				</div>
			</div>
			<div className='offert__section offert__advanced' id='advanced'>
				<h1>{data.advancedheader}</h1>
				<div className='offert__section--para'>
					<GiAbstract065 className='offert__section--para-icon offert__advanced--para-icon'/>
					<p className='offert__section--para-text'>{data.advancedparatext1}</p>
					<p className='offert__section--para-text'>{data.advancedparatext2}</p>
					<p className='offert__section--para-text'>{data.advancedparatext3}</p>
					<p className='offert__section--para-text'>{data.advancedparatext4}</p>
				</div>
				<div className='offert__section--price'>
					<p className='offert__section--price-left'>{data.advancedpriceleft}</p>
					<h3 className='tertiary'>{data.advancedprice} <sup>&euro;</sup></h3>
					<p className='offert__section--price-right'>{data.advancedpriceright}</p>
				</div>
				<div className='offert__section--description tertiary'>
					<h3 className='tertiary'>{data.advanceddescriptionheader}</h3>
					<p className='offert__section--description-left  b-tertiary'>{data.advanceddescriptiondnl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptiondnr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptionhl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptionhr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptioncdl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptioncdr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptionpwl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptionpwr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptiongtwl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptiongtwr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptioneel}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptioneer}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptioncfl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptioncfr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptionasl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptionasr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptiongbpl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptiongbpr}
					</p>
					<p className='offert__section--description-left b-tertiary'>{data.advanceddescriptionsl}</p>
					<p className='offert__section--description-right'>
						{data.advanceddescriptionsr}
					</p>
				</div>
			</div>
		</section>
		)
}

export default Offert