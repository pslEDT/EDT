sap.ui.jsview("smpdemo.Register", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smpdemo.Register
	*/ 
	getControllerName : function() {
		return "smpdemo.Register";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smpdemo.Register
	*/ 
	createContent : function(oController) {
		var registerBtn = new sap.m.Button('registerButtonId',{
			text:'Register',
			 press: [oController.handleRegister, oController]
		}).addStyleClass('register-btn');
		
		var unRegisterBtn = new sap.m.Button('unRegisterButtonId',{
			text:'Unregister',
			 press: [oController.handleUnRegister, oController]
		}).addStyleClass('register-btn');
		
		var accessDataBtn = new sap.m.Button('accessDataButtonId',{
			text:'Access Data',
			 press: [oController.handleAccessData, oController]
		}).addStyleClass('register-btn');
		
		var oImage = new sap.m.Image("i1");
		oImage.setSrc("../SapUI5POC/css/Persistent_logo.png");
		oImage.addStyleClass("");
		
		var oSMPText = new sap.m.Label({
			text: "SMP-SFDC Integration"
		}).addStyleClass('smp-text');	
		
		var oImageHBox = new sap.m.HBox({
			items: [oImage]
		}).addStyleClass('img-container');
		oImageHBox.setJustifyContent("Center");
		
		var oTextHBox = new sap.m.HBox({
			items: [oSMPText]
		}).addStyleClass('text-container');
		oTextHBox.setJustifyContent("Center");
		
		var oBtnHBox = new sap.m.HBox({
			items: [registerBtn, unRegisterBtn,accessDataBtn]
		}).addStyleClass('button-container');
		oBtnHBox.setJustifyContent("Center");
		
 		return new sap.m.Page({
 			showHeader: false,
			content: [oImageHBox,oTextHBox, oBtnHBox ]
		}).addStyleClass('login-page-bg');
	}

});