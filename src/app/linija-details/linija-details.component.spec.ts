import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinijaDetailsComponent } from './linija-details.component';

describe('LinijaDetailsComponent', () => {
  let component: LinijaDetailsComponent;
  let fixture: ComponentFixture<LinijaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinijaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinijaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
