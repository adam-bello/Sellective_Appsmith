export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		try {
			await createAuthenticatorListingNote.run()
			getAuthenticatorListingNotes.run()
			showAlert('Successfull Created!', 'success')
		} catch {
			showAlert('Could not create new Listing Note, please double check the form and try again.', 'error')
		}
	}
}