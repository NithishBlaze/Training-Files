import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(public _dbObj:DbserviceService, public _router:Router){}
addData(value:any){
  console.log(value);
  this._dbObj.addRecord("products",value).subscribe(()=>{
    window.alert("Product Added Successfully !")
    this._router.navigate(["mainDashboard/productdash"])
  })
}
}
