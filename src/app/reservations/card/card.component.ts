import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() room = {
    name: '',
    images: [''],
    accommodations: ['']
  }; 
  @Input() item = 0;
}
