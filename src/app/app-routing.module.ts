import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPostComponent } from './get-post/get-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "get-posts", component: GetPostsComponent},
  {path: "get-post", component: GetPostComponent},
  {path: "add-post", component: AddPostComponent},
  {path: "edit-post", component: EditPostComponent},
  {path: "delete-post", component: DeletePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
