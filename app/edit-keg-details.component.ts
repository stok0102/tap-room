import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template:`
    <div class="keg-form">
      <h3>View/Edit Details:</h3>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
