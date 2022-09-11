import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNVComponent } from './unv.component';

describe('UNVComponent', () => {
  let component: UNVComponent;
  let fixture: ComponentFixture<UNVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
