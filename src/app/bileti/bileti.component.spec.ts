import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiletiComponent } from './bileti.component';

describe('BiletiComponent', () => {
  let component: BiletiComponent;
  let fixture: ComponentFixture<BiletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiletiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
