/* eslint-disable linebreak-style */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.employee.employeeregistration.controller.EmployeeProfileSummary", {
        onInit() {
            // var oComponent = this.getOwnerComponent();
            // var oRouter = oComponent.getRouter();
            // oRouter.navTo("RouteEmployeeRegisteration");
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            // var oRoute = oRouter.getRoute("RouteEmployeeProfileSummary");
            // oRoute.attachPatternMatched(this._attachPatternMatched, this);
        },
        _attachPatternMatched() {
            // var oComponent = this.getOwnerComponent();
            // var oPersonalDeatilsModel = oComponent.getModel("oPersonalDeatilsModel");
            // var oAddressDetailsModel = oComponent.getModel("oAddressDetailsModel");

            // // Personal Details
            // var sName = oPersonalDeatilsModel.getProperty("/name");
            // var sEmail = oPersonalDeatilsModel.getProperty("/email");
            // var sPhone = oPersonalDeatilsModel.getProperty("/phone");
            // //    Address Details
            // var sStreet = oAddressDetailsModel.getProperty("/street");
            // var sCity = oAddressDetailsModel.getProperty("/city");
            // var sPincode = oAddressDetailsModel.getProperty("/pincode");

            // var oView = this.getView();
            // oView.byId("nameText").setText(sName);
            // oView.byId("emailText").setText(sEmail);
            // oView.byId("phoneText").setText(sPhone);
            // oView.byId("streetText").setText(sStreet);
            // oView.byId("cityText").setText(sCity);
            // oView.byId("pincodeText").setText(sPincode);

        },
        onBACKButtonPress() {
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.navTo("RouteEmployeeRegisteration");
        }

    });
});