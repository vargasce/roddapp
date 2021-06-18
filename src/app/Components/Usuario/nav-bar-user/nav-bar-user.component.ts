import { Component, OnInit, Input , Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.sass']
})
export class NavBarUserComponent implements OnInit {


  @Input() nameUser:string;
  public userName:string;
  constructor(
      private navegacion: Router
  ) { }
  ngOnInit(): void {
    this.userName = this.nameUser;
  }
  // tslint:disable-next-line:typedef
  backRoddApp(){
    this.navegacion.navigate(['/homeviajeros/inicio']);
  }

}
