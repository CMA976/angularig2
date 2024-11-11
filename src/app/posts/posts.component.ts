import { Component } from '@angular/core';
import { GetallService } from './getall.service';
import { Post } from './post';
import { ISpinner } from '../utils/ispinner';
import { Spinner } from '../utils/spinner';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements ISpinner {
  posts = Array<Post>()
  constructor(private service:GetallService<Post>){
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
    this.posts = await this.service.getAll()
  }
}
