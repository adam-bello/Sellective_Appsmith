export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		deleteNote.run().then(() => getAuthenticatorListingNotes.run())
	},
	myFun2: async () => {
		await deleteNote.run()
		getAuthenticatorListingNotes.run()
	}
}