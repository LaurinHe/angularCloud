import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatediagComponent } from './climatediag.component';

describe('ClimatediagComponent', () => {
  let component: ClimatediagComponent;
  let fixture: ComponentFixture<ClimatediagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatediagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatediagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
