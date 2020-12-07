import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpaceComponent } from './home-space.component';

describe('HomeSpaceComponent', () => {
  let component: HomeSpaceComponent;
  let fixture: ComponentFixture<HomeSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
