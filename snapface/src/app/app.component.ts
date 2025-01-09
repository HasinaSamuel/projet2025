import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import FaceSnap from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = [new FaceSnap(
      "Archibald",
      "Mon meilleur ami depuis tout petit !",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      new Date(),
      19
    ),
    new FaceSnap(
      "Oiseau",
      "Le roi de la foret",
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg",
      new Date(),
      55
    ),
    new FaceSnap(
      "Plante",
      "Qui pousse dans un bon endroit !",
      "https://cdn.pixabay.com/photo/2023/10/24/16/57/plant-8338691_640.jpg",
      new Date(),
      100
    )
  ];
    this.faceSnaps[1].setLocation('à la motaigne');
  }
}
