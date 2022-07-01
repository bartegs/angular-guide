import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    return this.http.post<{ name: string }>(
      'https://angular-guide-16de1-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-guide-16de1-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData: any) => {
          const postsArray: Post[] = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  removePosts() {
    return this.http.delete(
      'https://angular-guide-16de1-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
