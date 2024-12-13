import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  id:any;
  productData:any;
  constructor(private _actrouter: ActivatedRoute, private _dbObj:DbserviceService, private _rout:Router){}

  ngOnInit(){
    this._actrouter.params.subscribe((response:any)=>{
      this.id = response.id;
      console.log(this.id);
      this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        this.productData={...res}
        console.log(this.productData)
      })
    })
  }
  updateData(value:any){
    this._dbObj.updateRecord("products",this.id,value).subscribe(()=>{
      window.alert("Product Edited Successfully !")
      this._rout.navigate(["/mainDashboard/productdash"])
    })
  }

}
