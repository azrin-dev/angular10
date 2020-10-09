import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpMvComponent } from './bp-mv.component';

describe('BpMvComponent', () => {
  let component: BpMvComponent;
  let fixture: ComponentFixture<BpMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpMvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
