import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInfoForm } from './send-info-form';

describe('SendInfoForm', () => {
  let component: SendInfoForm;
  let fixture: ComponentFixture<SendInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendInfoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SendInfoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
