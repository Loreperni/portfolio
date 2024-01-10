import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCodeComponent } from './p-code.component';

describe('PCodeComponent', () => {
  let component: PCodeComponent;
  let fixture: ComponentFixture<PCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PCodeComponent]
    });
    fixture = TestBed.createComponent(PCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
