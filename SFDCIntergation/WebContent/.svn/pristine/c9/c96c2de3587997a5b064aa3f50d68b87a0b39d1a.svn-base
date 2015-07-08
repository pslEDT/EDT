sap.ui.controller("smpdemo.CaseDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smpdemo.CaseDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smpdemo.CaseDetail
*/
	onBeforeRendering: function() {
		caseTableId = sap.ui.getCore().byId("caseTableId");
		caseDetailViewModel = sap.ui.getCore().getModel("caseDetailViewModel");
		console.log("caseTableId",caseTableId);
		console.log("caseDetailViewModel",caseDetailViewModel);
		caseTableId.setModel(caseDetailViewModel);
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smpdemo.CaseDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smpdemo.CaseDetail
*/
//	onExit: function() {
//
//	}

});