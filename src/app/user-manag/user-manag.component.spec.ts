import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagComponent } from './user-manag.component';

describe('UserManagComponent', () => {
  let component: UserManagComponent;
  let fixture: ComponentFixture<UserManagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
