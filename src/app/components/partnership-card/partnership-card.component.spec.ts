import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipCardComponent } from './partnership-card.component';

describe('PartnershipCardComponent', () => {
  let component: PartnershipCardComponent;
  let fixture: ComponentFixture<PartnershipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
