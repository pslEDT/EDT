sap.ui.jsview("smpdemo.ContactDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.ContactDetail
	*/ 
	getControllerName : function() {
		return "smpdemo.ContactDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.ContactDetail
	*/ 
	createContent : function(oController) {
		var oCaseTable =	new sap.m.Table("contactTableId", {
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
			        		   text : "Account Name",
			        		   design : sap.ui.commons.LabelDesign.Bold
			        	   })
			           }),
			           new sap.m.Column({
			        	   hAlign : "Center",
			        	   minScreenWidth : "Tablet",
			        	   demandPopin : true,
			        	   header : new sap.m.Label({
			        		   text : "Title",
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
			        		   text : "Email",
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
		
		var oContactDetailsForm = new sap.ui.layout.form.FormContainer("oAddContactFormid",{
			width: "90%",
			formElements: [
				new sap.ui.layout.form.FormElement({
					label : new sap.m.Label(
							{
								text : "Name",
							}).addStyleClass("contact-detail-form-label"),
					fields: [new sap.m.Input("idNameId", {"value": ""})]
				}),
				new sap.ui.layout.form.FormElement({
					label : new sap.m.Label(
							{
								text : "Account Name",
							}).addStyleClass("contact-detail-form-label"),
					fields: [new sap.m.Input("idaccountName", {"value": ""})]
				}),
				new sap.ui.layout.form.FormElement({
					label : new sap.m.Label(
							{
								text : "Title",
							}).addStyleClass("contact-detail-form-label"),
					fields: [new sap.m.Input("idTile", {"value": ""})]
				}),
				new sap.ui.layout.form.FormElement({
					label : new sap.m.Label(
							{
								text : "Phone",
							}).addStyleClass("contact-detail-form-label"),
					fields: [new sap.m.Input("idPhone", {"value": ""})]
				}),
				new sap.ui.layout.form.FormElement({
					label : new sap.m.Label(
							{
								text : "Email",
							}).addStyleClass("contact-detail-form-label"),
					fields: [new sap.m.Input("idEmail", {"value": ""})]
				}),
				new sap.ui.layout.form.FormElement({
					label : new sap.m.Label(
							{
								text : "",
							}).addStyleClass("contact-detail-form-label"),
					fields: [new sap.m.Button("idCreate", {"text": "Create", enabled:false}).addStyleClass("create-btn")]
				})
				/*"endButton": new sap.m.Button({
					"text": "Cancel",
					"press": [oController.closeAddOrderPopup, oController]
					})*/ 
			]
		});
		
		//Add Order Form Layout(ResponsiveGridLayout)
		var oContactDetailsFormLayout = new sap.ui.layout.form.Form("AddContactDetails",{
			width: "100%",
			layout: new sap.ui.layout.form.ResponsiveGridLayout({
				"labelSpanM": 3,
				"emptySpanL": 4,
				"emptySpanM": 4,
				"columnsL": 2,
				"columnsM": 2
			}),
			formContainers: [oContactDetailsForm]
		});
		
		var oIconTabBar = new sap.m.IconTabBar({
			id : "idContactIconTabBar",
			expanded : true,
			selectedKey : "Contact",
			select: [oController.handleTabSelection, oController],
			items : [new sap.m.IconTabFilter({
					id: "idContactCount",
					icon : "sap-icon://activity-items",
					iconColor : "Negative",
					count : "{}",
					text : "Contact",
					key : "Contact",
					content : [oCaseTable]
				}),
				new sap.m.IconTabFilter({
					icon : "sap-icon://add",
					text : "Create New",
					key : "Contact",
					content : [oContactDetailsFormLayout]
				})
			]
		});
		var footer = new sap.m.Bar("contactdetailFooter", {});
		return new sap.m.Page({
			title: "Contact Details",
			/*showNavButton: true,
			navButtonTap : function(){
				app.backToPage("idMaster");
			},*/
			content: [oIconTabBar],
			footer : footer
		});
	}

});