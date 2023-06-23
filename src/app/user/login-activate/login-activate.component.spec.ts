import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActivateComponent } from './login-activate.component';

describe('LoginActivateComponent', () => {
  let component: LoginActivateComponent;
  let fixture: ComponentFixture<LoginActivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginActivateComponent]
    });
    fixture = TestBed.createComponent(LoginActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
