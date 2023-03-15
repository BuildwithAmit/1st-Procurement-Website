import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRawmatrialComponent } from './find-rawmatrial.component';

describe('FindRawmatrialComponent', () => {
  let component: FindRawmatrialComponent;
  let fixture: ComponentFixture<FindRawmatrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRawmatrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindRawmatrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
