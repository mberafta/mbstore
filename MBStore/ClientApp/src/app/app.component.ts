import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  isCollapsed: boolean = true;

  loginLink:string = "/login";

  pages: any[] = [
    {
      name: "Produits", link: "/products"
    }
  ];

}
