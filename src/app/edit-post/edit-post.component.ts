import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  id: "";
  content: "";

  requestBody: any;
  responseBody: any;
  serviceUrl: string;
  responseCode: string;
  responseClass: string;


  constructor(private postService: PostsService) { 
    this.serviceUrl = this.postService.serviceUrl+"/{id}";
    this.requestBody = JSON.stringify({}, undefined, 2);
  }

  ngOnInit() {
  }

  editPost()
  {
    this.serviceUrl = "http://localhost:3000/api/posts/"+this.id;
    let post = {
      content: this.content
    }
    this.requestBody = JSON.stringify(post, undefined, 2);
      this.postService.editPost(this.id, this.content).subscribe(
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
