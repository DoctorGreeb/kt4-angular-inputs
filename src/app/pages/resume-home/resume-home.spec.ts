import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHome } from './resume-home';

describe('ResumeHome', () => {
  let component: ResumeHome;
  let fixture: ComponentFixture<ResumeHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
