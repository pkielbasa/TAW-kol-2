import { Component, OnInit } from '@angular/core';
import {PKDataService} from "../../service/pk-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'orders-details-pk',
  templateUrl: './orders-details-pk.component.html',
  styleUrls: ['./orders-details-pk.component.css']
})
export class OrdersDetailsPKComponent implements OnInit {

  public image: string = '';
  public text: string = '';
  constructor(private service: PKDataService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
    });

  }

}
