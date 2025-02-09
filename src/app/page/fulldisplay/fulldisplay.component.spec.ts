import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldisplayComponent } from './fulldisplay.component';

describe('FulldisplayComponent', () => {
  let component: FulldisplayComponent;
  let fixture: ComponentFixture<FulldisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulldisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
