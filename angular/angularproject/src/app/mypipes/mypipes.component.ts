import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePipe } from '../shared/customPipe/cube.pipe';
import { SquarePipe } from '../shared/customPipe/square.pipe';
@Component({
  selector: 'app-mypipes',
  standalone: true,
  imports: [CommonModule, CubePipe, SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
    message:string = "Bankai !"
    emp:any[]=["Nithish",101,"javaDeveloper"]
    dateObj=new Date();
}
