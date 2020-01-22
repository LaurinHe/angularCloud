import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDataComponent } from './selector-data.component';

describe('SelectorDataComponent', () => {
  let component: SelectorDataComponent;
  let fixture: ComponentFixture<SelectorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
