import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  // membuat data binding, yang akan di panggil di .html
  // engineID =  10;
  // engineStatus = 'off';

  //  property data binding
  allowStartedEngine = false;
  //  Event Binding
  engineStartedStatus = 'No engine was on!';
  engineName = '';
  constructor() {
    setTimeout(() => {
      this.allowStartedEngine = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  engineStarted() {
    this.engineStartedStatus = 'Engine was on';
  }

  // tslint:disable-next-line:typedef
  updateEngineName(event: Event) {
    console.log(event);
    this.engineName = (event.target as HTMLInputElement).value;

  }

}
