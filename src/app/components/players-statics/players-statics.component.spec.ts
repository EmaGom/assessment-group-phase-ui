import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersStaticsComponent } from './players-statics.component';

describe('PlayersStaticsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [PlayersStaticsComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PlayersStaticsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PlayersStaticsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AssessmentGroupPhaseUI app is running!');
  });
});
