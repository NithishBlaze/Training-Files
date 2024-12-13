import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myname:string = "NithishBlaze"
  image:string="../../public/onepieceLogo.jpg"

  inputData:string = "blaze";

  greeting(value:string){
    window.alert(`YO ! ${value}`)
  }
}
  