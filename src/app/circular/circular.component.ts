import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText = 'Happy Text';

  public myTodo = [
    'home work',
    'sleep',
    'private project'
  ];

  constructor() { }

  ngOnInit() {
  }
  makeHappy(){
    this.happyText = 'Manager got fired';
  }

}
