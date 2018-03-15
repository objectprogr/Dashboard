import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelDetailComponent } from './fuel-detail.component';

describe('FuelDetailComponent', () => {
  let component: FuelDetailComponent;
  let fixture: ComponentFixture<FuelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
