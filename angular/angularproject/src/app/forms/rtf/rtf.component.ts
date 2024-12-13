import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {
  empForm:any;

  ngOnInit(){
    this.empForm = new FormGroup({
      fname : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{3,30}$")]),
      lname : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{3,30}$")]),
      term : new FormControl('',[Validators.requiredTrue])
    })
  }
  getData(){
    console.log(this.empForm.value.fname,this.empForm.value.lname,this.empForm.value.term);
  }

}