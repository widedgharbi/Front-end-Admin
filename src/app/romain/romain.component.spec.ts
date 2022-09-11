import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomainComponent } from './romain.component';

describe('RomainComponent', () => {
  let component: RomainComponent;
  let fixture: ComponentFixture<RomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
