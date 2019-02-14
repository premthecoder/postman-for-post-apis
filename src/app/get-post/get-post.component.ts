import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.scss']
})
export class GetPostComponent implements OnInit {

  id = "";
  requestBody: any;
  responseBody: any;
  serviceUrl: string;
  responseCode: string;
  responseClass: string;

  constructor(private postService: PostsService) { 
    let data = {};
    this.serviceUrl = this.postService.serviceUrl+"/{id}";
    this.requestBody = JSON.stringify(data, undefined, 2);
  }

  ngOnInit() {
  }

  getPost()
  {
    this.serviceUrl = "http://localhost:3000/api/posts/"+this.id;
    this.postService.getPost(this.id).subscribe(
      post =>{
        this.responseCode = "200 OK"
        this.responseClass = "text-success";
        this.responseBody = JSON.stringify(post, undefined, 2);
      },
      error => {
        this.responseClass = "text-danger";
        this.responseCode = error.status + " " + error.statusText;
        this.responseBody = error.error;
      }
      );
  }
}
