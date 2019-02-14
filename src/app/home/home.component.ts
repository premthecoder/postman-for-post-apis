import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostsService) {
      this.getPosts();
   }

  ngOnInit() {
  }

  getPosts(){
    this.postService.getPosts().subscribe(posts=> this.posts = posts);
  }

}
