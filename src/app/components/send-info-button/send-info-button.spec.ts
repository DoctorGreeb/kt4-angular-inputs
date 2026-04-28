import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInfoButton } from './send-info-button';

describe('SendInfoButton', () => {
  let component: SendInfoButton;
  let fixture: ComponentFixture<SendInfoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendInfoButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SendInfoButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
