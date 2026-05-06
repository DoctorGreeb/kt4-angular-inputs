import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Work, work_data } from '../../data/work-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-work-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './resume-work-detail.html',
  styleUrl: './resume-work-detail.css',
})
export class ResumeWorkDetail implements OnInit {
  work: Work | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.work = work_data.find(w => w.id === id);
  }
      openLink(url: string) {
    window.open(url, '_blank');
  }
}
