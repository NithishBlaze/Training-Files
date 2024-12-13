import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemserviceService } from '../shared/services/itemservice.service';
import { commonImgPath } from '../shared/constant/constantData';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  imagePath =  commonImgPath;
  itemObj= new ItemserviceService(); 
  myitems:any[]=[
    {name:"Zoro", price:1500000,description:"Skoda",imagePath:commonImgPath.Zoro},
    {name:"Zoro", price:1500000,description:"Skoda",imagePath:commonImgPath.Zoro},
    {name:"Zoro", price:1500000,description:"Skoda",imagePath:commonImgPath.Zoro},
    {name:"Zoro", price:1500000,description:"Skoda",imagePath:commonImgPath.Zoro}
  ]
}
