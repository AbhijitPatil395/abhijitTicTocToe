import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { boardService } from '../board.service';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
}) 
export class TileComponent{
  constructor(private bs: boardService) {
  }

  @Input() row: number=0;
  @Input() col: number=0;
  @Input() currentPlayer: string | null = '';
  
  
  // @Output() update = new EventEmitter<{
  //   row: number;
  //   col: number;
  // }>();

  // mark($event:any) {
  //   this.update.emit({
  //     row: this.row,
  //     col: this.col,
  //   });
  // }

  mark2(){
    //this.currentPlayer=this.bs.CurrentTurn;
    console.log(this.bs.board)
    this.bs.tileClicked(this.row,this.col)
    
  }
}
