import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input () pdata:any
  @Output () eventObj = new EventEmitter();

 sendData(value:any){
      // console.log(value)
      this.eventObj.emit(value);
 }
  

}
