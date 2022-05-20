import { Component, VERSION } from '@angular/core';
import { boardService } from './board.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[boardService]
})
export class AppComponent {
  title='ticktoktoe';
  // private counter:number=1;
  // private cnt2:number=1;
  constructor(private bs: boardService) {}
  get(): boardService {
    return this.bs;
  }
  // getCnt(){
  //   return this.counter++;
  // }
  // getCnt2(){
  //   return this.cnt2++;
  // }
  // updateTile($event:any) {

  //   this.bs.board[$event.row][$event.col] = this.bs.CurrentTurn;
  //   this.bs.toggle();
  //   setTimeout(() => this.bs.checkMatchFinished(), 0);
    
  // }

  
}
