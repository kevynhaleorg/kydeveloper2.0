import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWaitingComponent } from './register-waiting.component';

describe('RegisterWaitingComponent', () => {
  let component: RegisterWaitingComponent;
  let fixture: ComponentFixture<RegisterWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
