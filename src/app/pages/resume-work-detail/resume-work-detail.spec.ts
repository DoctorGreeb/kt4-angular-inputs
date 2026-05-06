import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkDetail } from './resume-work-detail';

describe('ResumeWorkDetail', () => {
  let component: ResumeWorkDetail;
  let fixture: ComponentFixture<ResumeWorkDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeWorkDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeWorkDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
