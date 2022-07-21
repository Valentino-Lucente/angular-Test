import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicoUfficioComponent } from './dinamico-ufficio.component';

describe('DinamicoUfficioComponent', () => {
  let component: DinamicoUfficioComponent;
  let fixture: ComponentFixture<DinamicoUfficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicoUfficioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicoUfficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
