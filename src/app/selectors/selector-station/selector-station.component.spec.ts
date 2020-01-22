import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorStationComponent } from './selector-station.component';

describe('SelectorStationComponent', () => {
  let component: SelectorStationComponent;
  let fixture: ComponentFixture<SelectorStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
