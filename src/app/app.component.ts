import { Component } from '@angular/core';
import { Post } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postcards'
  
  posts: Post[] = [
    {title:"Neat Tree", src:"../../assets/tree.jpeg", username:"nature", content:"I saw this neat tree today"},
    {title:"Snowy Mountain", src:"../assets/mountain.jpeg", username:"mountainlover", content:"Here is a picture of a snowy mountain"},
    {title:"Mountain Biking", src:"../assets/biking.jpeg", username:"Biker", content:"I did some bike today"}
  ]
}
