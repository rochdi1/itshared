/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterService } from './Master.service';

describe('Service: Master', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterService]
    });
  });

  it('should ...', inject([MasterService], (service: MasterService) => {
    expect(service).toBeTruthy();
  }));
});
