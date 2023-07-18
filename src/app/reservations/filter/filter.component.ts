import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  spaces = ['Single Space', 'Double Space', 'Space Odditty', 'Supercalifragilisticoespiralidoso']

  doNothing(){

  }
}
