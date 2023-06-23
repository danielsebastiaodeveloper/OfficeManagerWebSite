import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFailComponent } from './register-fail.component';

describe('RegisterFailComponent', () => {
  let component: RegisterFailComponent;
  let fixture: ComponentFixture<RegisterFailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFailComponent]
    });
    fixture = TestBed.createComponent(RegisterFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
