import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchConceptComponent } from './switch-concept.component';

describe('SwitchConceptComponent', () => {
  let component: SwitchConceptComponent;
  let fixture: ComponentFixture<SwitchConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
