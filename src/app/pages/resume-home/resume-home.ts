import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Work, work_data } from '../../data/work-data';

@Component({
  selector: 'app-resume-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './resume-home.html',
  styleUrl: './resume-home.css',
})
export class ResumeHome {
  featuredWorks: Work[] = work_data.slice(0, 3);
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
    openLink(url: string) {
    window.open(url, '_blank');
  }
}
