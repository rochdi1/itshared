import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyparentComponent } from './myparent.component';
import { MychildComponent } from '../mychild/mychild.component';

describe('MyparentComponent', () => {
    describe('Mocking all nested components', () => {
    let component: MyparentComponent;
    let fixture: ComponentFixture<MyparentComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MyparentComponent, MychildComponent]
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


  describe('Ignoring nested components', () => {
    let component: MyparentComponent;
    let fixture: ComponentFixture<MyparentComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [MyparentComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      });
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
});
