export const displayContactFormConfirmation = (store) =>{
	const displayContactFormConfirmation = !store.state.displayContactFormConfirmation
	return store.setState({displayContactFormConfirmation})
}
export const displayAlert = (store) =>{
	const displayAlert =true
	return store.setState({displayAlert})
}
export const hideAlert = (store) =>{
	const displayAlert =false
	return store.setState({displayAlert})
}
export const sendManagerForm =(store)=>{
	const sendManagerForm=true
	return store.setState({sendManagerForm})
}

export const setAlertMessage =(store)=>{
	const setAlertMessage="Wait"
	return store.setState({setAlertMessage})
}
export const setAlertComplete =(store)=>{
	const setAlertMessage="Complete"
	return store.setState({setAlertMessage})
}
export const setAlertBefore =(store)=>{
	const setAlertMessage="Before"
	return store.setState({setAlertMessage})
}