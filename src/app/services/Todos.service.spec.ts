/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosService } from './Todos.service';

describe('Service: Todos', () => {

  let mytodoservice: TodosService; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService]
    });
  });

  it('should ...', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
