import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPosts } from './users-posts';

describe('UsersPosts', () => {
  let component: UsersPosts;
  let fixture: ComponentFixture<UsersPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
