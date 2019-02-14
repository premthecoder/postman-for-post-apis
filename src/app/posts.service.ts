import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Post } from './post';
import { createElementCssSelector } from '@angular/compiler';
import { error } from 'util';
import { of, Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public serviceUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { 
    
  }

  deletePost(id)
  {
    let postUrl = this.serviceUrl+'/'+id;
    return this.http.delete(postUrl, { observe: 'response'}).pipe(map((res)=>res.body as Post));
  }

  editPost(id, content)
  {
    let postUrl = this.serviceUrl+'/'+id;
    return this.http.put(postUrl, {"content": content}, { observe: 'response'}).pipe(map((res)=>res.body as Post));
  }

  addPost(content)
  {
    return this.http.post(this.serviceUrl,{"content": content}, { observe: 'response'}).pipe(map((res)=>res.body as Post));
  }

  getPost(id)
  {
    let postUrl = this.serviceUrl+'/'+id;
    return this.http.get(postUrl, { observe: 'response' }).pipe(map((res)=>{
      if(res.status === 200 || res.status === 304) return res.body as Post;
    }));
  }

  getPosts()
  {
    return this.http.get(this.serviceUrl).pipe(map((posts: Post[])=>posts));
  }

}
