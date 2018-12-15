import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMilestonesComponent } from './milestones.component';

describe('MilestonesComponent', () => {
  let component: AboutMilestonesComponent;
  let fixture: ComponentFixture<AboutMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
