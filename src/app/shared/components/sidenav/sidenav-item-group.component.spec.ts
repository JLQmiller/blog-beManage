import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavItemGroupComponent } from './sidenav-item-group.component';

describe('SidenavItemGroupComponent', () => {
  let component: SidenavItemGroupComponent;
  let fixture: ComponentFixture<SidenavItemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavItemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
