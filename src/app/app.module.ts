import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { BindingAssignmentComponent } from './components/binding-assignment/binding-assignment.component';
import { DirectiveAssignmentComponent } from './components/directive-assignment/directive-assignment.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';
import { GameControlComponent } from './components/components-data-assignment/game-control/game-control.component';
import { OddComponent } from './components/components-data-assignment/odd/odd.component';
import { EvenComponent } from './components/components-data-assignment/even/even.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, BindingAssignmentComponent, DirectiveAssignmentComponent, CockpitComponent, ServerElementComponent, GameControlComponent, OddComponent, EvenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
