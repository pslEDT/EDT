sap.ui.controller("smpdemo.AccountDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smpdemo.Detail
*/
	onInit: function() {

	},

	onBeforeRendering: function() {
		accountTableId = sap.ui.getCore().byId("accountTableId");
		accountDetailViewModel = sap.ui.getCore().getModel("accountDetailViewModel");
		console.log("accountTableId",accountTableId);
		console.log("accountDetailViewModel",accountDetailViewModel);
		accountTableId.setModel(accountDetailViewModel);
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smpdemo.Detail
*/
	onAfterRendering: function() {
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smpdemo.Detail
*/
//	onExit: function() {
//
//	}
});