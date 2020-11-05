import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(item: string) {
    this.experiments.push(item);
  }
  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }
  edit(item: string) {
    this.experimentBeingEdited = item;
  }
  save(item: string) {
    let index = this.experiments.indexOf(this.experimentBeingEdited)
    this.experiments[index] = item;
    this.experimentBeingEdited = null;
  }

}
