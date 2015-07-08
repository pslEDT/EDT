//Busy Dialog JSFragment
sap.ui.jsfragment("smpdemo.fragments.BusyDialog", {
	createContent : function(oController) {
		return sap.m.BusyDialog("idBusyDialog");
	}
});