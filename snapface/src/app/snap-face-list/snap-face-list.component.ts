import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import FaceSnap from '../models/face-snap';

@Component({
  selector: 'app-snap-face-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './snap-face-list.component.html',
  styleUrl: './snap-face-list.component.scss'
})
export class SnapFaceListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapsService){}

  ngOnInit(): void{
    this.faceSnaps = this.faceSnapService.getFaceSnap();
  }
}
