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
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("header-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("header-page");
  }

}
