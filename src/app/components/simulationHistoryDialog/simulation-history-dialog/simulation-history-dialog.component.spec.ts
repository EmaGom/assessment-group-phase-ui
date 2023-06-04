import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationHistoryDialogComponent } from './simulation-history-dialog.component';

describe('SimulationHistoryDialogComponent', () => {
  let component: SimulationHistoryDialogComponent;
  let fixture: ComponentFixture<SimulationHistoryDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationHistoryDialogComponent]
    });
    fixture = TestBed.createComponent(SimulationHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
