import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss']
})
export class GetPostsComponent implements OnInit {

  public posts: Post[];
  public serviceUrl: string;
  public requestBody: any;
  public responseBody: any;

  constructor(private postsService: PostsService) { 
    this.getPosts();
    let data = {};
    this.serviceUrl = this.postsService.serviceUrl;
    this.requestBody = JSON.stringify(data, undefined, 2);
  }

  ngOnInit() {
  }

  getPosts()
  {
    this.postsService.getPosts().subscribe(posts=> this.responseBody = JSON.stringify(posts, undefined, 2));
  }

}
