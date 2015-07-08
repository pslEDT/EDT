sap.ui.controller("smpdemo.Landing", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smpdemo.Landing
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smpdemo.Landing
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smpdemo.Landing
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smpdemo.Landing
*/
//	onExit: function() {
//
//	}
	onInit : function (evt) {
		
	},

	
	getLeads : function(){
		console.log("Lead");

		busyDialog.open();
		console.log("LeadButton clicked!!!");
		$.ajax({			
			url : "http://10.11.46.11:8081/com.persistent.sfdc.Trial?path=lead/listviews",				// the URL for the request
			type : "GET",		// whether this is a POST or GET request
			headers: {"X-SMP-APPCID":localStorage.getItem("APPCID"), "Access-Control-Allow-Origin": true},
			contentType : "application/json; charset=utf-8",
			success : function(response) {	// code to run if the request succeeds; the response is passed to the function
				console.log("Success response : ",response);
				var oModelLead = new sap.ui.model.json.JSONModel();
				oModelLead.setData(JSON.parse(response));
				sap.ui.getCore().setModel(oModelLead,"masterModel");
				localStorage.setItem("title","Lead");
				app.to("idLeadApp");
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
    
	},
	getCases : function(){
		console.log("caseBtn clicked!!!");
		busyDialog.open();
		$.ajax({			
			url : "http://10.11.46.11:8081/com.persistent.sfdc.Trial?path=case/listviews",				// the URL for the request
			type : "GET",		// whether this is a POST or GET request
			headers: {"X-SMP-APPCID":localStorage.getItem("APPCID"), "Access-Control-Allow-Origin": true},
			contentType : "application/json; charset=utf-8",
			success : function(response) {	// code to run if the request succeeds; the response is passed to the function
				console.log("Success response : ",response);
				var oModelCase = new sap.ui.model.json.JSONModel();
				oModelCase.setData(JSON.parse(response));
				sap.ui.getCore().setModel(oModelCase,"masterModel");
				localStorage.setItem("title","Case");
				app.to("idCaseApp");
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
    
	},
	getContacts : function(){
		console.log("contactBtn clicked!!!");
		busyDialog.open();
		$.ajax({			
			url : "http://10.11.46.11:8081/com.persistent.sfdc.Trial?path=contact/listviews",				// the URL for the request
			type : "GET",		// whether this is a POST or GET request
			headers: {"X-SMP-APPCID":localStorage.getItem("APPCID"), "Access-Control-Allow-Origin": true},
			contentType : "application/json; charset=utf-8",
			success : function(response) {	// code to run if the request succeeds; the response is passed to the function
				console.log("Success response : ",response);
				var oModelCase = new sap.ui.model.json.JSONModel();
				oModelCase.setData(JSON.parse(response));
				sap.ui.getCore().setModel(oModelCase,"masterModel");
				localStorage.setItem("title","Case");
				app.to("idContactApp");
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
	},
	getOpportunities : function(){
		console.log("opportunityBtn clicked!!!");
		busyDialog.open();
		$.ajax({			
			url : "http://10.11.46.11:8081/com.persistent.sfdc.Trial?path=opportunity/listviews",				// the URL for the request
			type : "GET",		// whether this is a POST or GET request
			headers: {"X-SMP-APPCID":localStorage.getItem("APPCID"), "Access-Control-Allow-Origin": true},
			contentType : "application/json; charset=utf-8",
			success : function(response) {	// code to run if the request succeeds; the response is passed to the function
				console.log("Success response : ",response);
				var oModelCase = new sap.ui.model.json.JSONModel();
				oModelCase.setData(JSON.parse(response));
				sap.ui.getCore().setModel(oModelCase,"masterModel");
				app.to("idOpportunityApp");
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
	},
	getAccounts : function(){
		console.log("accountBtn clicked!!!");
		busyDialog.open();
		$.ajax({			
			url : "http://10.11.46.11:8081/com.persistent.sfdc.Trial?path=account/listviews",				// the URL for the request
			type : "GET",		// whether this is a POST or GET request
			headers: {"X-SMP-APPCID":localStorage.getItem("APPCID"), "Access-Control-Allow-Origin": true},
			contentType : "application/json; charset=utf-8",
			success : function(response) {	// code to run if the request succeeds; the response is passed to the function
				console.log("Success response : ",response);
				var oModelCase = new sap.ui.model.json.JSONModel();
				oModelCase.setData(JSON.parse(response));
				sap.ui.getCore().setModel(oModelCase,"masterModel");
				app.to("idAccountApp");
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