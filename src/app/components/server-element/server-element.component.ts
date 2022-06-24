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
    console.log('ngOnChanges called');
    //Called after a bound input property changes
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    //Called once the component is initialized
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
    //Called during every change detection run
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    //Called after content (ng-content) has been projected into view
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    //Called every time the projected content has been checked
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    //Called after the component’s view (and child views) has been initialized
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    //Called every time the view (and child views) have been checked
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    //Called once the component is about to be destroyed
  }
}
