import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { RoundsComponent } from './components/rounds/rounds.component';
import { PlayersStaticsComponent } from './components/players-statics/players-statics.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SimulationHistoryDialogComponent } from './components/simulationHistoryDialog/simulation-history-dialog/simulation-history-dialog.component';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';
import { PositionsTableComponent } from './components/positions-table/positions-table.component';


@NgModule({
  declarations: [
    AppComponent,
    RoundsComponent,
    PlayersStaticsComponent,
    SimulationHistoryDialogComponent,
    GenericDialogComponent,
    PositionsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
