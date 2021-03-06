import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStationComponent } from './station-create.component';

describe('StationCreateComponent', () => {
  let component: CreateStationComponent;
  let fixture: ComponentFixture<CreateStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
