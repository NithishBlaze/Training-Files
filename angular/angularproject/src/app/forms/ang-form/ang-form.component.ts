import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-ang-form',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './ang-form.component.html',
  styleUrl: './ang-form.component.css'
})
export class AngFormComponent {

}
