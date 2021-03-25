import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCompComponent } from './fav-comp.component';

describe('FavCompComponent', () => {
  let component: FavCompComponent;
  let fixture: ComponentFixture<FavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
