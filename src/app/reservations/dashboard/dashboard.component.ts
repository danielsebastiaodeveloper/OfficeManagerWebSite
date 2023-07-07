import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  rooms = [
    {
      name: 'Room 1',
      images: [
        'https://images.unsplash.com/photo-1687295656112-8b1d7509a5f3',
        'https://plus.unsplash.com/premium_photo-1673491311222-0b65ed5cf0ae',
        'https://images.unsplash.com/photo-1661956600684-97d3a4320e45'
      ],
      accommodations: ["Lorem 1", "Lorem 2", "Lorem 3", "Lorem 4", "Lorem 5"]
    },
    {
      name: 'Room 2',
      images: [
        'https://images.unsplash.com/photo-1688232542797-c3e762c7e3c3',
        'https://images.unsplash.com/photo-1687295656112-8b1d7509a5f3',
        'https://images.unsplash.com/photo-1661956600684-97d3a4320e45'
      ],
      accommodations: ["Lorem 1", "Lorem 2", "Lorem 3", "Lorem 4"]
    },
    {
      name: 'Room 3',
      images: [
        'https://images.unsplash.com/photo-1688232542797-c3e762c7e3c3',
        'https://plus.unsplash.com/premium_photo-1673491311222-0b65ed5cf0ae',
        'https://images.unsplash.com/photo-1661956600684-97d3a4320e45'
      ],
      accommodations: ["Lorem 1", "Lorem 2", "Lorem 3"]
    },
    {
      name: 'Room 4',
      images: [
        'https://images.unsplash.com/photo-1688232542797-c3e762c7e3c3',
        'https://images.unsplash.com/photo-1687295656112-8b1d7509a5f3',
        'https://plus.unsplash.com/premium_photo-1673491311222-0b65ed5cf0ae',
      ],
      accommodations: ["Lorem 1", "Lorem 2"]
    },
    {
      name: 'Room 5',
      images: [
        'https://images.unsplash.com/photo-1688232542797-c3e762c7e3c3',
        'https://images.unsplash.com/photo-1687295656112-8b1d7509a5f3',
        'https://plus.unsplash.com/premium_photo-1673491311222-0b65ed5cf0ae',
      ],
      accommodations: ["Lorem 1", "Lorem 2"]
    },
  ]
}
