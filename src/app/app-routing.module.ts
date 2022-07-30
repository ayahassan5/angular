import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';

// const routes: Routes = [
//   { path:'',redirectTo:'/Home',pathMatch:'full'},
//   { path: 'Home', component: HomeComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: 'orders', component: OrdersComponent },
//   { path:  '**',component: NotFoundComponent},  
// ];

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:pid', component: ProductDetailsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'AboutUS', component: AboutUsComponent },
      { path: 'NewProduct', component: AddProductComponent },
      { path: 'ContactUS', component: ContactUsComponent },
      
  
    ]
  },
  
   { path: 'register',component:UserRegistrationComponent},
   { path:  '**',component: NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
