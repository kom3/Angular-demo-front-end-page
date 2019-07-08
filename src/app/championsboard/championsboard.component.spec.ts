import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsboardComponent } from './championsboard.component';

describe('ChampionsboardComponent', () => {
  let component: ChampionsboardComponent;
  let fixture: ComponentFixture<ChampionsboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
