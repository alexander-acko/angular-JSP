import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanicaDetailsComponent } from './stanica-details.component';

describe('StanicaDetailsComponent', () => {
  let component: StanicaDetailsComponent;
  let fixture: ComponentFixture<StanicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanicaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StanicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
