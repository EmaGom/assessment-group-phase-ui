import { Component, Input } from '@angular/core';
import { TeamStats } from 'src/app/models/team-stats.model';

@Component({
  selector: 'positions-table-component',
  templateUrl: './positions-table.component.html',
  styleUrls: ['./positions-table.component.scss']
})
export class PositionsTableComponent {
  public displayedColumns: string[] = ['position', 'name', 'played', 'win' , 'draw', 'loss', 'for', 'against', 'difference', 'points'];
  @Input() teamsStatsDataSource: TeamStats[] = [];
}
