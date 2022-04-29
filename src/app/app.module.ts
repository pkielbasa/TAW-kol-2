import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPKComponent } from './components/orders-pk/orders-pk.component';
import { OrdersItemPKComponent } from './components/orders-item-pk/orders-item-pk.component';
import { OrdersDetailsPKComponent } from './components/orders-details-pk/orders-details-pk.component';
import {PKDataService} from "./service/pk-data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrdersPKComponent,
    OrdersItemPKComponent,
    OrdersDetailsPKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PKDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
