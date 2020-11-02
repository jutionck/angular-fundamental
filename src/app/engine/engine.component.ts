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
  allowNewEngine = false;
  constructor() {
    setTimeout(() => {
      this.allowNewEngine = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
