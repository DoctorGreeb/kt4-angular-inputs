import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume-home',
  imports: [RouterLink],
  templateUrl: './resume-home.html',
  styleUrl: './resume-home.css',
})
export class ResumeHome {
  downloadBodyText() {
    const bodyText = (document.querySelector('.downloadable') as HTMLElement).innerText;

    const blob = new Blob([bodyText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'body-text.txt';
    a.click();

    URL.revokeObjectURL(url);
  }
}
