import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {
  engineID =  10;
  engineStatus = 'off';

  constructor() {
    setTimeout(() => {
      this.allowStartedEngine = true;
    }, 3000);
    this.engineStatus = Math.random() > 0.5 ? 'on' : 'off';
  }

  // membuat data binding, yang akan di panggil di .html
  //  property data binding
  allowStartedEngine = false;
  //  Event Binding
  engineStartedStatus = 'No engine was on!';
  engineName = 'Test Name';
  engineCreated = false;

  // tslint:disable-next-line:typedef
  getEngineStatus: any;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  engineStarted() {
    this.engineCreated = true;
    this.engineStatus = 'Engine was on, engine name is ' + this.engineName;
  }

  // tslint:disable-next-line:typedef
  updateEngineName(event: Event) {
    console.log(event);
    this.engineName = (event.target as HTMLInputElement).value;
  }

}
