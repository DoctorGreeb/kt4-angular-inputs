import { Component } from '@angular/core';
import { Contrast } from '../../directives/contrast';

@Component({
  selector: 'app-send-info-form',
  imports: [Contrast],
  templateUrl: './send-info-form.html',
  styleUrl: './send-info-form.css',
})
export class SendInfoForm {}
