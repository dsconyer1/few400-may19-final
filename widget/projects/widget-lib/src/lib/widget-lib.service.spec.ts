import { TestBed } from '@angular/core/testing';

import { WidgetLibService } from './widget-lib.service';

describe('WidgetLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetLibService = TestBed.get(WidgetLibService);
    expect(service).toBeTruthy();
  });
});
