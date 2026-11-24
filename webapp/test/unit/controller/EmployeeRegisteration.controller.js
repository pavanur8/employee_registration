/*global QUnit*/

sap.ui.define([
	"com/employee/employeeregistration/controller/EmployeeRegisteration.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmployeeRegisteration Controller");

	QUnit.test("I should test the EmployeeRegisteration controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
