export const displayContactFormConfirmation = (store) =>{
	const displayContactFormConfirmation = !store.state.displayContactFormConfirmation
	return store.setState({displayContactFormConfirmation})
}