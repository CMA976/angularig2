import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.queryParams)

  }

}
