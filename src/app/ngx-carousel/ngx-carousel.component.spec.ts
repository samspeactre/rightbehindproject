import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCarouselComponent } from './ngx-carousel.component';

describe('NgxCarouselComponent', () => {
  let component: NgxCarouselComponent;
  let fixture: ComponentFixture<NgxCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
