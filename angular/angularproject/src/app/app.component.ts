import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { ToggleMultipleImagesComponent } from './toggle-multiple-images/toggle-multiple-images.component';
import { ParentComponent } from './parent/parent.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { SwitchContentComponent } from './switch-content/switch-content.component';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingComponent, DirectiveComponent, ToggleImageComponent, ToggleMultipleImagesComponent, ParentComponent, MypipesComponent, SwitchContentComponent, ItemComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
