import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSocialmediaComponent } from './sidebar-socialmedia.component';

describe('SidebarSocialmediaComponent', () => {
  let component: SidebarSocialmediaComponent;
  let fixture: ComponentFixture<SidebarSocialmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSocialmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
