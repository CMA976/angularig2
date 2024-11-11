import { Component } from '@angular/core';
import { GetallService } from './getall.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts = Array<Post>()
  constructor(private service:GetallService<Post>){
    this.getData()
  }
  async getData(){
    this.posts = await this.service.getAll()
  }
}
