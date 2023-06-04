import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player.model';


@Component({
  selector: 'players-statics-component',
  templateUrl: './players-statics.component.html',
  styleUrls: ['./players-statics.component.scss']
})
export class PlayersStaticsComponent implements OnInit, OnDestroy {
  @Input() static :string;
  @Input() playersDataSource: Player[] = [];

  private subscriptions: Subscription = new Subscription();
  public displayedColumns: string[] = ['position', 'name', 'team'];

  constructor() {
  }

  public ngOnInit(): void {
    this.displayedColumns.push(this.static);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
