import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { boardService } from '../board.service';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
}) 
export class TileComponent implements OnInit,OnChanges {
  constructor(private bs: boardService) {
  }

  @Input() row: number=0;
  @Input() col: number=0;
  // @Input() identifier:number=0;
   currentPlayer: string | null = '';
  ngOnInit(): void {
   
    this.currentPlayer='';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
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
    this.currentPlayer=this.bs.CurrentTurn;
    this.bs.tileClicked(this.row,this.col)
  }

  // mark3(){
  //   console.log("identifier:"+this.identifier);
  //   this.bs.tileClicked2(this.identifier);
  // }
}
