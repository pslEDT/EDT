sap.ui.controller("smpdemo.CaseMaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smpdemo.CaseMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smpdemo.CaseMaster
*/
	onBeforeRendering: function() {

		console.log("Master onBeforeRendering!!!");
		//Get list Items
		list = sap.ui.getCore().byId("caseListItems");
		masterModel = sap.ui.getCore().getModel("masterModel");
		console.log(" List Model : ",masterModel);
		//Copy of Contract initial Contract list model
		initialCustomerListModel = masterModel;

		// Setting the customerListModel to the list
		list.setModel(masterModel);
	
	
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smpdemo.CaseMaster
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smpdemo.CaseMaster
*/
//	onExit: function() {
//
//	}
	handleCustomerSearch: function (evt) {
		// add filter for search
		var aFilters = [];
		var sQuery = evt.getSource().getValue();
		var list = sap.ui.getCore().byId("caseListItems");
		console.log("In Search ",list);
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("label", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		} else {
			//Setting initialContract List Model
			sap.ui.getCore().setModel(initialCustomerListModel, "caseListModel");
			list.setModel(initialCustomerListModel);
		}

		// update list binding
		var binding = list.getBinding("items");
		binding.filter(aFilters);
	},

	onCustomerSelected: function(evt){
		busyDialog.open();
		// Getting the Customer ID from evt object
		var caseId = evt.oSource.getBindingContext().getObject().id;
		console.log("caseId:",caseId);
		busyDialog.open();
		$.ajax({		
			url : "http://10.11.46.11:8081/com.persistent.sfdc.Trial?path=case/listviews/"+caseId+"/results",
			//url : "http://10.11.46.11:8081/com.psl.sfdcTest/account/"+leadId,				// the URL for the request
			type : "GET",		// whether this is a POST or GET request
			headers: {"X-SMP-APPCID":localStorage.getItem("APPCID"), "Access-Control-Allow-Origin": true},
			contentType : "application/json; charset=utf-8",
			success : function(response) {	// code to run if the request succeeds; the response is passed to the function
				console.log("Success response : ",response);
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData(JSON.parse(response));
				sap.ui.getCore().setModel(oModel,"caseDetailViewModel");
				//Context of selected Customer
				this.nav = sap.ui.getCore().byId('idCaseApp').getController();
				//Navigate to Detail Page
				this.nav.to("CaseDetail", "");
				
				caseTableId = sap.ui.getCore().byId("caseTableId");
				caseDetailViewModel = sap.ui.getCore().getModel("caseDetailViewModel");
				caseTableId.setModel(caseDetailViewModel);
			},
			error : function(xhr, status) {	// code to run if the request fails; the raw request and status codes are passed to the function				
				console.log("Error response : ",status);
				alert("Error while fetching details.");
				
			},
			complete : function(xhr, status) {		// code to run regardless of success or failure
				console.log("In complete");
				busyDialog.close();
			}
		});
	}

});