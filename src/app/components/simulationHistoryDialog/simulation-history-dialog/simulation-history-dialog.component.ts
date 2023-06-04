import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamStataics } from 'src/app/models/team-statics.model';

@Component({
  selector: 'app-simulation-history-dialog',
  templateUrl: './simulation-history-dialog.component.html',
  styleUrls: ['./simulation-history-dialog.component.scss']
})
export class SimulationHistoryDialogComponent {
  displayedColumns: string[] = ['position', 'name', 'played', 'win' , 'draw', 'loss', 'for', 'against', 'difference', 'points'];
  constructor(
    public dialogRef: MatDialogRef<SimulationHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any) {}

    public getGroupTeamStatics(index :number): TeamStataics[] {
      return this.data.simulationsGroups[index].teamStatics;
    }

}
