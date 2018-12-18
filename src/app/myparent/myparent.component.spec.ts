import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyparentComponent } from './myparent.component';

describe('MyparentComponent', () => {
  let component: MyparentComponent;
  let fixture: ComponentFixture<MyparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
