import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BakeriesComponent } from './bakeries/bakeries.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { OrderComponent } from './order/order.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path:'order', component: OrderComponent},
  {path: 'bakeries', component: BakeriesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
