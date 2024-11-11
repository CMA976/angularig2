import { Component, Inject, InjectionToken } from '@angular/core';
import { GetallService } from './getall.service';
import { Post } from './post';
import { ISpinner } from '../utils/ispinner';
import { Spinner } from '../utils/spinner';
import { HttpClient } from '@angular/common/http';
import { URLSERVER } from '../app.config';
import { Comments } from './comments';

const POSTS = new InjectionToken<string>('posts')
const COMMENTS = new InjectionToken<string>('comments')

function service(path:string, TOKEN:InjectionToken<string>){
  function GetAllFActory<T>(http:HttpClient, url:string){
    return new GetallService<T>(http,url,path)
  }
  return {
    provide:TOKEN,
    useFactory: GetAllFActory,
    deps: [HttpClient, URLSERVER]
  }
}


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  providers:[
    service('/posts', POSTS),
    service('/comments', COMMENTS)
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements ISpinner {
  posts = Array<Post>()
  comments = Array<Comments>()
  constructor(
      @Inject(POSTS) private service:GetallService<Post>,
      @Inject(COMMENTS) private serviceComments:GetallService<Comments>
    ){
    this.getData()
  }
  on(){

  }
  off(){

  }
  err(err:any){

  }

  @Spinner()
  async getData(){
    this.comments = await this.serviceComments.getAll()
    this.posts = await this.service.getAll()
  }
}
