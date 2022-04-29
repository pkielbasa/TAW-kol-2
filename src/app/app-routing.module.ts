import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersPKComponent} from "./components/orders-pk/orders-pk.component";
import {OrdersDetailsPKComponent} from "./components/orders-details-pk/orders-details-pk.component";

const routes: Routes = [
  {
    path:'',
    component:OrdersPKComponent
  },
  {
    path:'blog/detail/:id',
    component:OrdersDetailsPKComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
