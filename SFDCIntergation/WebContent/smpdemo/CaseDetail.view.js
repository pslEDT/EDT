sap.ui.jsview("smpdemo.CaseDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.CaseDetail
	*/ 
	getControllerName : function() {
		return "smpdemo.CaseDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.CaseDetail
	*/ 
	createContent : function(oController) {
		var oCaseTable =	new sap.m.Table("caseTableId", {
			columns : [ 
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Case Number",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Contact Name",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Subject",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Status",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Priority",
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
			id : "idCaseIconTabBar",
			expanded : true,
			selectedKey : "Case",
			select: [oController.handleTabSelection, oController],
			items : [new sap.m.IconTabFilter({
					id: "idCaseCount",
					icon : "sap-icon://activity-items",
					iconColor : "Negative",
					count : "{}",
					text : "Case",
					key : "Case",
					content : [oCaseTable]
				}),
				new sap.m.IconTabFilter({
					icon : "sap-icon://add",
					text : "Case Details",
					key : "Case",
					content : []
				})
			]
		});
		var footer = new sap.m.Bar("CasedetailFooter", {});
		return new sap.m.Page({
			title: "Case Details",
			/*showNavButton: true,
			navButtonTap : function(){
				app.backToPage("idMaster");
			},*/
			content: [oIconTabBar],
			footer : footer
		});
	}

});