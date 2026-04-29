import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWork } from './resume-work';

describe('ResumeWork', () => {
  let component: ResumeWork;
  let fixture: ComponentFixture<ResumeWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeWork],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
