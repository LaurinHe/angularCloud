import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFieldComponent } from './register-field.component';

describe('RegisterFieldComponent', () => {
  let component: RegisterFieldComponent;
  let fixture: ComponentFixture<RegisterFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
