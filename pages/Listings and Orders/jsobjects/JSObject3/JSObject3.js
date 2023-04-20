export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
		try {
			await newListing.run();
			await getListings.run();
		} catch {
			showAlert('Failed to make listing, check your submission fields','error')
		}
	}
}