import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from "./product-details/product-details.component";

@Component({
  selector: 'app-root',
  imports: [ ProductDetailsComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'CrudApp';
}
