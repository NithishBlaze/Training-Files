import IEmployee from "./interface";

class Organization implements IEmployee{
    empId:number;
    empName:string;
    empContact:number;

    constructor(id:number,name:string,contact:number){
        this.empId=id;
        this.empName=name;
        this.empContact=contact;
    }
    empID: number;

    employeeDetails():string {
        return `ID:${this.empId} Name:${this.empName} Contact:${this.empContact}`
    }
}

let organizationObj = new Organization(101,"nithish",987654321);
console.log(organizationObj.employeeDetails());