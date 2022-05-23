import { Component, VERSION } from '@angular/core';
import { boardService } from './board.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title='ticktoktoe';
  // private counter:number=1;
  // private cnt2:number=1;
  constructor(private bs: boardService) {}

  get(): boardService {
    return this.bs;
  }
  // updateTile($event:any) {
  //   console.log("inside update app")
  //   console.log($event.row+" "+$event.col+" :"+this.bs.CurrentTurn)
  //   this.bs.board[$event.row][$event.col] = this.bs.CurrentTurn;
  //   this.bs.toggle();
  //   setTimeout(() => this.bs.checkMatchFinished(), 0);
    
  // }

  
}
