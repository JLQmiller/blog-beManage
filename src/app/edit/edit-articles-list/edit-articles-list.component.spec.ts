import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticlesListComponent } from './edit-articles-list.component';

describe('EditArticlesListComponent', () => {
  let component: EditArticlesListComponent;
  let fixture: ComponentFixture<EditArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
