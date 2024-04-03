import { Component, Input } from '@angular/core';
import { Post } from 'src/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() post: Post = {title:"", src:"", username:"", content:""}
  
}
