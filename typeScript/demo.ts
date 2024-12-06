console.log("Bankai !")

// string

let fname:string;
fname = "Nithish";

let lname:string="Kumar";

console.log(`FirstName:${fname} Lastname:${lname}`);

//number

let num1:number = 101;

console.log(num1);

//boolean

let cond:boolean=true;

console.log(cond);

//arrays

let courses:string [] = ["html,css,js,react"];
let course1:Array<string> = ["html,css,js,react"];
let pincode:Array<number>=[603209,603210,603211];

//tuple: it sllows us to store multiple type of data to array

let product:[number,string,boolean] = [100,"mango",true];

//6.enum:it create variable with constant values
enum days{sun,mon,tue,wed,thur,fri,sta};
let data1=days.sun;


//7.union:it allows us to store multiple values in single variable
let info:number |string |boolean= "Santo";

//8.any:when we don't what type of data is going to store in variable in that case we use it.
let mix:any= "Hello";