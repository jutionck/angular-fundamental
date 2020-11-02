import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})

export class EngineComponent implements OnInit {

  warna = '';
  avg = 0;
  sumAge = 0;
  machineStatus = Math.random() > 0.5 ? 'on' : 'off';

  students = [
    {
      nis: 111,
      name: 'Juned',
      class: 'X',
      age: 20
    },
    {
      nis: 222,
      name: 'Jution',
      class: 'XI',
      age: 30
    },
    {
      nis: 333,
      name: 'Edy',
      class: 'XII',
      age: 23
    },
    {
      nis: 444,
      name: 'Doni',
      class: 'XII',
      age: 23
    }
  ];

  constructor() {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('Method ini di panggil');
    this.average();
  }
  // tslint:disable-next-line:typedef
  search() {
    this.avg = 0;
    this.sumAge = 0;
    for ( const student of this.students ) {
      this.sumAge = this.sumAge + student.age;
    }
    this.average();
  }

  // tslint:disable-next-line:typedef
  average() {
    for (const student of this.students) {
      this.sumAge = this.sumAge + student.age;
    }

    this.avg = this.sumAge / this.students.length;
  }


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

}
