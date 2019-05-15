import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLibComponent } from './widget-lib.component';

describe('WidgetLibComponent', () => {
  let component: WidgetLibComponent;
  let fixture: ComponentFixture<WidgetLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
