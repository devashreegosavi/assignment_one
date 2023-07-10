import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

    interval :any;
    @Output() intervalFired = new EventEmitter<number>();
    lastnumber=0;
    onStartGame(){
        this.interval=setInterval(()=>{
          this.intervalFired.emit(this.lastnumber+1);
          this.lastnumber++;
        },1000)
    }
    onPauseGame(){
      clearInterval(this.interval);
    }
}
