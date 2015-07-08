sap.ui.jsview("smpdemo.OpportunityDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.OpportunityDetail
	*/ 
	getControllerName : function() {
		return "smpdemo.OpportunityDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.OpportunityDetail
	*/ 
	createContent : function(oController) {
		var oCaseTable =	new sap.m.Table("opportunityTableId", {
			columns : [ 
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Opportunity Name",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Account Name",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Amount",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Close Date",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Stage",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           })

			],
			items : {
				//Binding path
				path : "/records/",
				template : new sap.m.ColumnListItem({
					cells : [
					         new sap.m.Text({
					        	 text : {
					        		 path : "columns/0/value",
					        	 }
					         }),
					         new sap.m.Text({
					        	 text : {
					        		 path : "columns/1/value",
					        	 }
					         }),
					         new sap.m.Text({
					        	 text : {
					        		 path : "columns/2/value",
					        	 }
					         }),
					         new sap.m.Text({
					        	 text : {
					        		 path : "columns/3/value",
					        	 }
					         }),
					         new sap.m.Text({
					        	 text : {
					        		 path : "columns/4/value",
					        	 }
					         }),
					         new sap.m.Text({
					        	 text : {
					        		 path : "columns/5/value",
					        	 }
					         })
					   ]
				})
			}
		});
		var oIconTabBar = new sap.m.IconTabBar({
			id : "idOppIconTabBar",
			expanded : true,
			selectedKey : "Opportunity",
			select: [oController.handleTabSelection, oController],
			items : [new sap.m.IconTabFilter({
					id: "idOppCount",
					icon : "sap-icon://activity-items",
					iconColor : "Negative",
					count : "{}",
					text : "Opportunity",
					key : "Opportunity",
					content : [oCaseTable]
				}),
				new sap.m.IconTabFilter({
					icon : "sap-icon://add",
					text : "Opportunity Details",
					key : "Opportunity",
					content : []
				})
			]
		});
		var footer = new sap.m.Bar("OpportunityDetailFooter", {});
		return new sap.m.Page({
			title: "Opportunity Details",
			/*showNavButton: true,
			navButtonTap : function(){
				app.backToPage("idMaster");
			},*/
			content: [oIconTabBar],
			footer : footer
		});
	}

});