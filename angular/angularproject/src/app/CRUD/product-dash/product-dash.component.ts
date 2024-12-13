import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-dash',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-dash.component.html',
  styleUrl: './product-dash.component.css'
})
export class ProductDashComponent {
  productArray:any=[];
  constructor(public dbobj:DbserviceService){}

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.dbobj.getRecord("products").subscribe((response:any)=>{
      console.log(response);
      this.productArray=response;
    })
  }
  deleteData(value:any){
    if(window.confirm(`do you want to delete ${value} ?` )){
      this.dbobj.deleteRecord("products",value).subscribe((response:any)=>{
        window.alert("Product Deleted Successfully !!")
        this.fetchData();
      })
    }
  }
}
