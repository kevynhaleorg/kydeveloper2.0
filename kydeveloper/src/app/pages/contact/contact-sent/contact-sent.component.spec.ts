import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSentComponent } from './contact-sent.component';

describe('ContactSentComponent', () => {
  let component: ContactSentComponent;
  let fixture: ComponentFixture<ContactSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
