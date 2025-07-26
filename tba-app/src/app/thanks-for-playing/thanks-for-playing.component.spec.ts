import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksForPlayingComponent } from './thanks-for-playing.component';

describe('ThanksForPlayingComponent', () => {
  let component: ThanksForPlayingComponent;
  let fixture: ComponentFixture<ThanksForPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksForPlayingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksForPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
