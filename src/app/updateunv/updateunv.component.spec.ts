import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateunvComponent } from './updateunv.component';

describe('UpdateunvComponent', () => {
  let component: UpdateunvComponent;
  let fixture: ComponentFixture<UpdateunvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateunvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateunvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
