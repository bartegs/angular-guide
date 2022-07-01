import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService
      .createPost(postData.title, postData.content)
      .subscribe(() => {
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        console.log(error)
        this.error = error.message;
        this.isFetching = false;
      }
    );
  }

  onClearPosts() {
    this.postsService.removePosts().subscribe(() => {
      this.loadedPosts = [];
    });
    this.onFetchPosts();
  }

  onUnderstandError() {
    this.error = null;
  }
}
