import { FaceSnapsService } from './../services/face-snaps.service';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import FaceSnap from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void{
    this.snapButtonText = "Oh snap";
    this.userHasSnapped = false
  }

  onSnap(): void {
    if(!this.userHasSnapped){
      this.snap()
  }else{
    this.unSnap()
  }
}

snap(): void {
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  this.snapButtonText = "Oops, un Snap!";
  this.userHasSnapped = true
}

unSnap(): void {
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  this.snapButtonText = "Oh snap";
  this.userHasSnapped = false
}
}
