import { LikeType } from "./like-type.type";

export class Product {
    id!: string;
    constructor(
        public name: string,
        public description: string,
        public initPrice: number,
        public imageUrl: string,
        public like: number
    ){
        this.id = crypto.getRandomValues(new Uint32Array(1)).toString();
    }

    addLike() {
        this.like ++;
    }

    removeLike(){
        this.like --;
    }

    onlike(action: LikeType){
        if(action == "like"){
            this.addLike()
        }else if(action == "notLike"){
            this.removeLike()
        }
    }
}