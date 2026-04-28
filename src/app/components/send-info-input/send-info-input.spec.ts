import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInfoInput } from './send-info-input';

describe('SendInfoInput', () => {
  let component: SendInfoInput;
  let fixture: ComponentFixture<SendInfoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendInfoInput],
    }).compileComponents();

    fixture = TestBed.createComponent(SendInfoInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
