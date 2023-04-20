export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		authenticateOrder.run().then(() => getOrders.run())
		showAlert('Authenticated Order ' + ordersTable.triggeredRow.orderId, 'success')
	},
	myFun2: async () => {
		await authenticateOrder.run()
		getOrders.run()
		showAlert('Authenticated Order ' + ordersTable.triggeredRow.orderId, 'success')
	}
}