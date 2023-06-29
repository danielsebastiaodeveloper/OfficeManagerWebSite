import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  company : string = 'Eviden';

  branches = [
    {
      location: "CDMX",
      branch: "Torre MAPFRE"
    },
    {
      location: "MTY",
      branch: "San Nicolas de los Garza"
    }
  ];
}
