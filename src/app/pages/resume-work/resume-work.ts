import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { work_data, type Work } from '../../data/work-data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resume-work',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './resume-work.html',
  styleUrl: './resume-work.css',
})
export class ResumeWork {
  works: Work[] = work_data;
}
