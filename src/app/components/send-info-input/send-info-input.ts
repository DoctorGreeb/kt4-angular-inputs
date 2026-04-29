import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-info-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './send-info-input.html',
  styleUrl: './send-info-input.css',
})
export class SendInfoInput {

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';


@Input() value: string = '';
@Output() valueChange = new EventEmitter<string>();

onValueChange(newValue: string) {
  this.valueChange.emit(newValue);
}
}