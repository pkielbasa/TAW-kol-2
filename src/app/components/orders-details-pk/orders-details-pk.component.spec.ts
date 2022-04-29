import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsPKComponent } from './orders-details-pk.component';

describe('OrdersDetailsPKComponent', () => {
  let component: OrdersDetailsPKComponent;
  let fixture: ComponentFixture<OrdersDetailsPKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsPKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
