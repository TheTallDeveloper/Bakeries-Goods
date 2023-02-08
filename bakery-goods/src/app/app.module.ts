import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { LocationsComponent } from './locations/locations.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BakeriesComponent } from './bakeries/bakeries.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    LocationsComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    ContactUsComponent,
    BakeriesComponent,
    OrderItemComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
