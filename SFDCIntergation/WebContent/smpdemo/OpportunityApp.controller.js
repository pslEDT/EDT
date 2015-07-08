sap.ui.controller("smpdemo.OpportunityApp", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smpdemo.OpportunityApp
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smpdemo.OpportunityApp
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smpdemo.OpportunityApp
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smpdemo.OpportunityApp
*/
//	onExit: function() {
//
//	}
	to : function (pageId, context) {
		var app = this.getView().app;

		// Check whether it page needs to navigated in Master view or Detail View
		var master = ("Master" === pageId);

		//Check whether page is already loaded
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "smpdemo." + pageId,
				type : "JS"
			});
			page.getController().nav = this;
			app.addPage(page, master);
		}

		// show the page
		app.to(pageId);
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},

	/**
	 * Navigates to previous page
	 * @param {string} pageId The id of the prev page
	 */
	back: function (pageId) {
		var app = this.getView().app;
		app.backToPage(pageId);
	},

});