import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleComponent } from './edit-article.component';

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
