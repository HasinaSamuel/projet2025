import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  imageUrl!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number

  ngOnInit(): void{
    this.title = "Mes image";
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
    this.description = "Liste des mes images"
    this.createdAt = new Date();
    this.snaps = 5
  }

  onAddSnap(): void {
    this.snaps++;
  }
}
