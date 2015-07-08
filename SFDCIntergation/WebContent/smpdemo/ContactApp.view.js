sap.ui.jsview("smpdemo.ContactApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.ContactApp
	*/ 
	getControllerName : function() {
		return "smpdemo.ContactApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.ContactApp
	*/ 
	createContent : function(oController) {

		//To avoid to have scroll for complete page
		this.setDisplayBlock(true);

		//Setting up the Split Application
		this.app = new sap.m.SplitApp();
		console.log("Create App");
		var master = sap.ui.jsview("idContactMaster", "smpdemo.ContactMaster");
		master.getController().nav = sap.ui.getCore().byId('idContactApp').getController();

		// load the master page in Left
		this.app.addPage(master, true);

		var empty = sap.ui.jsview("ContactEmpty", "smpdemo.Empty");
		// Loading the Initial Right Empty View
		this.app.addPage(empty, false);

		return this.app;
	}

});