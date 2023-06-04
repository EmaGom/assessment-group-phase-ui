import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GroupPhaseService } from './services/group-phase.service';
import { Subscription } from 'rxjs';
import { Match } from './models/match.model';
import { Player } from './models/player.model';
import { Group } from './models/group.model';
import { TeamStats } from './models/team-stats.model';
import { MatDialog } from '@angular/material/dialog';
import { SimulationHistoryDialogComponent } from './components/simulationHistoryDialog/simulation-history-dialog/simulation-history-dialog.component';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Group Phase';
  public displayedColumns: string[] = ['position', 'name', 'played', 'win' , 'draw', 'loss', 'for', 'against', 'difference', 'points'];
  public teamsStatsDataSource: TeamStats[] = [];
  public matchesDataSource: Match[] = [];
  public scorersDataSource: Player[] = [];
  public assistantsDataSource: Player[] = [];
  public group: Group;
  private subscriptions: Subscription = new Subscription();

  constructor(private groupPhaseService: GroupPhaseService,
    public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.newSimulation();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public newSimulation(): void {
    this.subscriptions.add(this.groupPhaseService.getGroup().subscribe(group => {
      this.group = group;
      this.teamsStatsDataSource = group.teamStats;
      this.matchesDataSource = group.matches;
      this.scorersDataSource = group.scorers;
      this.assistantsDataSource = group.assistants;
    }));
  }

  public saveSimulation(): void {
    this.subscriptions.add(this.groupPhaseService.saveSimulation(this.group).subscribe(groupId => {
      this.dialog.open(GenericDialogComponent, {
        data: {
          title: `Simulation saved! Number: ${groupId}`
        },
     });
    }));
  }

  public viewSimulationHistory(): void {
    this.subscriptions.add(this.groupPhaseService.getSimulationHistory().subscribe(simulationsGroups => {
      this.dialog.open(SimulationHistoryDialogComponent, {
        data: {
          title: "Simulations History",
          simulationsGroups: simulationsGroups
        },
        minWidth: '95vh',
        maxHeight: '90vh'
      });
    }));
  }

  public getRound(roundNumber: number): Match[]  {
    return this.matchesDataSource.filter(m => m.matchDay === roundNumber);
  }
}
