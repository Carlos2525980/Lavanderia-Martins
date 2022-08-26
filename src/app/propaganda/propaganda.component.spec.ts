import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagandaComponent } from './propaganda.component';

describe('PropagandaComponent', () => {
  let component: PropagandaComponent;
  let fixture: ComponentFixture<PropagandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
