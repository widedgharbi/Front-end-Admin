import { style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  
  clickEvent(){
  }

}
