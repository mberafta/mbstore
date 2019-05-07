import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppNgBootstrapModule } from './app-ngboostrap.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CartDropdownComponent } from './components/cart/cart-dropdown/cart-dropdown.component';
import { LoginComponent } from './components/login/login.component';

// SERVICES
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartDropdownComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppNgBootstrapModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
