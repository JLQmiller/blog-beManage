import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSubmenuComponent } from './sidenav-submenu.component';

describe('SidenavSubmenuComponent', () => {
  let component: SidenavSubmenuComponent;
  let fixture: ComponentFixture<SidenavSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
