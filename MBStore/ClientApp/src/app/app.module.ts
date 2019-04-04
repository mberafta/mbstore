import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppNgBootstrapModule } from './app-ngboostrap.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

// COMPONENTS
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CartDropdownComponent } from './components/cart/cart-dropdown/cart-dropdown.component';

// SERVICES
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppNgBootstrapModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
