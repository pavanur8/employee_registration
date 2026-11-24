sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.employee.employeeregistration.controller.EmployeeRegisteration", {
        onInit() {
        },
        onPreview() {
            // var oRouter = oComponent.getRouter();
            // oRouter.navTo("RouteEmployeeProfileSummary",{
                //     name:"PAVAN PRABHAS U.R."
                // });
                // const oView = this.getView();
                
                // var sName = oView.byId("nameInput").getValue();
            // var sEmail = oView.byId("emailInput").getValue();
            // var sPhone = oView.byId("phoneInput").getValue();
            // var sStreet = oView.byId("streetInput").getValue();
            // var sCity = oView.byId("cityInput").getValue();
            // var sPincode = oView.byId("pincodeInput").getValue();
            
            // var oComponent = this.getOwnerComponent();
            // var oPersonalDeatilsModel = oComponent.getModel("oPersonalDeatilsModel");
            // var oAddressDetailsModel = oComponent.getModel("oAddressDetailsModel");
            
            // oPersonalDeatilsModel.setProperty("/name",sName);
            // oPersonalDeatilsModel.setProperty("/email",sEmail);
            // oPersonalDeatilsModel.setProperty("/phone",sPhone);
            
            // oAddressDetailsModel.setProperty("/street",sStreet);
            // oAddressDetailsModel.setProperty("/city",sCity);
            // oAddressDetailsModel.setProperty("/pincode",sPincode);
            
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.navTo("RouteEmployeeProfileSummary");
            
        }
    }); 
});