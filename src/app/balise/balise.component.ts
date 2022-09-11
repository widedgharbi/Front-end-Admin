import { NgModule } from '@angular/core';
import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balise',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.css'],
  
})


export class BaliseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 haha(){
    alert("hahahah");
  }

  
}
