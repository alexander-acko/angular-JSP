import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaniciComponent } from './stanici.component';

describe('StaniciComponent', () => {
  let component: StaniciComponent;
  let fixture: ComponentFixture<StaniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaniciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
