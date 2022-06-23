import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTrackListComponent } from './music-track-list.component';

describe('MusicTrackListComponent', () => {
  let component: MusicTrackListComponent;
  let fixture: ComponentFixture<MusicTrackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicTrackListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
