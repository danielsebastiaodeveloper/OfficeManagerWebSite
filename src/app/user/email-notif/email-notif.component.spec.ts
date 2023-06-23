import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNotifComponent } from './email-notif.component';

describe('EmailNotifComponent', () => {
  let component: EmailNotifComponent;
  let fixture: ComponentFixture<EmailNotifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailNotifComponent]
    });
    fixture = TestBed.createComponent(EmailNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
