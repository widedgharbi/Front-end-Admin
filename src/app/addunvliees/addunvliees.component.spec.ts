import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddunvlieesComponent } from './addunvliees.component';

describe('AddunvlieesComponent', () => {
  let component: AddunvlieesComponent;
  let fixture: ComponentFixture<AddunvlieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddunvlieesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddunvlieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
