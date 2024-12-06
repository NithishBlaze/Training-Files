"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization = /** @class */ (function () {
    function Organization(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    Organization.prototype.employeeDetails = function () {
        return "ID:".concat(this.empId, " Name:").concat(this.empName, " Contact:").concat(this.empContact);
    };
    return Organization;
}());
var organizationObj = new Organization(101, "nithish", 987654321);
console.log(organizationObj.employeeDetails());
