import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCountryComponent } from './selector-country.component';

describe('SelectorCountryComponent', () => {
  let component: SelectorCountryComponent;
  let fixture: ComponentFixture<SelectorCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
