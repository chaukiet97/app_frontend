import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmloginComponent } from './fmlogin.component';

describe('FmloginComponent', () => {
  let component: FmloginComponent;
  let fixture: ComponentFixture<FmloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
