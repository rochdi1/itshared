import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MychildComponent } from './mychild.component';
// import { By } from 'selenium-webdriver';
import { HtmlTagDefinition } from '@angular/compiler';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MychildComponent', () => {
  let component: MychildComponent;
  let fixture: ComponentFixture<MychildComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MychildComponent]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    // there shouldn't be any value initially
   const element = fixture.debugElement.nativeElement.querySelector('h1');
   const attributeValue: String = element.textContent; // like textContent/href
    expect( fixture.debugElement.query(By.css('h1'))
        .nativeElement.innerHTML
         ).toBe('');

    // let's set the @Input value and then verify again
    component.message = 'Hi there';

    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('h1'))
        .nativeElement.innerHTML
    ).toContain('Hi there');
  });
});
