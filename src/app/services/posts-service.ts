import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      retry(3),
      map(data => data.filter(item => item.id < 6))
    );
  }

  getPostById(id: string) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
