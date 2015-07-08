sap.ui.jsview("smpdemo.CaseMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.CaseMaster
	*/ 
	getControllerName : function() {
		return "smpdemo.CaseMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.CaseMaster
	*/ 
	createContent : function(oController) {

		// Search Bar
		var search = new sap.m.Bar({
			contentMiddle : [ new sap.m.SearchField("caseSearch", {
				search : [ oController.handleCustomerSearch, oController ]
			}) ]
		});

		// create a List control
		var list = new sap.m.List("caseListItems");

		// bind the List items to the data collection
		list.bindItems({
			path : "/listviews/", // Aggregation list Binding
			template : new sap.m.ObjectListItem({
				title : "{label}", // Property Binding
				type : sap.m.ListType.Navigation,
				press : oController.onCustomerSelected
			})
		});

		// Page footer
		var footer = new sap.m.Bar("CaseMasterFooter", {});
		
		return new sap.m.Page({
			title : "Case",
			showNavButton : true,
			navButtonTap : function(){
				app.backToPage("idLanding");				
			},
			content : [ search, list ],
			footer : footer
		});
	}

});