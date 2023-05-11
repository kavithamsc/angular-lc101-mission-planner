import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
   'Human bone density'
    
  ];
  experimentsBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }
  add(list: string) {
    this.experiments.push(list);
  }
  remove(list: string) {
    let index = this.experiments.indexOf(list);
    this.experiments.splice(index, 1);
}
edit(list: string) {
  this.experimentsBeingEdited = list;
}
save(NewList: string, list: string) {
  let index = this.experiments.indexOf(list)
  this.experiments[index]=NewList;
  }
}
