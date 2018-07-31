import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPresentationsComponent } from './presentations.component';

describe('PresentationsComponent', () => {
  let component: AboutPresentationsComponent;
  let fixture: ComponentFixture<AboutPresentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPresentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
