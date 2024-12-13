import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData:any;
  childData:any;
 sendData(value:any){
      this.parentData=value;
      console.log(this.parentData);
 }

}