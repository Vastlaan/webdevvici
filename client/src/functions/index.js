export function triggerEffectAbout(){
	const about = document.querySelector('.about__quote')
		const list1 = document.querySelector('.about__services--list-1')
		const list2 = document.querySelector('.about__services--list-2')
		const list3 = document.querySelector('.about__services--list-3')

		const aboutBottomBoundry = (about.offsetHeight / 2) + about.offsetTop
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