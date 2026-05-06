import { Routes } from '@angular/router';
import { IndexPage } from './pages/index-page/index-page';
import { UsersPage } from './pages/users-page/users-page';
import { AboutPage } from './pages/about-page/about-page';
import { TodosPage } from './pages/todos-page/todos-page';
import { SingleUserPage } from './pages/single-user-page/single-user-page';
import { SingleUserPosts } from './pages/single-user-posts/single-user-posts';
import { SendInfoForm } from './pages/send-info-form/send-info-form';
import { ResumeHome } from './pages/resume-home/resume-home';
import { ResumeWork } from './pages/resume-work/resume-work';
import { ResumeWorkDetail } from './pages/resume-work-detail/resume-work-detail';

export const routes: Routes = [

  { path: '', component: IndexPage },
  { path: 'users', component: UsersPage },
  { path: 'about', component: AboutPage },
  { path: 'todos', component: TodosPage },
  { path: 'users/:id', component: SingleUserPage },
  { path: 'users/:id/posts', component: SingleUserPosts },
  { path: 'form', component: SendInfoForm },
  { path: 'resume', component: ResumeHome },
  { path: 'resume/works', component: ResumeWork },
  { path: 'resume/works/:id', component: ResumeWork },
  { path: 'resume/works/work/:id', component: ResumeWorkDetail },
];

