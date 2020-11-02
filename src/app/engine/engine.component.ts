import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {
  // engineID =  10;
  // engineStatus = 'off';

  constructor() {
    // setTimeout(() => {
    //   this.allowStartedEngine = true;
    // }, 3000);
    // this.engineStatus = Math.random() > 0.5 ? 'on' : 'off';
  }

  // // membuat data binding, yang akan di panggil di .html
  // //  property data binding
  // allowStartedEngine = false;
  // //  Event Binding
  // engineStartedStatus = 'No engine was on!';
  // engineName = 'Test Name';
  // engineCreated = false;
  //
  // // tslint:disable-next-line:typedef
  // getEngineStatus: any;

  // LifeCycle
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('Method ini di panggil');
    this.average();
  }

  warna = '';
  avg = 0;
  sumAge = 0;

  search() {
    this.avg = 0;
    this.sumAge = 0;
    for ( let student2 of this.students ) {
      this.sumAge = this.sumAge + student2.age;
    }
    this.average();
  }

  average() {
    for(let student2 of this.students) {
      this.sumAge = this.sumAge + student2.age;
    }

    this.avg = this.sumAge / this.student2.length;
  }

  machineStatus = Math.random() > 0.5 ? 'on' : 'off';

  // tslint:disable-next-line:typedef
  studentColor(age) {
    const mod = age % 2;
    if (mod === 0) {
      this.warna = 'blue';
    } else {
      this.warna = 'red';
    }
    return this.warna;
  }
  //
  // // tslint:disable-next-line:typedef
  // engineStarted() {
  //   this.engineCreated = true;
  //   this.engineStatus = 'Engine was on, engine name is ' + this.engineName;
  // }
  //
  // // tslint:disable-next-line:typedef
  // updateEngineName(event: Event) {
  //   console.log(event);
  //   this.engineName = (event.target as HTMLInputElement).value;
  // }

}
