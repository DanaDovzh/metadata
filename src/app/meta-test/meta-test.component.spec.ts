import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTestComponent } from './meta-test.component';

describe('MetaTestComponent', () => {
  let component: MetaTestComponent;
  let fixture: ComponentFixture<MetaTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaTestComponent]
    });
    fixture = TestBed.createComponent(MetaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
