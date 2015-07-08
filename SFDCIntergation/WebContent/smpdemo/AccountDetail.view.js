sap.ui.jsview("smpdemo.AccountDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.Detail
	*/ 
	getControllerName : function() {
		return "smpdemo.AccountDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.Detail
	*/ 
	createContent : function(oController) {
		var oLeadTable =	new sap.m.Table("accountTableId", {
			columns : [ 
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Account Name",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Account ID",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Billing State",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Phone",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Type",
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
					        		 path : "columns/6/value",
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
			id : "idAccountIconTabBar",
			expanded : true,
			selectedKey : "Account",
			select: [oController.handleTabSelection, oController],
			items : [new sap.m.IconTabFilter({
					id: "idAccountCount",
					icon : "sap-icon://activity-items",
					iconColor : "Negative",
					count : "{}",
					text : "Account",
					key : "Account",
					content : [oLeadTable]
				}),
				new sap.m.IconTabFilter({
					icon : "sap-icon://add",
					text : "Account Details",
					key : "Account",
					content : []
				})
			]
		});
		var footer = new sap.m.Bar("AccountDetailFooter", {});
		return new sap.m.Page({
			title: "Account Details",
			/*showNavButton: true,
			navButtonTap : function(){
				app.backToPage("idMaster");
			},*/
			content: [oIconTabBar],
			footer : footer
		});
	}

});