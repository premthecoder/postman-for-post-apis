import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit {

  id: "";
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

  deletePost()
  {
    this.serviceUrl = "http://localhost:3000/api/posts/"+this.id;
      this.postService.deletePost(this.id).subscribe(
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
