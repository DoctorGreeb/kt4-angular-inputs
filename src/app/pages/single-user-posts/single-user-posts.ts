import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts-service';

@Component({
  selector: 'app-single-user-posts',
  imports: [],
  templateUrl: './single-user-posts.html',
  styleUrl: './single-user-posts.css',
})
export class SingleUserPosts {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService);

  postId = this.route.snapshot.paramMap.get('id');
  post = signal<Post | null>(null);

  ngOnInit(): void {
    if (this.postId) 
      this.postService.getPostById(this.postId).subscribe(data => {
    this.post.set(data)})
  }
}
