export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		updateAuthenticatorListingNote.run().then(getAuthenticatorListingNotes.run())
	},
	myFun2: async () => {
		await updateAuthenticatorListingNote.run()
		getAuthenticatorListingNotes.run()
	}
}