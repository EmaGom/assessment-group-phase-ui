import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Match } from 'src/app/models/match.model';


@Component({
  selector: 'rounds-component',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit, OnDestroy {
  @Input() roundNumber :number;
  @Input() matchesDataSource: Match[] = [];

  private subscriptions: Subscription = new Subscription();
  public displayedColumns: string[] = ['homeTeam', 'score', 'awayTeam'];

  constructor() {}

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
