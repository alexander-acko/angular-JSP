import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiniiComponent } from './linii.component';

describe('LiniiComponent', () => {
  let component: LiniiComponent;
  let fixture: ComponentFixture<LiniiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiniiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiniiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
