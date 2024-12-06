class Employee{
    //data member
    id:number=101;
    name:string="Nithish";
    address:string="Chengalpattu";

    //constructor
    constructor(id:number,name:string,address:string){
        this.id=id;
        this.name=name;
        this.address=address;
    }
    //member function

    employeeDetails(){
        console.log(`${this.id},${this.name},${this.address}`);
    }
}

class Company extends Employee{
    Contact:number=103;
    Cname:string="Blaze";
    Caddress: string="Dheradun";

    constructor(id:number,name:string,address:string, conc:number,compname:string,compaddress:string){
        super(id,name,address);
        this.Contact=conc;
        this.Cname=compname;
        this.Caddress=compaddress;
    }
    employeeDetails() {
        console.log(`EmpID:${this.id} EmpName:${this.name} address:${this.address} Company:${this.Cname} CompanyAddress:${this.Caddress} Company Contact:${this.Contact}`);
    }
}

//create object of class

// let employeeObj = new Employee(102,"Blaze","Kanchipuram");
// console.log(employeeObj.id);
// employeeObj.employeeDetails();

let compObj =  new Company(201,"Nithish","Kanchipuram",9876543210,"Changepond","SIPCOT");
compObj.employeeDetails();