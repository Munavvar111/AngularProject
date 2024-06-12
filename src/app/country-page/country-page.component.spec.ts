import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrtPageComponent } from './country-page.component';

describe('CountrtPageComponent', () => {
  let component: CountrtPageComponent;
  let fixture: ComponentFixture<CountrtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrtPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountrtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
