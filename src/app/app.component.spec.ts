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
import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stuntech-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("stuntech-angular");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to stuntech-angular!"
    );
  });
});
