import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserPosts } from './single-user-posts';

describe('SingleUserPosts', () => {
  let component: SingleUserPosts;
  let fixture: ComponentFixture<SingleUserPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleUserPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleUserPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
