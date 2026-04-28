import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-info-button',
  standalone: true,
  templateUrl: './send-info-button.html',
  styleUrl: './send-info-button.css'
})
export class SendInfoButtonComponent {

  @Input() text: string = 'Submit';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}