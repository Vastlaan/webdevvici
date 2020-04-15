//About Component on App
export function triggerEffectAbout(){
	const about = document.querySelector('.about__quote')
	const image = document.querySelector('.about__image')
		const list1 = document.querySelector('.about__services--list-1')
		const list2 = document.querySelector('.about__services--list-2')
		const list3 = document.querySelector('.about__services--list-3')

		const aboutBottomBoundry = (about.offsetHeight / 2) + about.offsetTop
		const imageBottomBoundry = (image.offsetHeight / 2) + image.offsetTop
		const list1BottomBoundry = (list1.offsetHeight / 2) + list1.offsetTop
		const list2BottomBoundry = (list2.offsetHeight / 2) + list2.offsetTop
		const list3BottomBoundry = (list3.offsetHeight / 2) + list3.offsetTop

		const enterChangeAt = window.innerHeight + window.pageYOffset


		if(aboutBottomBoundry<=enterChangeAt){
			about.style.opacity="1"
			about.style.transform="translateX(0)"
		}else{
			about.style.opacity="0"
			about.style.transform="translateX(100%)"
		}
		if(imageBottomBoundry<=enterChangeAt){
			image.style.opacity="1"
			image.style.transform="translateX(0)"
		}else{
			image.style.opacity="0"
			image.style.transform="translateX(-100%)"
		}

		if(list1BottomBoundry<=enterChangeAt){
			list1.style.opacity="1"
			list1.style.transform="translateX(0)"
		}else{
			list1.style.opacity="0"
			list1.style.transform="translateX(-100%)"
		}

		if(list2BottomBoundry<=enterChangeAt){
			list2.style.opacity="1"
			list2.style.transform="translateX(0)"
		}else{
			list2.style.opacity="0"
			list2.style.transform="translateX(100%)"
		}

		if(list3BottomBoundry<=enterChangeAt){
			list3.style.opacity="1"
			list3.style.transform="translateX(0)"
		}else{
			list3.style.opacity="0"
			list3.style.transform="translateX(-100%)"
		}
}
//Board Component on Landing
export function triggerEffectBoard(){
	const boardBottomBoundry = document.querySelector('.board').offsetHeight + document.querySelector('.board').offsetTop
	const enterChangeAt = window.innerHeight + window.pageYOffset
	if(boardBottomBoundry<=enterChangeAt){
		document.querySelector('.board__background--color').style.backgroundColor="rgba(2,76,71,.6)"
		document.querySelector('.board__background--img').style.transform="translate(-50%, -50%) scale(1)"
	}else{
		document.querySelector('.board__background--color').style.backgroundColor="rgba(14,29,28,1)"
		document.querySelector('.board__background--img').style.transform="translate(-50%, -50%) scale(1.5)"
	}
}
//Menu Component on App
export function changePositionOnScroll(){
	const menu = document.querySelector('.menu')
	const header = document.querySelector('.header')

	const triggerEffectAt = header.offsetHeight + header.offsetTop 

	if(triggerEffectAt<= window.pageYOffset){
		menu.style.position="fixed"
		menu.style.top="0"
		menu.style.left="0"
		menu.style.backgroundColor="white"
		menu.style.width="100%"
		menu.style.padding=".5rem 2rem"
		menu.style.margin="0"

	}else{
		menu.style.position="static"
		menu.style.top="null"
		menu.style.left="null"
		menu.style.backgroundColor="none"
		menu.style.width="90%"
		menu.style.padding="initial"
		menu.style.margin="2rem auto"
	}
}
//Responsive Component on Landing
export function moveImage(){
	const responsiveBottomBoundry = (document.querySelector('.responsive').offsetHeight / 2) + document.querySelector('.responsive').offsetTop
	const enterAt = window.innerHeight + window.pageYOffset
	if(responsiveBottomBoundry<=enterAt){
		document.querySelector('.responsive__devices--img').style.transform="translateX(0)"
	}else{
		document.querySelector('.responsive__devices--img').style.transform="translateX(100%)"
	}
}
//Services Component on Landing
export async function showServices(){
	const services = document.querySelector('.services')
	const servicesHalfView =  (services.offsetHeight / 2) + services.offsetTop;
	const enterEffectAt = window.innerHeight + window.pageYOffset
	if(enterEffectAt>=servicesHalfView){
		await setTimeout(()=>document.querySelector('.services__web').style.opacity="1",100)
		await setTimeout(()=>document.querySelector('.services__seo').style.opacity="1",300)
		await setTimeout(()=>document.querySelector('.services__marketing').style.opacity="1",500)
	}else{
		document.querySelector('.services__web').style.opacity="0"
		document.querySelector('.services__seo').style.opacity="0"
		document.querySelector('.services__marketing').style.opacity="0"
	}
	
}