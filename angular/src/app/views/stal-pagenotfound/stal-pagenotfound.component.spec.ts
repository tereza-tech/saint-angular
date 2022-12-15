import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalPagenotfoundComponent } from './stal-pagenotfound.component';

describe('StalPagenotfoundComponent', () => {
  let component: StalPagenotfoundComponent;
  let fixture: ComponentFixture<StalPagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StalPagenotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StalPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
