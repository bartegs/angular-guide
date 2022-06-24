import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  num: number = 0;
  constructor() {}
  interval: any;
  @Output() intervalFired: EventEmitter<number> = new EventEmitter();

  onStart(): void {
    this.interval = setInterval(() => {
      this.num = this.num + 1;
      this.intervalFired.emit(this.num);
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {}
}
