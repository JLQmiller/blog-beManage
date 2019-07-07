import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSymbolComponent } from './icon-symbol.component';

describe('IconSymbolComponent', () => {
  let component: IconSymbolComponent;
  let fixture: ComponentFixture<IconSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
