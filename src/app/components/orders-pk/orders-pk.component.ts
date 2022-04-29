import { Component, OnInit } from '@angular/core';
import {PKDataService} from "../../service/pk-data.service";

@Component({
  selector: 'orders-pk',
  templateUrl: './orders-pk.component.html',
  styleUrls: ['./orders-pk.component.css']
})
export class OrdersPKComponent implements OnInit {

  public items$: any;

  constructor(private service:PKDataService) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
    return this.service.getAll().subscribe(response =>{
      this.items$ = response
    })
}
}
