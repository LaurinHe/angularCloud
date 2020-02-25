import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacreateComponent } from './datacreate.component';

describe('DatacreateComponent', () => {
  let component: DatacreateComponent;
  let fixture: ComponentFixture<DatacreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
