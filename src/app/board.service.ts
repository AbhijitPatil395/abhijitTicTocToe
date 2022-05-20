import { Injectable } from '@angular/core';

class tile{
  n:number=0;
  value:string='';
  constructor(n:number,value:string){
    this.n=n;
    this.value=value;
  }
}

@Injectable({
  providedIn:'root'
})
export class boardService {
 
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  // tileValue:tile[]=[
  //   new tile(1,''),new tile(2,''),new tile(3,''),
  //   new tile(4,''),new tile(5,''),new tile(6,''),
  //   new tile(7,''),new tile(8,''),new tile(9,'')
  // ];

  private player = 'X';

  get CurrentTurn(): string {
    return this.player;
  }

  tileClicked(i:number,j:number){
    this.board[i][j] = this.CurrentTurn;
    this.toggle();
    //setTimeout(() => this.checkMatchFinished(), 0);
  }


  // tileClicked2(n:number){
  //   console.log("n:"+(n-1));
  //   this.tileValue[n-1].value=this.player;
  //   console.log("value:"+this.tileValue[n-1].value)
  //   this.toggle();
  //   setTimeout(() => this.checkMatchFinished(), 0);
  // }

  toggle() {
    this.player = this.player == 'O' ? 'X' : 'O';
  }

  checkMatchFinished() 
  {
    let gameFinished = false;
    let player: string="";
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] == this.board[i][1] &&
        this.board[i][1] == this.board[i][2]
      ) {
        gameFinished = true;
        player = this.board[i][0];
        break;
      }

      if (
        this.board[0][i] == this.board[1][i] &&
        this.board[1][i] == this.board[2][i]
      ) {
        gameFinished = true;
        player = this.board[0][i];
        break;
      }
    }
    if (
      this.board[0][0] == this.board[1][1] &&
      this.board[1][1] == this.board[2][2]
    ) {
      gameFinished = true;
      player = this.board[0][0];
    }

    if (
      this.board[2][0] == this.board[1][1] &&
      this.board[1][1] == this.board[0][2]
    ) {
      gameFinished = true;
      player = this.board[1][1];
    }

    if (gameFinished && player != '') {
      alert(`Game Finished, ${player} Won`);
    }
  }
 
}