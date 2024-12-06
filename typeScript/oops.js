var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    //constructor
    function Employee(id, name, address) {
        //data member
        this.id = 101;
        this.name = "Nithish";
        this.address = "Chengalpattu";
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //member function
    Employee.prototype.employeeDetails = function () {
        console.log("".concat(this.id, ",").concat(this.name, ",").concat(this.address));
    };
    return Employee;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, address, conc, compname, compaddress) {
        var _this = _super.call(this, id, name, address) || this;
        _this.Contact = 103;
        _this.Cname = "Blaze";
        _this.Caddress = "Dheradun";
        _this.Contact = conc;
        _this.Cname = compname;
        _this.Caddress = compaddress;
        return _this;
    }
    Company.prototype.employeeDetails = function () {
        console.log("EmpID:".concat(this.id, " EmpName:").concat(this.name, " address:").concat(this.address, " Company:").concat(this.Cname, " CompanyAddress:").concat(this.Caddress, " Company Contact:").concat(this.Contact));
    };
    return Company;
}(Employee));
//create object of class
// let employeeObj = new Employee(102,"Blaze","Kanchipuram");
// console.log(employeeObj.id);
// employeeObj.employeeDetails();
var compObj = new Company(201, "Nithish", "Kanchipuram", 9876543210, "Changepond", "SIPCOT");
compObj.employeeDetails();
