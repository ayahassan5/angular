import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { IDToBirthPipe } from './Pipes/id-to-birth.pipe';
import { OrdersComponent } from './Components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    BorderBoxDirective,
    IDToBirthPipe,
    OrdersComponent,
    CreditCardPipe,
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegistrationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
