import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmprofileComponent } from './fmprofile.component';

describe('FmprofileComponent', () => {
  let component: FmprofileComponent;
  let fixture: ComponentFixture<FmprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
