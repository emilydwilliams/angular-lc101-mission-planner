import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  itemBeingEdited: string = null;

  ngOnInit() {
  }
  add(itemName: string) {
    this.equipment.push(itemName);
  }
  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
  edit(item: string) {
    this.itemBeingEdited = item;
  }
  save(item: string) {
    let index = this.equipment.indexOf(this.itemBeingEdited)
    this.equipment[index] = item;
    this.itemBeingEdited = null;
  }

}
