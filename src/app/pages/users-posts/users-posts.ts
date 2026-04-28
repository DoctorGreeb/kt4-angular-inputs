import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PostsService } from '../../services/posts-service';

@Component({
  selector: 'app-users-posts',
  imports: [RouterLink],
  templateUrl: './users-posts.html',
  styleUrl: './users-posts.css',
})
export class UsersPosts implements OnInit{
  private postsService = inject(PostsService);

  posts = signal<Post[]>([]);

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => this.posts.set(data));
  }
}
