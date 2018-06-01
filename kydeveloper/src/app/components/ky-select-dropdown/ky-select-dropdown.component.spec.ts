import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KySelectDropdownComponent } from './ky-select-dropdown.component';

describe('KySelectDropdownComponent', () => {
  let component: KySelectDropdownComponent;
  let fixture: ComponentFixture<KySelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KySelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KySelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
