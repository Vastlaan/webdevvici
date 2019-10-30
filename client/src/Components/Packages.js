import React from 'react';
import { FaChevronCircleRight } from "react-icons/fa";

function Packages({landing}){

	return(
		<div className='packages'>
			<h1 className='packages__header'>{landing.packagesheader}</h1>
			<div className='packages__offert'>
				<div className='packages__offert--starter packages__offert--card'>
					<h3 className='packages__offert--starter-header packages__offert--card-header'>{landing.packagesstarterheader}</h3>
					<div className='packages__offert--card-price'>
						<h6><sup>&euro;</sup> {landing.packagesstarterprice} <sub>{landing.packagesstarterpricesub}</sub></h6>
					</div>
					<ul className='packages__offert--card-list packages__offert--starter-list'>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> {landing.packagesstarterlist1}</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> {landing.packagesstarterlist2}</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> {landing.packagesstarterlist3}</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> {landing.packagesstarterlist4}</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> {landing.packagesstarterlist5}</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> {landing.packagesstarterlist6}</li>
					</ul>
					<a href='/offert#starter' className='packages__offert--card-btn packages__offert--starter-btn'>{landing.packagesstarterbutton}</a>
				</div>
				<div className='packages__offert--pro packages__offert--card'>
					<h3 className='packages__offert--pro-header packages__offert--card-header'>{landing.packagesproheader}</h3>
					<div className='packages__offert--card-price'>
						<h6><sup>&euro;</sup> {landing.packagesproprice} <sub>{landing.packagespropricesub}</sub></h6>
					</div>
					<ul className='packages__offert--card-list packages__offert--pro-list'>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> {landing.packagesprolist1}</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> {landing.packagesprolist2}</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> {landing.packagesprolist3}</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> {landing.packagesprolist4}</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> {landing.packagesprolist5}</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> {landing.packagesprolist6}</li>
					</ul>
					<a href='/offert#pro' className='packages__offert--card-btn packages__offert--pro-btn'>{landing.packagesprobutton}</a>
				</div>
				<div className='packages__offert--advanced packages__offert--card'>
					<h3 className='packages__offert--advanced-header packages__offert--card-header'>{landing.packagesadvancedheader}</h3>
					<div className='packages__offert--card-price'>
						<h6><sup>&euro;</sup> {landing.packagesadvancedprice} <sub>{landing.packagesadvancedpricesub}</sub></h6>
					</div>
					<ul className='packages__offert--card-list packages__offert--advanced-list'>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> {landing.packagesadvancedlist1}</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> {landing.packagesadvancedlist2}</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> {landing.packagesadvancedlist3}</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> {landing.packagesadvancedlist4}</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> {landing.packagesadvancedlist5}</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> {landing.packagesadvancedlist6}</li>
					</ul>
					<a href='/offert#advanced' className='packages__offert--card-btn packages__offert--advanced-btn'>{landing.packagesadvancedbutton}</a>
				</div>
			</div>
		</div>
		)
}

export default Packages