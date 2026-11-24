sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/employee/employeeregistration/model/models",
    "sap/ui/model/json/JSONModel"

], (UIComponent, models,JSONModel) => {
    "use strict";

    return UIComponent.extend("com.employee.employeeregistration.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            var oPersonalDeatilsModel = new JSONModel("model/personalDetails.json");

            var oAddressDetailsModel = new JSONModel("model/addressDetails.json"); 

            this.setModel(oPersonalDeatilsModel,"oPersonalDeatilsModel");
            this.setModel(oAddressDetailsModel,"oAddressDetailsModel");
        }
    });
});