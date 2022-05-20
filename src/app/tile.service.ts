import { Injectable } from "@angular/core";

@Injectable()
export class tile{
    static id=1;
    n:number=0;
    value:string='';
    constructor(){
      this.n=tile.id;
      this.value='';
    }
  }