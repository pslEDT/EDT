sap.ui.controller("smpdemo.LeadDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smpdemo.LeadDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smpdemo.LeadDetail
*/
	onBeforeRendering: function() {
		leadTableId = sap.ui.getCore().byId("leadTableId");
		leadDetailViewModel = sap.ui.getCore().getModel("leadDetailViewModel");
		console.log("leadTable",leadTableId);
		console.log("leadDetailViewModel",leadDetailViewModel);
		leadTableId.setModel(leadDetailViewModel);
	
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smpdemo.LeadDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smpdemo.LeadDetail
*/
//	onExit: function() {
//
//	}

});