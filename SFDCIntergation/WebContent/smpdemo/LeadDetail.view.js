sap.ui.jsview("smpdemo.LeadDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.LeadDetail
	*/ 
	getControllerName : function() {
		return "smpdemo.LeadDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.LeadDetail
	*/ 
	createContent : function(oController) {
		var oLeadTable =	new sap.m.Table("leadTableId", {
			columns : [ 
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Name",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   header : new sap.m.Label({
			        		   text : "Company",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "State",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Email",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Lead Status",
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
			id : "idLeadIconTabBar",
			expanded : true,
			selectedKey : "Lead",
			select: [oController.handleTabSelection, oController],
			items : [new sap.m.IconTabFilter({
					id: "idLeadCount",
					icon : "sap-icon://activity-items",
					iconColor : "Negative",
					count : "{}",
					text : "Lead",
					key : "Lead",
					content : [oLeadTable]
				}),
				new sap.m.IconTabFilter({
					icon : "sap-icon://add",
					text : "Lead Details",
					key : "Lead",
					content : []
				})
			]
		});
		var footer = new sap.m.Bar("LeadDetailFooter", {});
		return new sap.m.Page({
			title: "Lead Details",
			/*showNavButton: true,
			navButtonTap : function(){
				app.backToPage("idMaster");
			},*/
			content: [oIconTabBar],
			footer : footer
		});
	}

});