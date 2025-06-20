import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantaBackgroundComponent } from './vantabackground.component';

describe('VantabackgroundComponent', () => {
  let component: VantaBackgroundComponent;
  let fixture: ComponentFixture<VantaBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VantaBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VantaBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
