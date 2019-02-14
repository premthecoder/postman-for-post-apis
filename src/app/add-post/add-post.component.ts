import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  content = "";

  requestBody: any;
  responseBody: any;
  serviceUrl: string;
  responseCode: string;
  responseClass: string;

  constructor(private postService: PostsService) { 
    this.serviceUrl = "http://localhost:3000/api/posts";
    this.requestBody = JSON.stringify({}, undefined, 2);
  }

  ngOnInit() {
  }

  addPost()
  {
    let post = {
      content: this.content
    }
    this.requestBody = JSON.stringify(post, undefined, 2);
    this.postService.addPost(this.content).subscribe(
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
    )
  }

}
