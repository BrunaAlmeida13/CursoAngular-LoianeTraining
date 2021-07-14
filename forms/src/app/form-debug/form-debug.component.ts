import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {
  //Passando info do form para esse component.ts
  @Input() form:any


  constructor() { }

  ngOnInit(): void {
  }

}
