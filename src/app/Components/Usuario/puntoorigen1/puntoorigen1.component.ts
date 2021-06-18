import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../Core/Services/storage.service';
import { UserStorage } from '../../../Core/Models/storage.model';

@Component({
  selector: 'app-puntoorigen1',
  templateUrl: './puntoorigen1.component.html',
  styleUrls: ['./puntoorigen1.component.sass']
})
export class Puntoorigen1Component implements OnInit {

  private storage:StorageService;
  public vUser:UserStorage;

  constructor(

  ) {
    this.storage = new StorageService();
    this.vUser = new UserStorage('','','','','','','','','','');
    this.vUser = this.storage.getCurrentSession();
  }

  ngOnInit(): void {
  }

}
