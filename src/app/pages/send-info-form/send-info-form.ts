import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

import { SendInfoButton } from '../../components/send-info-button/send-info-button';
import { SendInfoInput } from '../../components/send-info-input/send-info-input';

@Component({
  selector: 'app-send-info-form',
  standalone: true,
  imports: [FormsModule, SendInfoButton, SendInfoInput],
  templateUrl: './send-info-form.html',
  styleUrl: './send-info-form.css',
})
export class SendInfoForm {

formData = {
  name: '',
  phone: '',
  email: '',
  date: '',
};

onSubmit() {
  console.log('форма отправлена');
  console.log(this.formData);
  console.table(this.formData);
}
}