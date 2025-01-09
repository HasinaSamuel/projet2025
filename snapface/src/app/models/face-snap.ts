import { SnapType } from './snap-type.type';
export default class FaceSnap {
    id: string;
    location?: string;
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number
    ){
      this.id = crypto.getRandomValues(new Uint32Array(1)).toString();
    }

    addSnap(): void{
        this.snaps++;
    }

    removeSnap(): void{
        this.snaps--;
    }

    snap(snapType:SnapType){
      if(snapType == "snap"){
        this.addSnap();
      }else if(snapType == 'unsnap'){
        this.removeSnap();
      }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
      this.setLocation(location);
      return this;
    }
}
