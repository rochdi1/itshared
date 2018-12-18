/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValueService } from './Value.service';

describe('Service: Value', () => {
  let service: ValueService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    });
    service = new ValueService();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  /*
  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });
  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
  */

  // tslint:disable-next-line:no-shadowed-variable
  it('should ...', inject([ValueService], (service) => {
    expect(service).toBeTruthy();
  }));
});
