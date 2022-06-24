import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    content: string;
    name: string;
  } = {
    type: '',
    content: '',
    name: '',
  };

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called after a bound input property changes
  }

  ngOnInit(): void {
    //Called once the component is initialized
  }

  ngDoCheck(): void {
    //Called during every change detection run
  }

  ngAfterContentInit(): void {
    //Called after content (ng-content) has been projected into view
  }

  ngAfterContentChecked(): void {
    //Called every time the projected content has been checked
  }

  ngAfterViewInit(): void {
    //Called after the component’s view (and child views) has been initialized
  }

  ngAfterViewChecked(): void {
    //Called every time the view (and child views) have been checked
  }

  ngOnDestroy(): void {
    //Called once the component is about to be destroyed
  }
}
