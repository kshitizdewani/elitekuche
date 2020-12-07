import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignersDeskComponent } from './designers-desk.component';

describe('DesignersDeskComponent', () => {
  let component: DesignersDeskComponent;
  let fixture: ComponentFixture<DesignersDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignersDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignersDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
