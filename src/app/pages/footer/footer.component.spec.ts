/*
=========================================================
* 4x4 Overlanders India - v1.0.0
=========================================================

* 
* Copyright 2024 Sourav Paul AKA 23INFINI8Y (23infini8y@gmail.com)
* Licensed under MIT

* Coded by Sourav Paul AKA 23INFINI8Y

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
