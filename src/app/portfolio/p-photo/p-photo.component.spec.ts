import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPhotoComponent } from './p-photo.component';

describe('PPhotoComponent', () => {
  let component: PPhotoComponent;
  let fixture: ComponentFixture<PPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PPhotoComponent]
    });
    fixture = TestBed.createComponent(PPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
