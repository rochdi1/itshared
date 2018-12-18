import { TestBed } from '@angular/core/testing';

import { ItshareApiService } from './itshare-api.service';
import { MyFirstComponent } from '../my-first/my-first.component';

describe('ItshareApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: ItshareApiService;
  it('should be created', () => {
    service = TestBed.get(ItshareApiService);
    expect(service).toBeTruthy();
  });
});



const expectData = ['php1', 'ajax1', 'nodejs1', 'css1', 'html1'];
const mockService = <ItshareApiService> {getCourses: () => expectData };

it('should have data when myFirstComponent created', () => {
  // Pass the mock to the constructor as the Angular injector would
  const component = new MyFirstComponent(mockService);
  expect(component.courses.length).toEqual(expectData.length);
});
