import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenriComponent } from './updatenri.component';

describe('UpdatenriComponent', () => {
  let component: UpdatenriComponent;
  let fixture: ComponentFixture<UpdatenriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
