import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavNewsComponent } from './fav-news.component';

describe('FavNewsComponent', () => {
  let component: FavNewsComponent;
  let fixture: ComponentFixture<FavNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
