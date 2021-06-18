import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav-bar-form',
  templateUrl: './nav-bar-form.component.html',
  styleUrls: ['./nav-bar-form.component.sass']
})
export class NavBarFormComponent implements OnInit {

  constructor(
    private location:Location
  ) { }

  ngOnInit(): void {
  }

  goback(){
    this.location.back();
  }

}
