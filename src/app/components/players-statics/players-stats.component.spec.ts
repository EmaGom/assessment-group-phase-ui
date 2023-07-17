import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersStatsComponent } from './players-stats.component';

describe('PlayersStatsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [PlayersStatsComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PlayersStatsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PlayersStatsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AssessmentGroupPhaseUI app is running!');
  });
});
