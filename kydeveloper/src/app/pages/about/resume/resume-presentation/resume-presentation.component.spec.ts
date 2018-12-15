import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePresentationComponent } from './resume-presentation.component';

describe('ResumePresentationComponent', () => {
  let component: ResumePresentationComponent;
  let fixture: ComponentFixture<ResumePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
