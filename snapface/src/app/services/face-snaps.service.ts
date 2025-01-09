import { SnapType } from './../models/snap-type.type';
import { Injectable } from '@angular/core';
import FaceSnap from '../models/face-snap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      19
    ),
    new FaceSnap(
      'Oiseau',
      'Le roi de la foret',
      'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg',
      new Date(),
      55
    ).withLocation('à la motaigne'),
    new FaceSnap(
      'Plante',
      'Qui pousse dans un bon endroit !',
      'https://cdn.pixabay.com/photo/2023/10/24/16/57/plant-8338691_640.jpg',
      new Date(),
      100
    ),
  ];

  getFaceSnap(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(id: string, snapType: SnapType): void {
    const findFaceSnape = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!findFaceSnape){
      throw new Error("face snap not fond");
    }
    findFaceSnape.snap(snapType);
  }
}
