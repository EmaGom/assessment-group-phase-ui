import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player.model';


@Component({
  selector: 'players-stats-component',
  templateUrl: './players-stats.component.html',
  styleUrls: ['./players-stats.component.scss']
})
export class PlayersStatsComponent implements OnInit, OnDestroy {
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
