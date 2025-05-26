import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantabackgroundComponent } from './vantabackground.component';

describe('VantabackgroundComponent', () => {
  let component: VantabackgroundComponent;
  let fixture: ComponentFixture<VantabackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VantabackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VantabackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
